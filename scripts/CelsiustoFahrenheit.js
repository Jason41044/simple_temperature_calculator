"use strict"

window.onload = function () {
    const convertBtn = document.getElementById("convertBtn") ;
    convertBtn.onclick = convertBtnClicked ; 
}

function convertBtnClicked() {
    
    // Get temperature in Celsius from input field 
    const enterTempField = document.getElementById("enterTemp") ;
    let enterTemp = Number (enterTempField.value) ; 

    // Convert the temperature 
    let convertedResults = (enterTempField.value * 1.8) + 32; ;
    
    // Generate output for converted temperature

    const convertedResultsField = document.getElementById("convertedResults") ;
    convertedResultsField.value = convertedResults.toFixed(0) ; 

}
