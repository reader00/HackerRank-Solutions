def saveThePrisoner(n, m, s):
    # Write your code here
    a = s+m % n-1
    return n if a == 0 else a if a <= n else a-n
