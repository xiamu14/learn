(function() {

function isCompatibleBrowser() {
	return Utils.isWebKit()
}

var alertNode;

function dismissAlert() {
	alertNode.parentElement.removeChild(alertNode)
	loadProject()
}

function showAlert(html) {

	alertNode = document.createElement("div")

	alertNode.classList.add("framerAlertBackground")
	alertNode.innerHTML = html

	document.addEventListener("DOMContentLoaded", function(event) {
		document.body.appendChild(alertNode)
	})

	window.dismissAlert = dismissAlert;
}

function showBrowserAlert() {
	var html = ""
	html += "<div class='framerAlert'>"
	html += "<strong>Error: Not A WebKit Browser</strong>"
	html += "Your browser is not supported. <br> Please use Safari or Chrome.<br>"
	html += "<a class='btn' href='javascript:void(0)' onclick='dismissAlert();'>Try anyway</a>"
	html += "</div>"

	showAlert(html)
}

function init() {

	if (Utils.isFramerStudio()) {
		return
	}

	if (!isCompatibleBrowser()) {
		return showBrowserAlert()
	}

}

init()

})()
