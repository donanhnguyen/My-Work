let MessageStore = require("./message_store.js");

class Compose {

    constructor () {

        this.render = () => {
            var composeDiv = document.createElement("div");
            composeDiv.className = "new-message";
            composeDiv.innerHTML = this.renderForm();
            composeDiv.addEventListener("change", (event) => {

                var changedElement = event.target;
                var changedElementName = changedElement.name;
                var changedElementValue = changedElement.value;
                MessageStore.updateDraftField(changedElementName, changedElementValue);

            })

            composeDiv.addEventListener("submit", (event) => {
                event.preventDefault();
                MessageStore.sendDraft();
                window.location.hash = "inbox";


            })


            return composeDiv;

        }

    }



    renderForm () {

        var currentDraft = MessageStore.getMessageDraft();
        let formHtml = `
                <p class="new-message-header">New Message</p>
            <form class="compose-form">
            <input
            placeholder='Recipient'
            name='to'
            type="text"
            value='${currentDraft.to}'>

            <input
            placeholder='Subject'
            name='subject'
            type="text"
            value='${currentDraft.subject}'>

            <textarea
            name='body'
            rows='20'>${currentDraft.body}</textarea>

            <button type="submit" class="btn btn-primary submit-message">Send</button>
            </form>
                `;
        return formHtml;

    }








}



module.exports = Compose;