$( () => {

  
    const $profilePic = $("#profile-pic");

    $profilePic.on("click", function(event) {

        const $this = $(this);
        console.log($this);
        $this.toggleClass("expand-pic");

    })

    const clearForm = function () {
        $("#message-author").val("");
        $("#message-content").val("");
    }


    const submitMessage = function (event) {
        event.preventDefault();

        const $newMessage = $("<p>");
        const $messageAuthor = $("#message-author");
        const $messageContent = $("#message-content");

        $newMessage.text($messageAuthor.val() + " wrote: " + $messageContent.val());
        $newMessage.addClass("new-message");

        if ($messageAuthor.val() === "" || $messageContent.val() === "") {
           alert("You didn't fill out all the info...");
        } else {
            $("#messages-list").append($newMessage); 
            console.log($newMessage.text());
        }

        clearForm();

    }

    $("#message-form").on("submit", submitMessage.bind(this));

    
    var messageFormTrigger = document.getElementById("message-form-trigger");


    messageFormTrigger.addEventListener("click", (event) => {

        var messageForm = document.getElementById("hidden-form-div");
        messageForm.classList.toggle("hide-this-shit");


    })


  






})