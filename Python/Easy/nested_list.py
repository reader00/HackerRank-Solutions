if __name__ == '__main__':
    record = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        record.append([name, score])

    record.sort(key=lambda x: x[1])
    min = record[0][1]
    record = list(filter(lambda x: x[1] > min, record))
    min = record[0][1]
    names = list(filter(lambda x: x[1] == min, record))
    names.sort(key=lambda x: x[0])
    [print(x[0]) for x in names]
