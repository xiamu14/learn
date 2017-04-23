// Bug: if you start at the top line, coscript imports don't work

function log() {
	var args = Array.prototype.slice.call(arguments)

	args = args.filter(function(i) {
		return i && i != ""
	})

	print(args.join(" "))
}

function ipc(obj) {
	return log(JSON.stringify(obj, null))
}

function inspect(o) {
	return JSON.stringify(o)
}

function getCurrentPath() {
	return NSProcessInfo.processInfo().arguments()[0].stringByDeletingLastPathComponent()
}

function joinPath() {
	return Array.prototype.slice.call(arguments).map(stripSlashes).join("/")
}

function stripSlashes(s) {
	return s.replace(/\/$/, "")
}

function splitLines(str) {
	return str.match(/[^\r\n]+/g)
}

function getIsApplicationRunning(identifier) {
	var running = NSWorkspace.sharedWorkspace().runningApplications()

	for (var i=0; i<running.count(); i++) {
		if (running[i].bundleIdentifier() == identifier) {
			return true
		}
	}

	return false
}

function call(f) {
	if (typeof(f) == "function") {
		return f()
	}
	return f
}

function isNSType(obj, className) {
	if (obj === null || obj === undefined) {
		return false
	}
	return (obj.className && obj.className() == className)
}

function isNSString(obj) {
	return isNSType(obj, "__NSCFString")
}

function isNSArray(obj) {
	return isNSType(obj, "NSArray")
}

function isNSDictionary(obj) {
	return isNSType(obj, "NSDictionary")
}

function toBool(obj) {
	if (obj) {
		return true
	} else {
		return false
	}
}

function toArray(obj) {

	var l = obj.count()
	var r = [];

	for (var i=0; i < l; i++) {
		r.push(obj.objectAtIndex(i))
	}

	return r
}

function toObject(obj) {

	var r = {};

	for (var key in obj) {
		r[key] = obj[key]
	}

	return r
}

function toString(str) {
	return str + ""
}

function toSafeString(str) {
	return toString(str).replace(/[\n\r\u2028\u2029]/g, "\n")
}

function map(items, f) {

	var l, r = [];

	if (items.count) {
		l = items.count()
	} else {
		l = items.length
	}

	for (var i=0; i < l; i++) {
		var item
		if (items.objectAtIndex) {
			item = items.objectAtIndex(i)
		} else {
			item = items[i]
		}
		r.push(f(item, i))
	}

	return r
}

function filter(items, f) {

	var l, r = [];

	if (items.className && items.className() == "__NSArrayM") {
		l = items.count()
	} else {
		l = items.length
	}

	for (var i=0; i < l; i++) {
		if (f(items[i], i)) {
			r.push(f(items[i], i))
		}
	}

	return r
}

function getMergedObject() {
		var obj = {},
				i = 0,
				il = arguments.length,
				key;
		for (; i < il; i++) {
				for (key in arguments[i]) {
						if (arguments[i].hasOwnProperty(key)) {
								obj[key] = arguments[i][key];
						}
				}
		}
		return obj;
};

function getTemporaryFolderPath() {
	return NSTemporaryDirectory();
}

function createDirectory(path) {
	NSFileManager.defaultManager().createDirectoryAtPath_withIntermediateDirectories_attributes_error(
		path, true, {}, null
	)
}

function getFileContents(path) {
	return NSString.stringWithContentsOfFile_encoding_error(path, NSUTF8StringEncoding, nil)
}

function writeFileContents(path, contents) {
	NSString.stringWithString(contents).writeToFile_atomically_encoding_error(
		path, true, NSUTF8StringEncoding, nil)
}

function getJSON(obj) {
	return JSON.stringify(obj, null, "	")
}

function getJSJSON(variableName, path, json) {
	var tpl = ""
	tpl += "window." + variableName + " = window.__imported__ || {};\n"
	tpl += "window." + variableName + "[\"" + path + "\"] = " + json
	return tpl
}

