# Complete the hourglassSum function below.
def hourglassSum(arr):
    t = []
    for x in range(len(arr) - 2):
        for y in range(len(arr[0]) - 2):
            a = arr[x][y]
            b = arr[x][y+1]
            c = arr[x][y+2]
            d = arr[x + 1][y+1]
            e = arr[x + 2][y]
            f = arr[x + 2][y+1]
            g = arr[x + 2][y + 2]
            t.append(a + b + c + d + e + f + g)

    return max(t)
