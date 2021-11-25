#
# Complete the 'rotateLeft' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER d
#  2. INTEGER_ARRAY arr
#

def rotateLeft(d, arr):
    a = []
    l = len(arr)
    start = d % l
    for x in range(l):
        idx = x+start
        if(idx >= l):
            a.append(arr[idx-l])
        else:
            a.append(arr[idx])
    return a