function getTaskOutput(path, arguments) {

	pipe = NSPipe.pipe()
	file = pipe.fileHandleForReading();
	task = NSTask.alloc().init()
	task.launchPath = path
	task.arguments = arguments
	task.standardOutput = pipe
	task.launch()
	task.waitUntilExit()
	data = file.readDataToEndOfFile()
	file.closeFile()

	var output = []
	var lines = NSString.alloc().initWithData_encoding(data, NSUTF8StringEncoding).split("\n")

	return output.join("\n")
}

function getArguments() {
	return NSProcessInfo.processInfo().arguments()
}

function getIsApplicationRunning(identifier) {
	var running = NSWorkspace.sharedWorkspace().runningApplications()

	for (var i=0; i<running.count(); i++) {
		if (running[i].bundleIdentifier() == identifier) {
			return true
		}
	}
	return false
}

function exit() {
	log("Usage: coscript run.js <appName> <pluginPath> <destinationPath>")
}

function getParsedArgument(index, fallback) {
	var arguments = getArguments()

	if (index > arguments.length - 1) {
		if (fallback) {
			return fallback
		}
		exit()
	}

	return toString(arguments[index])
}

function getIPC(lines) {

	var data = {}

	lines.map(function(line) {

		if (line[0] == "{") {
			try {
				data = getMergedObject(data, JSON.parse(line))
			}
			catch(err) {}
		}
	})

	return data
}

function replaceSuffix(str, suffix) {

	if (endsWith(str.toLowerCase(), suffix)) {
		return str.slice(0, -suffix.length)
	}

	return str
}

function movePathToTrash(path) {
	var url = NSURL.fileURLWithPath(path)
	NSFileManager.defaultManager().trashItemAtURL_resultingItemURL_error(url, nil, nil)
}

function getCurrentPath() {
	return NSFileManager.defaultManager().currentDirectoryPath()
}

function getAbsolutePath(path) {

	if (!path) {
		throw new Error("getAbsolutePath: missing path")
	}

	if (path.indexOf("/") == 0) {
		return path
	}

	return joinPath(getCurrentPath(), path)
}

function getPathExists(path) {
	return NSFileManager.defaultManager().fileExistsAtPath(path)
}

function getParentPath(path) {
	return NSString.stringWithString(path).stringByDeletingLastPathComponent()
}

function copyPath(pathA, pathB) {

	pathA = getAbsolutePath(pathA)
	pathB = getAbsolutePath(pathB)

	if (getPathExists(pathB)) {
		movePathToTrash(pathB)
	}

	createDirectory(getParentPath(pathB))

	var success = NSFileManager.defaultManager().copyItemAtPath_toPath_error(pathA, pathB, nil)

	if (!success) {
		throw new Error("Could not copy: \n\t" + pathA + "\n\t" + pathB)
	}
}

// Polyfills from MDN

function endsWith(str, searchString, position) {
	var subjectString = str.toString();
	if (typeof position !== 'number' ||
		!isFinite(position) ||
		Math.floor(position) !== position ||
		position > subjectString.length) {
		position = subjectString.length
	}
	position -= searchString.length
	var lastIndex = subjectString.indexOf(searchString, position)
	return lastIndex !== -1 && lastIndex === position
}

function repeat(str, count) {
	return Array(count).join(str)
}

function getParsedArguments() {
	return {
		appIdentifier: getParsedArgument(2),
		pluginPath: getParsedArgument(3),
		destinationPath: getParsedArgument(4),
		scale: getParsedArgument(5, 1)
	}
}

function main() {

	var pluginSession = "SketchPlugin-" + Date.now()
	var options = toObject(getParsedArguments())
	options.scale = parseFloat(options.scale)

	print("Running code from " + options.pluginPath)

	var pluginCode = getFileContents(options.pluginPath)

	// Pretty nasty way to pass the options into the script
	pluginCode += "\n\nmain(" + JSON.stringify(options) + ")"

	// Find the Sketch application
	sketch = COScript.applicationForIdentifier(options.appIdentifier)

	if (!sketch) {
		throw Error("Cannot find Sketch for " + options.appIdentifier)
	}

	// Parse the output and see what we get
	var log = sketch.delegate().runPluginScript_name(pluginCode, pluginSession)
	var logData = getIPC(splitLines(log))

	print(log)
	
	copyPath(logData.exportPath, options.destinationPath)
}

main()
