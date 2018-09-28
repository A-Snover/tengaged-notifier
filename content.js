//Currently this doesn't play when play is called...
var detectedSound = new Audio("resource://detected.mp3");

var messageLog = document.getElementsByClassName("ingame-messages")[1];

//Only updates when items are added to the list of messages
var config = {
    childList: true
};

//Checks if the last message was a game event. If so, creates an alert.
var checkImportant = function () {

    var latestMessage = messageLog.children[0];

    //bigbrother is the class type for system-generated messages. It is used for displaying nominations, evictions, apples, and keys.
    if (latestMessage.classList.contains("bigbrother")) {
        detectedSound.play();
        alert("Important event occurred!");
    }

};

var observer = new MutationObserver(checkImportant);

observer.observe(messageLog, config);
