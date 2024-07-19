# Sets and Dictionaries

## Various Facts

I will use `Map` and `dictionary` interchangeably. In JavaScript, the map type is called `Map` and in Python it's called `dict`.

In JavaScript, you can kinda-sorta use objects to imitate the behavior of a map/dictionary. We'll talk more about what "kinda-sorta" means. This is still common because `Map` was only added to JavaScript in 2015 — 20 years after the first version of JavaScript was released!

- Most folks first encounter `Set` and think of it as a "special array", i.e., "It's like an array, but each element has to be unique and we can't index into it."
- Another way to think of it is as the "least opinionated collection": you can add elements to it, remove items from it, and ask whether a particular item is in it. That's it.
- The collection of keys in a `dict` have the structure of a `set`. Either a `dict` has a value associated with a given key or not.

## Set Operations

```python
left = {-20, -10, -1, 0, 1}
right = {0, 1, 2, 3}

print(left.intersection(right))
print(left.union(right))
print(left.difference(right))
print(left.symmetric_difference(right))
```
