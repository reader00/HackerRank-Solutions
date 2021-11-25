def pickingNumbers(a):
    # Write your code here
    a = list(sorted(a))
    max = 0
    for n, x in enumerate(a):
        temp = [x]
        # if n<len(a)-1 and (a[n+1] == x or a[n+1] == x+1):
        for y in a[n+1:]:
            if y == x or y == x+1:
                temp.append(y)
            else:
                break
        if len(temp) > max:
            max = len(temp)
    return max
