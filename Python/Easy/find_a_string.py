def count_substring(string, sub_string):
    s_l = len(string)
    sub_l = len(sub_string)

    i = 0
    for x in range(s_l - sub_l + 1):
        if sub_string == string[x:(sub_l + x)]:
            i += 1

    return i
