let MessageStore = require("./message_store.js");

class Sent {

    constructor () {

        this.render = () => {
            var newSentUl = document.createElement("ul");
            var allSentMessages = MessageStore.getSentMessages();
            
            allSentMessages.forEach((message, index) => {
                let newSentMessage = this.renderMessage(message);
                newSentUl.appendChild(newSentMessage);

            })

            return newSentUl;

        }


    }


    renderMessage (message) {

        var newSentLi = document.createElement("li");
        newSentLi.clasName = "message";

        newSentLi.innerHTML = 
        `<br><span class="from">To: ${message.to}</span><br>
        <span class="subject">${message.subject}</span><br><br>
        <span class="body">${message.body}`;

        return newSentLi;

    }








}

module.exports = Sent;