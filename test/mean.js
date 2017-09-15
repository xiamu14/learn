var scores = [10,11,12]
var total = 0

for(let score in scores) {
    console.log(score)
    total +=score
}

var mean = total/scores.length

console.log(mean)
