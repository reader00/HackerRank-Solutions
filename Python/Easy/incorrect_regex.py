import re

n = int(input())

for x in range(n):
    regex = input()
    try:
        re.compile(regex)
        print(True)
    except re.error:
        print(False)
