// //lav en variabel der refererer til .toggle-btn
// const btn = document.querySelector(".toggle-btn");
// //lav en variabel der refererer til nav
// const btn = document.querySelector("nav");

// //skjul luk, så den kun er fremme når man trykker på burgermenu
// document.querySelector("#luk").classList.add("hide");

// //med de her to punkter kan man klikke linjerne frem
// function toggleMenu() {
//   nav.classList.toggle("shown");

//   //nav variabel med klassen shown
//   const menuShown = nav.classList.contains("shown");

//   //if/else
//   if (menuShown) {
//     //hvis nav har klassen shown, så tilføjes luk
//     luk();
//   } else {
//     //hvis nav ikke har klassen shown, så tilføjes menu
//     menu();
//   }
// }
// function luk() {
//   document.querySelector("#luk").classList.remove("hide");
//   document.querySelector("#menu").classList.add("hide");
// }
// function menu() {
//   document.querySelector("#menu").classList.remove("hide");
//   document.querySelector("#luk").classList.add("hide");
// }
// //tilføj click event til btn, der sætter toggleMenu-funktionen igang
// btn.addEventListener("click, toggleMenu");
function myFunction(x) {
  x.classList.toggle("change");
}
