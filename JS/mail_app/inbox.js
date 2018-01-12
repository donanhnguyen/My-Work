let MessageStore = require("./message_store.js");

class Inbox {

    constructor () {

        this.render = () => {
            var allMessages = MessageStore.getInboxMessages();
            var containerUl = document.createElement("ul");
            
            allMessages.forEach((ele, index) => {
                let renderedMessage = this.renderMessage(ele);
                containerUl.appendChild(renderedMessage);
            })

            return containerUl;
           
         }


    }



    renderMessage (message) {
        var newMessageLi = document.createElement("li");
        newMessageLi.className = "message";
        newMessageLi.innerHTML = 
        `<span class='from'>${message.from}</span> <br> <span class='subject'>${message.subject}</span> <br><br> <span class='body'>${message.body}</span>`;

        return newMessageLi;

    }
    








}


module.exports = Inbox;