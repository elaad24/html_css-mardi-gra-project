/* to automatically open specific section when direct from index.html  */
let url = document.URL;
let url_optinal_extend = url.substr(-4);

switch (url_optinal_extend) {
  case "gOne":
    $("headingOne").toggleClass("collapsed");
    $("#collapseOne").toggleClass("show");
    break;

  case "gTwo":
    $("headingTwo").toggleClass("collapsed");
    $("#collapseTwo").toggleClass("show");
    break;

  case "hree":
    $("headingThree").toggleClass("collapsed");
    $("#collapseThree").toggleClass("show");

    break;

  case "Four":
    $("headingFour").toggleClass("collapsed");
    $("#collapseFour").toggleClass("show");
    break;

  default:
}
