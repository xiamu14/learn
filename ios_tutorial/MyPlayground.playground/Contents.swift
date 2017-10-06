//: Playground - noun: a place where people can play

import UIKit

let capacity = 30
let volume = 50
let price = 10
let money = 20

// 三目运算符
var battery = 21
var batteryColor:UIColor

// 区间
for index in 0..<10 {
    index
}

// switch

let val = 1

switch val {
case  1:
    print("h")
default:
    ()
}

// switch 高级用法
let score = 90

switch score {
case 1...60:
    print("C")
case 61...80:
    print("B")
case 81...100:
    print("A")
default:
    break;
}

// x^4 - y^2 = 15*x*y

findAnswer:for m in 1...300 {
    for n in 1...300 {
        if m*m*m*m - n*n == 15*m*n{
            print(m,n)
            break findAnswer
        }
    }
}

// case ...where
for case let i in 0...100 where i % 3 == 0 {
    print(i)
}

//guard
func buy(money: Int, price: Int, capacity: Int, valume: Int){
    if money >= price {
        if capacity >= volume {
            print("I can buy it!")
            print("\(money-price)")
        }
    }
}
