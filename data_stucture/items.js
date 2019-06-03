class Set {
  constructor() {
    this.items = {}
  }
  has(value) {
    return this.items.hasOwnProperty(value)
  }
  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true
    }
    return false
  }
  remove(value) {
    if (this.has(value)) {
      delete this.items[value]
      return true
    }
    return false
  }
  size() {
    return Object.keys(this.items).length
  }
  values() {
    return Object.values(this.items)
  }
  union(otherSet) {
    const unionSet = new Set()

    const values = this.values()

    const otherValues = otherSet.values()

    // 数组除重
    const allValues = values.concat(otherValues)

    allValues.map((val) => {
      unionSet.add(val)
    })

    return unionSet
  }
}

let set = new Set()

set.add(1)
set.add(2)

console.log(set.values())
