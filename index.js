/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//let enteredNumber = document.getElementById("main-txt").value
// console.log(enteredNumber)

let convertBtn = document.getElementById("convert")
// console.log(convertBtn)

let lengthEl = document.getElementById("length-element")
// console.log(lengthEl)

let volumeEl = document.getElementById("volume-element")
let massEl = document.getElementById("mass-element")

convertBtn.addEventListener("click", function(){
    let enteredNumber = document.getElementById("main-txt").value

    lengthEl.innerHTML = `${enteredNumber} meters = ${Number(enteredNumber*3.281).toFixed(3) } feet | ${enteredNumber} feet = ${Number(enteredNumber/3.281).toFixed(3) }  meters`
    
    volumeEl.innerHTML = `${enteredNumber} liter = ${Number(enteredNumber*0.264).toFixed(3) } gallon | ${enteredNumber} gallon = ${Number(enteredNumber/0.264).toFixed(3) }  liters`
    
    massEl.innerHTML = `${enteredNumber} kilogram = ${Number(enteredNumber*2.204).toFixed(3) } pound | ${enteredNumber} pound = ${Number(enteredNumber/2.204).toFixed(3) }  kilograms`
})

