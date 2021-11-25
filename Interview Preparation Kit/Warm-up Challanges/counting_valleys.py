#
# Complete the 'countingValleys' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER steps
#  2. STRING path
#

def countingValleys(steps, path):
    r = 0
    a = 0
    p = 2
    for x in range(steps - 2):
        if path[x] == "D":
            r -= 1
        else:
            r += 1
        if x == 0:
            p = 0 if r < 0 else 1
            a += (1 if p == 0 else 0)
        else:
            t = 0 if r < 0 else 1
            if r == 0:
                p = 1
            if p != t:
                p = 1 if p == 0 else 0
                a += 1

    return a
