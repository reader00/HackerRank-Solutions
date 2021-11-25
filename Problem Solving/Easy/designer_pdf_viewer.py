# Complete the designerPdfViewer function below.
def designerPdfViewer(h, word):
    a = list(map(lambda x: h[ord(x) - 65], list(word.upper())))
    return max(a) * len(a)
