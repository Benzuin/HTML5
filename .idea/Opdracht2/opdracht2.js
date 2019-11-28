function checkForMeSenpai(){
    var d = new Date();
    answer = "yes"
    if (d.getHours() > 10 && d.getHours() < 16)
        if (d.getHours() >= 15 && d.getMinutes() < 30)
            answer = "nee";
        if (d.getHours() < 15)
            answer = "nee";
    if (d.getDay() == 0 || d.getDay() == 6) answer = "weekend";
    document.getElementById("misschien").innerHTML = answer;
    var answer;
}