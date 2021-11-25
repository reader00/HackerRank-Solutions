def arrayManipulation(n, queries):
    result = [0] * n
    m = 0
    for i in range(len(queries)):
        a = queries[i][0] - 1
        b = queries[i][1] - 1
        c = queries[i][2]
        result = [result[_]+c if (_ >= a and _ <= b) else result[_]
                  for _ in range(len(result))]
        if(m < max(result)):
            m = max(result)
    return m
