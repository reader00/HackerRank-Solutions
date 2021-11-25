# Complete the jumpingOnClouds function below.
def jumpingOnClouds(c, k):
    e = 100
    l = len(c)
    i = k % l
    while(i != 0):
        e -= 1 if c[i] == 0 else 3
        i += k
        i = i-l if i >= l else i
    return e - (3 if c[0] == 1 else 1)
