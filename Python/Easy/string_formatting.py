def print_formatted(number):
    l = len(format(number, 'b'))
    for x in range(1, number+1):
        print(str(x).rjust(l), format(x, 'o').rjust(l), format(
            x, 'x').rjust(l).upper(), format(x, 'b').rjust(l))
