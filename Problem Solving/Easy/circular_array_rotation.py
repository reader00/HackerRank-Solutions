# Complete the 'circularArrayRotation' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER_ARRAY a
#  2. INTEGER k
#  3. INTEGER_ARRAY queries
#

def circularArrayRotation(a, k, queries):
    # Write your code here
    l = len(a)
    newArr = [a[x-(k % l) if l+x-(k % l) >= l else l+x-(k % l)]
              for x in range(l)]
    return [newArr[x] for x in queries]
