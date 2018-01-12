let Router = require("./router.js");
let Inbox = require("./inbox.js");
let Sent = require("./sent.js");
let Compose = require("./compose.js");


let routes = {
    inbox: new Inbox (),   
    sent: new Sent (),
    compose: new Compose ()
};

document.addEventListener("DOMContentLoaded", function () {


 
    const setNewHash = function (event) {

        const liElement = event.currentTarget;
        const liElementText = liElement.innerText.toLowerCase();
        window.location.hash = liElementText;
 
    };



    const sidebarNavs = document.querySelectorAll(".sidebar-nav li");

    sidebarNavs.forEach((ele, index) => {

        ele.addEventListener("click", setNewHash.bind(ele));

    })


    const contentElement = document.querySelector(".content");

    const newRouter = new Router(contentElement, routes);

    newRouter.start();















})