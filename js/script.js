//selecting all required elemennts
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = () => {
  filterItem.onclick = (selectedItem) => {
    //when user clicked on filterItem div
    if (selectedItem.target.classList.contains("item")) { //if user click element has .item class
      (filterItem.querySelector(".active")).classList.remove("active"); //remove the active class which is in the first element
      selectedItem.target.classList.add("active"); // add that active class to the user selected element or item
      let filterName = selectedItem.target.getAttribute("data-name"); // getting the data name value of user selected item and storing in filter name variable
      filterImg.forEach((image) => {
        let filterImages = image.getAttribute("data-name"); // getting image data-name value
        // if user selected item data-name value is equal to image data-name value
        // or user selected item data-name value is equal to "all"
        if ((filterImages == filterName) || (filterName == "all")) {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  }
  for (let index = 0; index < filterImg.length; index++) {
    filterImg[index].setAttribute("onclick", "preview(this)"); // adding onclick attribute on all available images
  }
}

// seleting all required elements
const previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  categoryName = previewBox.querySelector(".title p"),
  shadow = document.querySelector(".shadow");

//fullscreen preview image function
function preview(element) {
  //once user click on any image then remove the scrollbar of the body so user can't scroll up or down
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; // getting user clicked image source link and store in a variable
  let selectedImgCategory = element.getAttribute("data-name"); // getting user-clicked data-name value to category name variable
  previewImg.src = selectedPrevImg; //passing the user clicked image source in the preview image source 
  categoryName.textContent = selectedImgCategory;
  previewBox.classList.add("show"); // show the preview box
  shadow.classList.add("show"); // show the light gray background
}

function removeIcon() { // if the user clicks on the close icon of preview box
  previewBox.classList.remove("show"); //hide the preview box
  shadow.classList.remove("show"); // hide the light gray background
  document.querySelector("body").style.overflow = "auto"; // show the scroll bar of body
}



