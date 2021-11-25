# Complete the jumpingOnClouds function below.
def jumpingOnClouds(c):
    a, x = 0, 0
    l = len(c)
    while x < l - 1:
        if x + 2 < l:
            if c[x + 2] == 0:
                x += 1
            a += 1
        elif x == l - 2:
            if c[x + 1] == 0:
                a += 1
        x += 1
    return a
