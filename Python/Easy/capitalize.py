# Complete the solve function below.
def solve(s):
    res = ""
    before_space = True
    for x in s:
        if x == " ":
            res += x
            before_space = True
        else:
            if before_space:
                res += x.upper()
            else:
                res += x
            before_space = False

    return res
