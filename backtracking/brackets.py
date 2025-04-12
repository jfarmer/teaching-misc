def valid_brackets(max_len, result = ""):
    def backtrack(n_open, n_close, result):
        if n_open == 0 and n_close == 0:
            print(result)
            return

        # Open if we have spare open
        if n_open > 0:
            backtrack(n_open - 1, n_close, result + "(")

        # Close if we've opened more than we've closed
        if n_open < n_close:
            backtrack(n_open, n_close - 1, result + ")")

    backtrack(max_len, max_len, result)

valid_brackets(3)
