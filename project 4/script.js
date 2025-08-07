// getign elemnts from html doc !
const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("getBtn");
const copyIcon = document.getElementById("copyIcon");

// lets add what we need !
let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"; 
let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ; 
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

sliderValue.textContent = inputSlider.value ; 
inputSlider.addEventListener('input', function(){
    sliderValue.textContent = inputSlider; 
})