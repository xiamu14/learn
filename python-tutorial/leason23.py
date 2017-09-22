# 隐形继承
class Parent(object):
    def implicit(self):
        print("PARENT implicit()")

class child(Parent):
    pass

dad = Parent()
son = child()

dad.implicit()

son.implicit()
