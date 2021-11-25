# Enter your code here. Read input from STDIN. Print output to STDOUT
i = int(input())
for x in range(i):
    n = input().split()

    try:
        a = int(n[0])
        b = int(n[1])
        print(a // b)
    except Exception as e:
        print('Error Code:', e)
