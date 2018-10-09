function double(arr) {
  const results = arr.map(item => {
    return item * 2
  })
  return results
}

const tmp = double([1,2,3])

console.log(tmp)
