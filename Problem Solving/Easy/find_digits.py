#
# Complete the 'findDigits' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER n as parameter.
#

def findDigits(n):
    # Write your code here
    return len([x for x in str(n) if int(x) != 0 and n % int(x) == 0])
