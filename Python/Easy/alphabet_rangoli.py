def print_rangoli(size):
    a = chr(96 + size)
    row = []
    for x in range(1, size+1):
        char = [chr(96+size-x+y+1) for y in range(x)]
        chars = list(reversed(char))[:-1] + char
        row.append('-'.join(chars))
    res = row + list(reversed(row[:-1]))
    [print(x.center(len(row[-1]), '-')) for x in res]
