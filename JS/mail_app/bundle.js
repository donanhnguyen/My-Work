/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

class Message {

    constructor (from = "thedonwind69@gmail.com", to = "", subject = "", body = "") {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.body = body;

        
    }
}


let messages = {
    sent: [
      {to: "friend@mail.com", subject: "Fuck you", body: "Asshole..."},
      {to: "person@mail.com", subject: "Piss off", body: "Go to hell"}
    ],
    inbox: [
      {from: "grandma@mail.com", subject: "Cunts", body:
  "Did you know that the mom from the Arkangel episode of Black Mirror is a two-bit cunt?"},
      {from: "person@mail.com", subject: "Taking a shit", body: "I just took a shit today - Ki"}
    ]
  };




let messageDraft = new Message ();

let MessageStore = {

    getInboxMessages: () => {
        return messages.inbox;
    },
    
    getSentMessages: () => {
        return messages.sent;

    },

    updateDraftField: (field, value) => {
        messageDraft[field] = value;
    },

    sendDraft: () => {
        messages.sent.push(messageDraft);
        messageDraft = new Message ();
    },

    getMessageDraft: () => {
        return messageDraft;
    }

};




module.exports = MessageStore;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

let Router = __webpack_require__(2);
let Inbox = __webpack_require__(3);
let Sent = __webpack_require__(4);
let Compose = __webpack_require__(5);


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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

class Router {

    constructor (node, routes) {

        this.node = node;
        this.routes = routes;

    }

    start () {
        this.render();
        window.addEventListener("hashchange", (event) => {
            this.render();
        });
    }


    activeRoute () {
        const currentRoute = window.location.hash.replace("#", "");
        return this.routes[currentRoute];
    }



    render () {

        let component = this.activeRoute();
     
        this.node.innerHTML = "";

        if (!component) {
            this.node.innerHTML = "";
        } else {
    
            let newNode = component.render();
            this.node.appendChild(newNode);
        }

    }









}


module.exports = Router;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

let MessageStore = __webpack_require__(0);

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

let MessageStore = __webpack_require__(0);

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

let MessageStore = __webpack_require__(0);

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

/***/ })
/******/ ]);