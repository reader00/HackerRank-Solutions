# Complete the beautifulDays function below.
def beautifulDays(i, j, k):
    a = 0
    for x in range(i, j+1):
        if ((x - int(str(x)[::-1])) / k).is_integer():
            a += 1
    return a
