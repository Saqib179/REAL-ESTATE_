function filterProperties() {

const search =
document.getElementById("searchInput")
.value.toLowerCase();

const type =
document.getElementById("typeFilter")
.value;

const properties =
document.querySelectorAll(".property");

properties.forEach(property => {

const title =
property.querySelector("h5")
.innerText.toLowerCase();

const propertyType =
property.dataset.type;

const matchSearch =
title.includes(search);

const matchType =
type === "" ||
propertyType === type;

if(matchSearch && matchType){
property.style.display="block";
}
else{
property.style.display="none";
}

});

}

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();

alert(
"Thank you! Your inquiry has been submitted."
);

this.reset();

});
