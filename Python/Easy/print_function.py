if __name__ == '__main__':
    n = int(input())
    offset_product = 0
    offset_power = 0
    temp = 0

    total = 0
    for x in range(1, n+1):
        if x/10 >= 10 * (10**offset_power):
            offset_power += 1

        if x/10 >= 1 * (10**offset_product):
            total *= 10 * (10 ** offset_power)

        total += x * (10**(n-x))

    print(total)
