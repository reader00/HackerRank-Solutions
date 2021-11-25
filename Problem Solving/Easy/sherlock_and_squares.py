import math
#
# Complete the 'squares' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER a
#  2. INTEGER b
#


def squares(a, b):
    aa = round(math.sqrt(a))
    bb = round(math.sqrt(b))
    aa += 1 if aa**2 < a else 0
    bb -= 1 if bb**2 > b else 0
    return bb - (aa - 1)
