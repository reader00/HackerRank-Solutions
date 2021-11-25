# Complete the repeatedString function below.
def repeatedString(s, n):
    a = [x for x, y in enumerate(s) if y == "a"]
    l = int(n / len(s))
    t = len(a) * l
    s_temp = s[:n % len(s)]
    t += len([x for x in a if x < len(s_temp)])
    return t
