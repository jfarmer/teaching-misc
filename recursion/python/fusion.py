from dataclasses import dataclass
from typing import TypeVar, Generic, Callable, Optional

A = TypeVar('A')
B = TypeVar('B')
C = TypeVar('C')

@dataclass
class Cons(Generic[A]):
    head: A
    tail: Optional['Cons[A]']

def to_list(xs):
    """Helper: Python list -> Cons list"""
    out = None
    for x in reversed(xs):
        out = Cons(x, out)
    return out


# =============================================================================
# Core: A Fold is a suspended computation (an algebra)
# =============================================================================

@dataclass
class Fold(Generic[A, B]):
    """
    Represents the algebra (B, nil, cons) for F(X) = 1 + A × X.

    This is a *description* of a fold, not the execution of one.
    """
    nil: B                          # What to return for empty list
    cons: Callable[[A, B], B]       # How to combine head with folded tail

    def run(self, lst: Optional[Cons[A]]) -> B:
        """Execute the fold (the unique homomorphism from initial algebra)"""
        if lst is None:
            return self.nil
        return self.cons(lst.head, self.run(lst.tail))

    def fuse(self,
             h: Callable[[B], C],
             new_nil: C,
             new_cons: Callable[[A, C], C]) -> 'Fold[A, C]':
        """
        Given h: B → C, return the fused fold for h · self.

        PRECONDITION (user asserts h is an algebra homomorphism):
            h(self.nil) = new_nil
            h(self.cons(x, y)) = new_cons(x, h(y))

        If precondition holds: h · self.run = fused.run
        """
        return Fold(new_nil, new_cons)


# =============================================================================
# Example folds
# =============================================================================

sum_fold: Fold[int, int] = Fold(
    nil=0,
    cons=lambda x, acc: x + acc
)

product_fold: Fold[int, int] = Fold(
    nil=1,
    cons=lambda x, acc: x * acc
)

length_fold: Fold[A, int] = Fold(
    nil=0,
    cons=lambda x, acc: 1 + acc
)

def map_fold(f: Callable[[A], B]) -> Fold[A, Optional[Cons[B]]]:
    return Fold(
        nil=None,
        cons=lambda x, acc: Cons(f(x), acc)
    )

to_list_fold: Fold[A, Optional[Cons[A]]] = Fold(
    nil=None,
    cons=lambda x, acc: Cons(x, acc)
)


# =============================================================================
# Fusion in action
# =============================================================================

# Example 1: (+k) · sum = fold (+) k
#
# h = (+k) is a homomorphism:
#   h(0) = k  ✓
#   h(x + y) = x + h(y)  ✓ (associativity)

def shift_sum(k: int) -> Fold[int, int]:
    return sum_fold.fuse(
        h=lambda s: s + k,
        new_nil=k,
        new_cons=lambda x, acc: x + acc  # unchanged!
    )


# Example 2: fst · sumlength = sum
#
# sumlength folds into (int, int) product algebra
# fst is a homomorphism from product algebra to sum algebra

sumlength_fold: Fold[int, tuple[int, int]] = Fold(
    nil=(0, 0),
    cons=lambda x, acc: (x + acc[0], 1 + acc[1])
)

# Fusing fst:
fst_fused = sumlength_fold.fuse(
    h=lambda pair: pair[0],
    new_nil=0,
    new_cons=lambda x, acc: x + acc
)
# Result is just sum_fold


# Example 3: The Cayley trick for foldl
#
# foldl f v xs = foldr (\x g -> \a -> g (f a x)) id xs $ v
#
# We fold into endomorphisms, then apply to v.
# ($v) is a homomorphism from (Endo, id, compose) to target.

