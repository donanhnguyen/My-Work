$( () => {

    console.log("asshole!");

    const $header = $("h1");

    // $header.on("click", (event) => {

    //     alert(`${$(event.currentTarget).text()}`);

    // })

    const $listItems = $("li");

    $listItems.on("click", (event) => {

        $target = $(event.currentTarget);

        $target.toggleClass("clicked");

    })



    $listItems.each( (index, elem) => {
        
        console.log($(elem).text() + " " + index);
    })



    const $sexList = $("#sex-list");

    for (let i = 0; i < 3; i++) {
        const $sexLi = $("<li></li>");
        $sexList.append($sexLi);
        $sexLi.text("fuck you  " + i);

    }


    for (let i = 0; i < 3; i++) {
        const $sexP = $("<p></p>");
        $header.append($sexP);
        $sexP.text("piss ass  " + i);

    }



    const $ps = $("p");
    $ps.on("click", (event) => {

        $target = $(event.currentTarget);

        $target.toggleClass("clicked");

    })












})