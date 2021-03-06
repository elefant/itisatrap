function toggleStatus(trackerType, loaded) {
    var status = window.document.getElementById(trackerType + "-" + loaded);
    var waiting = window.document.getElementById(trackerType + "-waiting");
    waiting.classList.add("hidden");
    status.classList.remove("hidden");
}

var blacklisted = window.document.getElementById("blacklisted-script");
blacklisted.onload = function () {
    toggleStatus("blacklisted", "loaded");
};
blacklisted.onerror = function () {
    toggleStatus("blacklisted", "blocked");
};
blacklisted.src = "https://trackertest.org/tracker.js";

var whitelisted = window.document.getElementById("whitelisted-script");
whitelisted.onload = function () {
    toggleStatus("whitelisted", "loaded");
};
whitelisted.onerror = function () {
    toggleStatus("whitelisted", "blocked");
};
whitelisted.src = "https://itisatracker.org/tracker.js";

var dnt = window.document.getElementById("dnt-off");
if (navigator.doNotTrack == "1") {
    dnt = window.document.getElementById("dnt-on");
}
var waiting = window.document.getElementById("dnt-waiting");
waiting.classList.add("hidden");
dnt.classList.remove("hidden");
