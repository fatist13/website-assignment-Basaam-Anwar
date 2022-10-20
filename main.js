// JavaScript Code
// Ze Event Listener
document.getElementById("check").addEventListener("click", getScore);

// Ze function
function getScore() {
    let numScore = 0;
    let a1 = document.getElementById("a1").value.toLowerCase();
    let a2 = document.getElementById("a2").value.toLowerCase();
    let a3 = document.getElementById("a3").value.toLowerCase();
    let a4 = document.getElementById("a4").value.toLowerCase();
    //output
    if (a1 === "the lands between") {
        document.getElementById("a21").innerHTML = (" CORRECT ");
        numScore++;
    } else {
        document.getElementById("a21").innerHTML = (" INCORRECT ");
    } if (a2 === "the demigods") {
        document.getElementById("a22").innerHTML = (" CORRECT ");
        numScore++;
    } else {
        document.getElementById("a22").innerHTML = ("INCORRECT ");
    } if (a3 === "queen marika" || a3 === "the queen" || a3 === "ghost of queen elisabeth") {
        document.getElementById("a23").innerHTML = (" CORRECT ");
        numScore++;
    } else if (a2 === "the demigods") {
        document.getElementById("a23").innerHTML = (" CORRECT ");
        numScore++;
    } else {
        document.getElementById("a23").innerHTML = (" INCORRECT ");
    } if (a4 === "guidance of grace" || a4 === "grace") {
        document.getElementById("a24").innerHTML = (" CORRECT ");
        numScore++;
    } else {
        document.getElementById("a24").innerHTML = (" INCORRECT ");
    } if (numScore === 0) {
        document.getElementById("scoreResult").innerHTML = ("0/4 (0%)");
        numScore++;
    } else if (numScore === 1) {
        document.getElementById("scoreResult").innerHTML = ("1/4 (25%)");
    } else if (numScore === 2) {
        document.getElementById("scoreResult").innerHTML = ("2/4 (50%)");
    } else if (numScore === 3) {
        document.getElementById("scoreResult").innerHTML = ("3/4 (75%)");
    }  else if (numScore === 4) {
        document.getElementById("scoreResult").innerHTML = ("4/4 (100%)");
    } 
}