# Complete the utopianTree function below.
def utopianTree(n):
    a = 1
    x = 0
    while (x < n):
        a *= 2
        x += 1
        if x < n:
            a += 1
            x += 1
    return a
