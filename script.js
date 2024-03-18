let para = document.querySelector("p");
let img = document.querySelector("img");
let submitButton = document.querySelector(".button");
let resetButton = document.querySelector(".button2");
console.log("button");

submitButton.addEventListener("click", function() {
submitButton.style.display = "none";
resetButton.style.display = "block";

let oneInput = document.querySelector(".questionOne").value;
console.log("oneInput");
  
let twoInput = document.querySelector(".questionTwo").value;
console.log("twoInput");
  
if (oneInput === "outdoors" && twoInput === "clear") {
  para.innerHTML = "Summer is for you.";
  para.style.color = "green";
  img.src = "summer.png";
} else if (oneInput === "outdoors" && twoInput === "rainy") {
  para.innerHTML = "Spring is for you.";
  para.style.color = "green";
  img.src = "spring.png";
} else if (oneInput === "indoors" && twoInput === "clear") {
  para.innerHTML = "Autumn is for you.";
  para.style.color = "green";
  img.src = "autumn.png";
} else if (oneInput === "indoors" && twoInput === "rainy") {
  para.innerHTML = "Winter is for you.";
  para.style.color = "green";
  img.src = "winter.png";
} else {
  para.innerHTML = "Check your spelling!";
  para.style.color= "red";
  img.src = "placeholdernew.png";
}
  
  });

resetButton.addEventListener("click", function() {
  submitButton.style.display = "block";
  resetButton.style.display = "none";
  para.innerHTML = "Result will display here.";
  para.style.color = "black";
  img.src = "placeholdernew.png";

});