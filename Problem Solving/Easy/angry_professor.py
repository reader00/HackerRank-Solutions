# Complete the angryProfessor function below.
def angryProfessor(k, a):
    return "YES" if len([x for x in a if x <= 0]) < k else "NO"
