function Stack() {
  // 各种属性和方法的声明
  let items = []

  this.push = function (element) {
    items.push(element)
  }

  this.pop = function () {
    return items.pop()
  }

  this.peek = function () {
    return items[items.length - 1]
  }

  this.isEmpty = function () {
    return items.length === 0
  }

  this.clear = function () {
    items = [];
  }

  this.print = function () {
    console.log(items.toString())
  }
}


function divideBy2(decNumber) {
  let remStack = new Stack()
  let rem = 0
  let binaryString = ''
  let decNumberTemp = decNumber

  while(decNumberTemp > 0) {
    rem = Math.floor(decNumberTemp % 2)
    remStack.push(rem)
    decNumberTemp = Math.floor(decNumberTemp / 2)
  }

  while(!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }
  return binaryString
}

console.log(divideBy2(8))

