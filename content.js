var oldMessage;

function checkMessages() {

    var latestMessage = document.getElementsByClassName("ingame-messages")[1].children[0];

    if ((oldMessage === null || oldMessage != latestMessage) && latestMessage.className == "bigbrother") {

        alert("Important message!!!");
    }

    oldMessage = latestMessage;
}

setInterval(checkMessages, 500);
