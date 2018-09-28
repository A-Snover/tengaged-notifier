var oldMessageContents = [];
var i;

//Delete for actual implementation
var itemsDetected = 0;

function checkMessages() {

    var messageContents = [];

    for (i = 0; i < 2; i++) {

        messageContents[i] = document.getElementsByClassName("ingame-messages")[1].children[i];

    }

    //    var latestMessage = document.getElementsByClassName("ingame-messages")[1].children[0];
    //    var msgContent = document.getElementsByClassName("body")[0];

    if ((oldMessageContents.length === 0 || oldMessageContents[1] != messageContents[1]) && messageContents[0].className == "bigbrother") {

        alert("Important message!!!");
        itemsDetected++;

    }

    if (oldMessageContents.length > 0) {

        var toDisplay = "old message content: " + oldMessageContents[1].innerHTML + "\<br\>new message content: " + messageContents[1].innerHTML + "\<br\> Are the two the same?: " + (oldMessageContents[1] == messageContents[1]) + "\<br\>Number of items detected so far: " + itemsDetected;

        document.getElementsByClassName("ingame-right")[0].innerHTML = toDisplay;

    }



    for (i = 0; i < 2; i++) {

        oldMessageContents[i] = messageContents[i];

    }

}

setInterval(checkMessages, 500);
