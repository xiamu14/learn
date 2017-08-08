export function combinePath(pathArr, platform) {
    let entry = []
    for (let path of pathArr) {
        entry.push('./static/src/' + platform + '/' + path.split('.')[1] + '/' + path)
    }

    return entry
}