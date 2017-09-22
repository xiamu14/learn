class Parent(object):
    def altered(self):
        print("PARENT altered()")

class Child(Parent):
    def altered(self):
        print("CHILD,BEFORE PARENT altered()")
        super(Child, self).altered()

dad = Parent()
son = Child()

son.altered()
