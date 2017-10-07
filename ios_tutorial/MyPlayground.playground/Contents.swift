//: Playground - noun: a place where people can play

import UIKit

// String.index

var str = "Hello, Swift"
let startIndex = str.startIndex
print(str[startIndex])

let s = "one third is \(1.0/3.0)"

// NSString

let s2 = NSString(format:"one third is %.2f", 1.0/3.0) as String

// 可选型 optional

var errorCode:String? = "404"  // 整形可选型
errorCode = nil
errorCode = "405"
print(errorCode)

// 可选型的解包
"The errorCode is " + errorCode!

if let errorCode = errorCode {
    print("The errorCode is " + errorCode)
}

// Optional Channing

var errorMessage:String? = "Not Found"

if let errorMessage = errorMessage {
    print(errorMessage.uppercased())
}

print(errorMessage?.uppercased())

// 隐式可选型
var j:String! = nil
//"The message is" + j

// Array

var numbers:Array<Int> = [0,1,2,3,4,5]

var emptyArray3 = [Int]()

//var allZeros = [Int](count:5, repeateValue: 0)

// 二维数组
var board = [
    [1024,16,2,0],
    [256,4,2,2],
    [2,0,0]
]

board[2].count
board += [[0,0,0]]
board.count
