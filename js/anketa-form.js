// const chBoxes = document.querySelectorAll(
//   '.dropdown-menu input[type="checkbox"]'
// );
// const dpBtn = document.getElementById("multiSelectDropdown");
// let mySelectedListItems = [];

// const chBoxes1 = document.querySelectorAll(
//   '.dropdown-menu input[type="checkbox"]'
// );
// const dpBtn1 = document.getElementById("multiSelectDropdown1");
// let mySelectedListItems1 = [];

// function handleCB() {
//   mySelectedListItems = [];
//   let mySelectedListItemsText = "";

//   chBoxes.forEach((checkbox) => {
//     if (checkbox.checked) {
//       mySelectedListItems.push(checkbox.value);
//       mySelectedListItemsText += checkbox.value + ", ";
//     }
//   });

//   dpBtn.innerText =
//     mySelectedListItems.length > 0
//       ? mySelectedListItemsText.slice(0, -2)
//       : "Выбрать профессию";
// }

// chBoxes.forEach((checkbox) => {
//   checkbox.addEventListener("change", handleCB);
// });

// function handleCB() {
//   mySelectedListItems = [];
//   let mySelectedListItemsText = "";

//   chBoxes.forEach((checkbox) => {
//     if (checkbox.checked) {
//       mySelectedListItems.push(checkbox.value);
//       mySelectedListItemsText += checkbox.value + ", ";
//     }
//   });

//   dpBtn.innerText =
//     mySelectedListItems.length > 0
//       ? mySelectedListItemsText.slice(0, -2)
//       : "Документы в наличии";
// }

// chBoxes.forEach((checkbox) => {
//   checkbox.addEventListener("change", handleCB);
// });

$(document).ready(function () {
  $("#example-getting-started").multiselect();
});
