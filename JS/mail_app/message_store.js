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