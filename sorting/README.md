# Arrays + Sorting

See <https://en.wikipedia.org/wiki/Sorting_algorithm#Comparison_of_algorithms>

```text
Algorithm  | Worst       | Avg.        | Best        | Memory
-----------+-------------+-------------+-------------+-------
Bubble     | O(n^2)      | O(n^2)      | O(n)        | O(1)
Merge      | O(n*log(n)) | O(n*log(n)) | O(n*log(n)) | O(n)
Heap       | O(n*log(n)) | O(n*log(n)) | O(n*log(n)) | O(1)
Selection  | O(n^2)      | O(n^2)      | O(n^2)      | O(1)
Quick      | O(n^2)      | O(n*log(n)) | O(n*log(n)) | O(1)
Insertion  | O(n^2)      | O(n^2)      | O(n)        | O(1)
```

## Average vs. Amortized Running Time

"Average runtime"

Here's a "hiring algorithm" where we are given a list of candidates. We interview each candidate and hire any candidate who is better than every candidate interviewed so far.

```python
def hire_candidates(candidates):
  best_so_far = candidates[0]
  best_qualifications = interview(candidates[0])

  for candidate in candidates[1:]:
    qualifications = interview(candidate)

    if qualifications > best_qualifications:
      best_so_far = candidate
      best_qualifications = qualifications
      hire(candidate)
```

What is the cost of this function? If `cost_i` is the cost of interviewing and `cost_h` is the cost of hiring then cost of function is `O(cost_i * n + cost_h * m)` where `n` is the number of candidates we interview and `m` is the number of candidates we hire.

The worst case happens when the candidates arrive in order of increasing qualifications. There, we interview and hire every single candidate. The cost is `O((cost_i + cost_h) * n)`.

The best case happens when the most qualified candidate is first. We still interview everybody, but we only hire that candidate. The cost is `O(cost_i*n + cost_h) = O(cost_i*n)`.

What does "average case" mean? We have to say something about the distribution of inputs. One way to guarantee something about the distribution would be to shuffle the list of candidates before interviewing. That would be like receiving a list of candidates to interview and then choosing the next one to interview randomly.

Under this scheme, the probability that the `i`^th candidate interviewed is the best so far is `1/i`. Why? Because there are `i!` permutations of `i` candidates, but only `(i-1)!` permutations where candidate `i` appears last.

The expected number of candidates hired is therefore `1 + 1/2 + 1/3 + ... + 1/n`. If you remember your calculus, this grows like `O(ln(n))`. So the "average cost of hiring" is `O(cost_h * ln(n))`.

See <https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)> for the math.
