# -- coding: utf-8 --
# 读写文件

from sys import argv

script, filename = argv

print("we're going to erase %r" % filename)
print("If you don't want that, hit CTRL-C(^C)")
print("If you do want that, hit RETURN.")

input("?")

print("Opening the file……")

target = open(filename, 'w')

print("Truncating the file. Goodbye!")

target.write('line 1: hello world')

target.close()
