let http = require('http')
let fs = require('fs')
let path = require('path')
let mime = require('mime')
let cache = {}


http.createServer(function(req, res) {
    let filePath = false
    if (res.url = '/') {
        filePath = 'public/index.html'
    } else {
        filePath = 'public' + res.url
    }

    let absPath = './' + filePath
    serveStatic(res, cache, absPath)
    res.writeHead(200, { 'content-Type': 'text/plain' })
}).listen(3000, function() {
    console.log('Server running on port at http://localhost:3000/')
})


function send404(res) {
    res.writeHead(404, { 'content-Type': 'text/plain' })
    res.write('Error 404: resource not found')
    res.end()
}

function sendFile(res, filePath, fileContents) {
    res.write(200, { 'content-type': mime.lookup(path.basename(filePath)) })
    res.end(fileContents)
}

function serveStatic(res, cache, absPath) {
    if (cache[absPath]) {
        sendFile(res, absPath, cache[absPath])
    } else {
        fs.exists(absPath, function(exists) {
            if (exists) {
                fs.readFile(absPath, function(err, data) {
                    if (err) {
                        send404(res)
                    } else {
                        cache[absPath] = data
                        sendFile(res, absPath, data)
                    }
                })
            } else {
                send404(res)
            }
        })
    }
}
