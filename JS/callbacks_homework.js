// # Callbacks, Asynchronous Functions, and Function Calls


// problem 1


window.setTimeout(function () {
    alert("HAMMERTIME BITCH");
}, 5000);



// problem 2


function hammerTime (time) {

    window.setTimeout(function () {
        alert(`${time} is hammertime BITCH!`);

    }, time);

}

hammerTime(3000);