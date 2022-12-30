const left = document.getElementById("left");
const right = document.getElementById("right");

left.innerHTML="<";
right.innerHTML=">";

const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");

const txtONE = document.querySelector(".text-one"); 
const txtTWO = document.querySelector(".text-two"); 
const txtTHREE = document.querySelector(".text-three"); 
const txtFOUR = document.querySelector(".text-four"); 

one.addEventListener("mouseover", () => {
    txtONE.style.display = "block";
    txtONE.style.transform = "translateY(20px)";
});

one.addEventListener("mouseout", () => {
    txtONE.style.display = "none";
});




two.addEventListener("mouseover", () => {
    txtTWO.style.display = "block";
    txtTWO.style.transform = "translateY(20px)";
});

two.addEventListener("mouseout", () => {
    txtTWO.style.display = "none";
});




three.addEventListener("mouseover", () => {
    txtTHREE.style.display = "block";
    txtTHREE.style.transform = "translateY(20px)";
});

three.addEventListener("mouseout", () => {
    txtTHREE.style.display = "none";
});




four.addEventListener("mouseover", () => {
    txtFOUR.style.display = "block";
    txtFOUR.style.transform = "translateY(20px)";
});

four.addEventListener("mouseout", () => {
    txtFOUR.style.display = "none";
});
