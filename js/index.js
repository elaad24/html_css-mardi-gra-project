/* start js for main page  */

// the delay for the mini-clip and the animation afterword
console.log("javascript of index is runnung ");
var delayInMilliseconds = 8100;
const vid = document.querySelector(".movie_container");
setTimeout(function () {
  vid.innerHTML = "<style='visibilty:hidden'>";
}, delayInMilliseconds);

setTimeout(function () {
  $(".scrol_down_icon").css("display", "block");
}, delayInMilliseconds);

/* start of pop up sponsers 'card' */

const ace_hotle = document.querySelector("#ace_hotle");
mouseOutAca = () => {
  document.querySelector(".aca_popup").style.display = "none";
};
mouseOverAca = (popup_className) => {
  document.querySelector(".aca_popup").style.display = "block";
};
ace_hotle.addEventListener("mouseover", mouseOverAca);
ace_hotle.addEventListener("mouseout", mouseOutAca);

const sheraton_hotle = document.querySelector("#sheraton_hotle");
mouseOutSheraton = () => {
  document.querySelector(".sheraton_popup").style.display = "none";
};
mouseOverSheraton = (popup_className) => {
  document.querySelector(".sheraton_popup").style.display = "block";
};
sheraton_hotle.addEventListener("mouseover", mouseOverSheraton);
sheraton_hotle.addEventListener("mouseout", mouseOutSheraton);

const ritz_hotel = document.querySelector("#ritz_hotel");
mouseOutRitz_hotel = () => {
  document.querySelector(".ritz_popup").style.display = "none";
};
mouseOverRitz_hotel = (popup_className) => {
  document.querySelector(".ritz_popup").style.display = "block";
};
ritz_hotel.addEventListener("mouseover", mouseOverRitz_hotel);
ritz_hotel.addEventListener("mouseout", mouseOutRitz_hotel);

const children_museum = document.querySelector("#children_museum");
mouseOutChildren_museum = () => {
  document.querySelector(".kids_popup").style.display = "none";
};
mouseOverChildren_museum = (popup_className) => {
  document.querySelector(".kids_popup").style.display = "block";
};
children_museum.addEventListener("mouseover", mouseOverChildren_museum);
children_museum.addEventListener("mouseout", mouseOutChildren_museum);

const haunted_museum = document.querySelector("#haunted_museum");
mouseOutHaunted_museum = () => {
  document.querySelector(".haunted_popup").style.display = "none";
};
mouseOverHaunted_museum = (popup_className) => {
  document.querySelector(".haunted_popup").style.display = "block";
};
haunted_museum.addEventListener("mouseover", mouseOverHaunted_museum);
haunted_museum.addEventListener("mouseout", mouseOutHaunted_museum);

const death_meseum = document.querySelector("#death_meseum");
mouseOutDeath_meseum = () => {
  document.querySelector(".death_popup").style.display = "none";
};
mouseOverDeath_meseum = (popup_className) => {
  document.querySelector(".death_popup").style.display = "block";
};
death_meseum.addEventListener("mouseover", mouseOverDeath_meseum);
death_meseum.addEventListener("mouseout", mouseOutDeath_meseum);

const walk_on_restaurant = document.querySelector("#walk_on_restaurant");
mouseOutWalk_on_restaurant = () => {
  document.querySelector(".walk_on_popup").style.display = "none";
};
mouseOverWalk_on_restaurant = (popup_className) => {
  document.querySelector(".walk_on_popup").style.display = "block";
};
walk_on_restaurant.addEventListener("mouseover", mouseOverWalk_on_restaurant);
walk_on_restaurant.addEventListener("mouseout", mouseOutWalk_on_restaurant);

const premium_parking = document.querySelector("#premium_parking");
mouseOutPremium_parking = () => {
  document.querySelector(".premium_parking_popup").style.display = "none";
};
mouseOverPremium_parking = (popup_className) => {
  document.querySelector(".premium_parking_popup").style.display = "block";
};
premium_parking.addEventListener("mouseover", mouseOverPremium_parking);
premium_parking.addEventListener("mouseout", mouseOutPremium_parking);

/* start of pop up post card mayor */

let postcard = document.querySelector(".poscard_popup");

open_mayor_postcard = (e) => {
  postcard.style.display = "block";
  document.querySelector(".dark").style.display = "flex";
};

close_mayor_postcard = (e) => {
  if (e.target.id !== "mayor_teaser") {
    postcard.style.display = "none";
    $(".dark").css("display", "none");
  }
};

$(".mayor_teaser").on("click", open_mayor_postcard);

document.addEventListener("click", close_mayor_postcard);

/* end js for main page  */
