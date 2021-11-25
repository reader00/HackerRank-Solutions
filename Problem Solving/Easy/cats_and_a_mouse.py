# Complete the catAndMouse function below.
def catAndMouse(x, y, z):
    catA = abs(x-z)
    catB = abs(y-z)
    return "Cat A" if catA < catB else "Cat B" if catB < catA else "Mouse C"
