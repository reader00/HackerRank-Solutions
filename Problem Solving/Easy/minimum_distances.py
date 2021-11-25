
#
# Complete the 'minimumDistances' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY a as parameter.
#

def minimumDistances(a):
    s = sorted(list(set(a)))
    m = -1
    for x in s:
        idx1 = a.index(x)
        a[idx1] = ""
        if x in a:
            idx2 = a.index(x)
            dif = abs(idx2 - idx1)
            if m == -1:
                m = dif
            elif m > dif:
                m = dif
    return m
