import math
#
# Complete the 'encryption' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#


def encryption(s):
    # Write your code here
    l = len(s)
    row = math.floor(math.sqrt(l))
    col = row if math.sqrt(l) - row == 0 else row + 1
    row = row if col * row >= l else row + 1
    result = ""
    for c in range(col):
        for r in range(row):
            idx = (col*r)+c
            if idx < l:
                result += s[idx]
        result += " "
    return result
