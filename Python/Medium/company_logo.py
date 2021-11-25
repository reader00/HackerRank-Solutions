if __name__ == '__main__':
    s = input()
    set_s = list(set(list(s)))
    counter = {x: 0 for x in set_s}
    for x in (set_s):
        for y in s:
            if y == x:
                counter[x] += 1
    byValue = {key: sorted([x for x, v in counter.items() if v == key])
               for key in list(set(counter.values()))}

    counter_sorted = [k for k, _ in sorted(
        counter.items(), key=lambda item: item[1], reverse=True)]

    i = 0
    while i < 3:
        values = byValue[counter[counter_sorted[i]]]
        for x in values:
            print(x, counter[x])
            i += 1
            if i == 3:
                break
