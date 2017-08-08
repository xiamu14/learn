export let config = {
    "web": {
        "css": [],
        "js": ["jquery.js"],
        "html": []
    },
    "touch": {
        "css": ["test.css"],
        "js": ["app.js"],
        "html": ["index", "page"]
    }
}

export let entry = {
    css: combinePath(config.web.css, 'web').concat(combinePath(config.touch.css, 'touch')),
    js: combinePath(config.web.js, 'web').concat(combinePath(config.touch.js, 'touch'))
}

function combinePath(pathArr, platform) {
    let entry = []
    for (let path of pathArr) {
        entry.push('./static/src/' + platform + '/' + path.split('.')[1] + '/' + path)
    }
    return entry
}