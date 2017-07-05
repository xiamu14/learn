function largerstNumArray(arr) {
    let maxArr = []
    arr.forEach((item) => {
        // console.log(item)
        item.sort((a, b) => {
            return b - a
        })
        maxArr.push(item[0])
    })
    return maxArr
}

console.log(largerstNumArray([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]))
