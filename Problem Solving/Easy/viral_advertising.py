#
# Complete the 'viralAdvertising' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER n as parameter.
#

def viralAdvertising(n):
    # Write your code here
    cumulative = 0
    shared = 5
    for x in range(1, n+1):
        like = shared//2
        cumulative += like
        shared = like*3
    return cumulative
