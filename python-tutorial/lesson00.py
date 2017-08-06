#! /usr/bin/python
#coding=utf-8

# 函数式编程，一种编程范式
# 把计算视为函数而非指令
# 纯函数式编程：不需要变量，没有副作用
# 支持高阶函数
# Python 支持的函数式编程
# 函数
#
def f(x):
    return x*x

print map(f, [1,2,3,4,5,6])