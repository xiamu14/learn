# 定义自己的字典类
def new(num_buckets=256):
    """Initializes a Map with the given number of buckets """
    aMap = []
    for i in range(0, num_buckets):
        aMap.append(i)
    return aMap
