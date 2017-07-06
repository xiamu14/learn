function notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    // Let's check if the user is okay to get some notification
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification("番茄时间到了!");
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function(permission) {
            // If the user is okay, let's create a notification
            if (permission === "granted") {
                var notification = new Notification("番茄时间到了!");
                Notification.permission = permission;
            }
        });
    }

    // At last, if the user already denied any notification, and you
    // want to be respectful there is no need to bother them any more.
}

function countdown() {
    var tag = setInterval(notifyMe, 40 * 6000)
}

countdown()