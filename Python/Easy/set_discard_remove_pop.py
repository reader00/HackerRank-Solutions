n = int(input())
s = set(map(int, input().split()))

for x in range(int(input())):
    raw = input()
    splittedRaw = raw.split()
    cmd = splittedRaw[0]
    param = "" if len(splittedRaw) == 1 else int(splittedRaw[1])

    if cmd == "pop":
        s.pop()
    if cmd == "discard":
        s.discard(param)
    if cmd == "remove":
        s.remove(param)

print(sum(list(s)))
