# Complete the hurdleRace function below.
def hurdleRace(k, height):
    a = max(height) - k
    return 0 if a < 0 else a
