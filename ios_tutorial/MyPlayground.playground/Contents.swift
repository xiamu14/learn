//: Playground - noun: a place where people can play

import UIKit

// String.index

var str = "Hello, Swift"
let startIndex = str.startIndex
print(str[startIndex])

let s = "one third is \(1.0/3.0)"

// NSString

let s2 = NSString(format:"one third is %.2f", 1.0/3.0) as String
