if __name__ == '__main__':
    N = int(input())
    arr = []
    for x in range(N):
        data = input().split(" ")

        cmd = data[0]
        if len(data) > 1:
            param = list(map(int, data[1:]))

        if cmd == "append":
            arr.append(param[0])
        elif cmd == "insert":
            arr.insert(param[0], param[1])
        elif cmd == "print":
            print(arr)
        elif cmd == "remove":
            arr.remove(param[0])
        elif cmd == "sort":
            arr.sort()
        elif cmd == "pop":
            arr.pop()
        elif cmd == "reverse":
            arr.reverse()
