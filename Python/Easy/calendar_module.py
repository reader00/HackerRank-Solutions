import datetime

date = input().split(" ")
date = list(map(lambda x: int(x), date))

res = datetime.datetime(date[2], date[0], date[1])
print(res.strftime("%A").upper())
