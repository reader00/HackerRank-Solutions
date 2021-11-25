def swap_case(s):
    res = ""
    for x in s:
        res += x.upper() if x.islower() else x.lower()
    return res
