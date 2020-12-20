

struct Fib {
    var fibMemo: [UInt] = [0,1]
    
    mutating func getFib(n: Int) -> UInt {
        if n >= fibMemo.count {
           fibMemo.append(getFib(n: n-1)+getFib(n: n-2))
        }
        return fibMemo[n]
    }
}

var fib = Fib()

fib.getFib(n: 4)

func fib4(n: UInt) -> UInt {
    if (n == 0) {
        return n
    }
    var last: UInt = 0, next: UInt = 1
    for _ in 1..<n {
        (last, next) = (next, last + next)
    }
    return next
}
 
fib4(n: 4)
