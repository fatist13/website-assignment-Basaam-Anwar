// JavaScript Code
// Ze Event Listeners
document.getElementById("btn1").addEventListener("click", btn1clicked);
document.getElementById("btn2").addEventListener("click", btn2clicked);
document.getElementById("btn3").addEventListener("click", btn3clicked);
document.getElementById("btn4").addEventListener("click", btn4clicked);
document.getElementById("a1");
document.getElementById("a2");
document.getElementById("a3");
document.getElementById("a5");
// Ze Functions
function btn1clicked() {
    let a1 = document.getElementById("a1").value.toLowerCase();
    if (a1 === "the lands between") {
        alert("Correct!")
    } else {
        alert("Incorrect")
    }
}
function btn2clicked() {
    let a2 = document.getElementById("a2").value.toLowerCase();
    if (a2 === "the demigods") {
        alert("Correct!")
    } else {
        alert("Incorrect")
    }
}
function btn3clicked() {
    let a3 = document.getElementById("a3").value.toLowerCase();
    if (a3 === "queen marika" || a3 === "the demigods") {
        alert("Correct!")
    } else {
        alert("Incorrect")
    }
}
function btn4clicked() {
    let a4 = document.getElementById("a4").value.toLowerCase();
    if (a4 === "guidance of grace") {
        alert("Correct!")
    } else {
        alert("Incorrect")
    }
}