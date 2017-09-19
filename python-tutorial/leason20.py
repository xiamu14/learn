# 模块，类，对象
mystuff = {"apple": "I AM APPLES!"}

print(mystuff['apple'])

class MyStuff(object):
    def __init__(self):
        self.tangerine = 'And now a thousand years between'

    def apple(self):
        print('I AM CLASSY APPLES!')

thing = MyStuff()

print(thing.tangerine)
