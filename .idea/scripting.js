var voornaam = document.getElementById("voornaam").value;
var achternaam = document.getElementById("achternaam").value;
var mailadres = document.getElementById("mailadres").value;
var bericht = document.getElementById("bericht").value;
var complete = voornaam + "\n" + achternaam + "\n" + mailadres + "\n" + bericht;
var blob = new Blob([complete],
    { type: "text/plain;charset=utf-8" });
    saveAs(blob, "input.txt");
window.alert("You have send the goods!");
var delayInMilliseconds = 10000; //10 seconds

setTimeout(function() {
location.href = "C:/Users/boazv/.IdeaIC2019.2/config/scratches/opdracht.html"
}, delayInMilliseconds);