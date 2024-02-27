# Binary Operations and Folding

## Binary Operations Identities

A function that takes two values of the same type and returns
a third value of that same type is called a "binary operation."

For example, the basic arithmetical operations (addition, multiplication,
subtraction, etc.) are all binary operations on numbers.
Array concatenation is a binary operation on arrays.
Logical AND (`&&`) and OR (`||`) are binary operations on booleans.
Set intersection and union are binary operations on sets.

Given a binary operation on a specific type, there's often a special value
that acts as a "do-nothing" value when fed into the operation. For example,
adding 0 to any number gives you back the original number.

Such a special value is called the "identity of the operation"

Examples:

```js
x == add(x, 0)                 // 0 is the identity of addition
x == multiply(x, 1)            // 1 is the identity of multiplication

x == larger(x, -Infinity)      // -Infinity is the identity of larger
x == smaller(x, +Infinity)     // +Infinity is the identity of larger


array == concat(array, [])     // [] is the identity of array concatenation

str == strConcat(str, '')      // '' is the identity of string concatenation

set == union(set, EMPTY_SET)   // The empty set is the identity of set union

bool == and(bool, true)        // true is the identity of logical AND / &&
bool == or(bool, false)        // false is the identity of logical OR / ||
```

Not every binary operation has an identity.

### Associativity

If `oper` is a binary operation then we say it's "associative" if it has the following property:

```js
  oper(x, oper(y, z)) == oper(oper(x, y), z)  for all x,y,z
```

Replace `oper` with addition to see what this is saying:

```js
  add(x, add(y, z)) == add(add(x, y), z)
        x + (y + z) == (x + y) + z
```

In other words, "parentheses don't matter", i.e., we get the same result no matter which order we
apply the operation.

Not all binary operations are associative. Subtraction isn't associative, for example.

## Left vs right fold

```js
foldLeft([10, 20, 30], add, 0)  == add(add(add(0, 10), 20), 30)
                                == (((0 + 10) + 20) + 30)

foldRight([10, 20, 30], add, 0) == add(10, add(20, add(30, 0)))
                                == (10 + (20 + (30 + 0)))
```

foldLeft and foldRight differ in how they group operations w/ parantheses, i.e.,
which pairwise operations are performed first.
foldLeft performs operation starting from left-most elements
foldRight performs operation starting from right-most elements

If fn is associative then foldLeft and foldRight will return the same result
Otherwise, one is often more efficient than the other depending on what structure
you're folding over.

Linked lists like "prepend" and foldRight is prepend-friendly
Arrays like "append" and foldLeft is append-friendly

If you're passing a binary operation to fold then the initial value should be
the identity of that operation, if it exists. If it doesn't exist then you
probably want to disallow empty lists as input.
