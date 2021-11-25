# Enter your code here. Read input from STDIN. Print output to STDOUT
a = input().split()

n = int(a[0])
m = int(a[1])

for x in range(n):
    if x == int(n/2):
        print("WELCOME".center(m, "-"))
    elif x < int(n/2):
        print((".|."*((x+1)*2-1)).center(m, "-"))
    else:
        print((".|."*((n-x)*2-1)).center(m, "-"))