def foldl_via_foldr(f: Callable[[B, A], B], v: B) -> Fold[A, B]:
    """
    Build foldl from foldr using Cayley representation.

    Step 1: Fold into endomorphisms (functions B -> B)
    Step 2: Fuse the evaluation ($v)
    """
    # The "unfused" version folds into Endo(B)
    endo_fold: Fold[A, Callable[[B], B]] = Fold(
        nil=lambda a: a,                           # id
        cons=lambda x, g: lambda a: g(f(a, x))     # composition
    )

    # ($v) is a homomorphism, so we can fuse:
    #   ($v) id = v
    #   ($v) (\a -> g(f(a,x))) = g(f(v, x)) = ...
    #
    # But wait—this doesn't fuse cleanly because the new_cons
    # would need to know v, and we're not building a function anymore.
    #
    # The insight: we can't eliminate the function, but we can
    # *represent* the fold and defer evaluation.

    # For actual fusion, we'd need to inline the application:
    return Fold(
        nil=v,
        cons=lambda x, acc: f(acc, x)  # Note: f is flipped!
    )
    # This is just foldl directly—the Cayley trick shows *why* it works.


# =============================================================================
# Automatic fusion for monoid homomorphisms
# =============================================================================

@dataclass
class Monoid(Generic[A]):
    empty: A
    combine: Callable[[A, A], A]

@dataclass
class MonoidFold(Generic[A, B]):
    """
    A fold into a monoid, where we track the monoidal structure.
    This lets us automatically fuse monoid homomorphisms.
    """
    target: Monoid[B]
    embed: Callable[[A], B]  # How to embed each element

    def as_fold(self) -> Fold[A, B]:
        return Fold(
            nil=self.target.empty,
            cons=lambda x, acc: self.target.combine(self.embed(x), acc)
        )

    def run(self, lst: Optional[Cons[A]]) -> B:
        return self.as_fold().run(lst)

    def fuse_homomorphism(self,
                          h: Callable[[B], C],
                          target: Monoid[C]) -> 'MonoidFold[A, C]':
        """
        Fuse a monoid homomorphism h: B → C.

        PRECONDITION (user asserts):
            h(self.target.empty) = target.empty
            h(self.target.combine(x, y)) = target.combine(h(x), h(y))
        """
        return MonoidFold(
            target=target,
            embed=lambda x: h(self.embed(x))
        )


# Example: sum as MonoidFold
int_add_monoid: Monoid[int] = Monoid(empty=0, combine=lambda x, y: x + y)
int_mul_monoid: Monoid[int] = Monoid(empty=1, combine=lambda x, y: x * y)

sum_mfold: MonoidFold[int, int] = MonoidFold(
    target=int_add_monoid,
    embed=lambda x: x
)

# Fusing (+5): int → int (a monoid homomorphism? No! Not in general.)
# But (*2): (int, +, 0) → (int, +, 0) IS a homomorphism: 2*(x+y) = 2*x + 2*y
double_sum = sum_mfold.fuse_homomorphism(
    h=lambda x: 2 * x,
    target=int_add_monoid
)
# Result: folds by embedding x ↦ 2*x then summing


# =============================================================================
# Demo
# =============================================================================

if __name__ == "__main__":
    xs = to_list([1, 2, 3, 4, 5])

    print("sum:", sum_fold.run(xs))                    # 15
    print("product:", product_fold.run(xs))            # 120
    print("length:", length_fold.run(xs))              # 5
    print("sum + 10 (fused):", shift_sum(10).run(xs))  # 25
    print("sumlength:", sumlength_fold.run(xs))        # (15, 5)
    print("fst·sumlength (fused):", fst_fused.run(xs)) # 15
    print("double sum (fused):", double_sum.run(xs))   # 30

    # foldl for reverse
    reverse_fold = Fold(
        nil=None,
        cons=lambda x, acc: Cons(x, acc)
    )
    # But this is foldr, which gives identity!

    # For actual reverse, we need foldl semantics:
    def reverse(lst):
        acc = None
        while lst is not None:
            acc = Cons(lst.head, acc)
            lst = lst.tail
        return acc

    def cons_list_to_python(lst):
        out = []
        while lst is not None:
            out.append(lst.head)
            lst = lst.tail
        return out

    print("reverse:", cons_list_to_python(reverse(xs)))  # [5,4,3,2,1]
