# Complete the rotLeft function below.
def rotLeft(a, d):
    l = len(a)
    b = [None] * l
    for x in range(l):
        b[x - d] = a[x]
    return b
