// JavaScript Code
// Ze Event Listeners
document.getElementById("check").addEventListener("click", getScore);

// Ze functions
function getScore() {
    let numScore = 0;

    //input
    let a1 = document.getElementById("a1").value.toLowerCase();
    let a2 = document.getElementById("a2").value.toLowerCase();
    let a3 = document.getElementById("a3").value.toLowerCase();
    let a4 = document.getElementById("a4").value.toLowerCase();
    //output
    if (a1 === "the lands between") {
        document.getElementById("a21").innerHTML = "correct";
        numScore++;
    } else {
        document.getElementById("a21").innerHTML = "incorrect";
    }
    if (a2 === "the demigods") {
        document.getElementById("a22").innerHTML = "correct";
        numScore++;
    } else {
        document.getElementById("a22").innerHTML = "incorrect";
    }
    if (a3 === "queen marika") {
        document.getElementById("a23").innerHTML = "correct";
        numScore++;
    } else if (a2 === "the demigods") {
        document.getElementById("a23").innerHTML = "correct";
        numScore++;
    } else {
        document.getElementById("a23").innerHTML = "incorrect"
    }
    if (a4 === "guidance of grace") {
        document.getElementById("a24").innerHTML = "correct";
        numScore++;
    } else {
        document.getElementById("a24").innerHTML = "incorrect";
    }
}

// score

if (numScore === 0) {
    document.getElementById("score")
}