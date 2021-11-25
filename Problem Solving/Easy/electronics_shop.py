#
# Complete the getMoneySpent function below.
#
def getMoneySpent(keyboards, drives, b):
    max = 0
    for x in keyboards:
        for y in drives:
            if x+y <= b and x+y > max:
                max = x + y
    return max if max != 0 else -1
