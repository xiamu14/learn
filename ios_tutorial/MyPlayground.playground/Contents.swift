//: Playground - noun: a place where people can play

import UIKit

// 枚举的原始值，rawValue
enum Month: Int{
    case January = 1
    case February = 2
    case March = 3
    case April = 4
    case May = 5
    case June = 6
    case July = 7
    case August = 8
    case September = 9
    case October = 10
    case November = 11
    case December = 12
}

let curMonth = Month.October

func season( month:Month ) -> String{
    switch month {
    case .March,.April,.May:
        return "Spring"
    case .June, .July, .August:
        return "Summer"
    case .September, .October, .November:
        return "Autumn"
    case .December, .January, .February:
        return "Winter"
    }
}

func monthsBeforeNewYear(month:Month) -> Int{
    return 12 - month.rawValue
}

print(season(month:curMonth))
print(monthsBeforeNewYear(month: curMonth))

// Associate Value
enum ATMStatus{
    case Success(Int)
    case Error(String)
}

var balance = 1000

func withdraw(amount:Int)-> ATMStatus{
    if balance >= amount{
        balance -= amount
        return .Success(balance)
    }else {
        return .Error("Not Enough Money")
    }
}

//withdraw(amount: 10000)

struct Location{
    let latitude: Double
    let longitude: Double
}

let appleHeadQuarterLocation = Location(latitude: 37.3230, longitude: -122.0322)

