document.addEventListener("DOMContentLoaded", () => {


    const clearForm = function () {
        document.getElementById("message-author").value = "";
        document.getElementById("message-content").value = "";
    }


    const submitMessage = function (event) {
        event.preventDefault();

        const newMessage = document.createElement("p");
        const messageAuthor = document.getElementById("message-author");
        const messageContent = document.getElementById("message-content");
        const messagesList = document.getElementById("messages-list");

        newMessage.innerText = (messageAuthor.value + " wrote :" + messageContent.value);
        newMessage.setAttribute("class", "new-message");

        if (messageAuthor.value === "" || messageContent.value === "") {
           alert("You didn't fill out all the info...");
        } else {
            messagesList.appendChild(newMessage); 
            console.log(newMessage.innerText);
        }

        clearForm();

    }

    document.getElementById("message-form").addEventListener("submit", submitMessage.bind(this));

    
    var messageFormTrigger = document.getElementById("message-form-trigger");


    messageFormTrigger.addEventListener("click", (event) => {

        var messageForm = document.getElementById("hidden-form-div");
        messageForm.classList.toggle("hide-this-shit");


    })


  






})