function updateTime() {
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
losAngelesDateElement.innerHTML = moment().tz("America/Los_Angeles").format("MMMM D, YYYY");
losAngelesTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("h:mm:ss [<small>]A[</small>]");

//Sydney
let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
sydneyDateElement.innerHTML = moment().tz("Australia/Sydney").format("MMMM D, YYYY");
sydneyTimeElement.innerHTML = moment().tz("Australia/Sydney").format("h:mm:ss [<small>]A[</small>]");

//Tokyo
let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
tokyoDateElement.innerHTML = moment().tz("Asia/Tokyo").format("MMMM D, YYYY");
tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("h:mm:ss [<small>]A[</small>]");

//Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
parisDateElement.innerHTML = moment().tz("Europe/Paris").format("MMMM D, YYYY");
parisTimeElement.innerHTML = moment().tz("Europe/Paris").format("h:mm:ss [<small>]A[</small>]");
};

updateTime();
setInterval(updateTime, 1000);