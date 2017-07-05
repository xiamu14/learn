function titleCase(str) {
    var strArray = str.split(' ')
    var title = ''
    strArray.forEach((word)=>{
        title += word.charAt(0).toUpperCase() + word.slice(1, word.length) + ' '
    })

    return title.trim()
}

console.log(titleCase('I\'m a little tea pot'))