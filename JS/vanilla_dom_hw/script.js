document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });


  document.getElementById("form-submit").addEventListener("submit", (event) => {

      event.preventDefault();

      const placesList = document.getElementById("sf-places");
      const newPlace = document.createElement("li");

    // both ways work...
      const newPLaceInput = document.getElementById("favorite-input");
      // const newPLaceInput = document.querySelector(".favorite-input");

      newPlace.innerHTML = newPLaceInput.value;
      newPLaceInput.value = "";
      placesList.appendChild(newPlace);
      

  })

  const dogButton = document.getElementById("dog-button");
  const dogFormDiv = document.getElementById("dog-form-div");

  dogButton.addEventListener("click", (event) => {
    event.preventDefault();
    dogFormDiv.classList.toggle("hidden");
  })


  const dogPhotosList = document.getElementById("listofdogphotos");
  const dogForm = document.getElementById("dog-form");

  dogForm.addEventListener("submit", (event) => {

    event.preventDefault();
    const newDogLi = document.createElement("li");
    const newDogImg = document.createElement("img");
    const dogImgUrl = document.getElementById("dog-img-url");

    newDogImg.setAttribute("src", `${dogImgUrl.value}`);

    dogPhotosList.appendChild(newDogLi);

    newDogLi.appendChild(newDogImg);
    dogImgUrl.value = "";
  })



});
