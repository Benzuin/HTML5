function Winning(){
    var radios = document.getElementsByName('SPS');
    var result;
    for (var i = 0, length = radios.length; i < length; i++){
     if (radios[i].checked){
           i = convert(i+1);
           cpu = convert(Math.floor(Math.random() * (3) ) + 1);
      if (cpu == i){
       result = "Gelijkspel! Jij en de computer kozen beide "+ cpu.toLowerCase();
      }
      if ((i == "Steen" && cpu == "Schaar") || (i == "Papier" && cpu == "Steen") || (i == "Schaar" && cpu == "Papier")){
       result = "Je hebt gewonnen! " + i + " wint van " + cpu.toLowerCase();
      }
      if ((i == "Schaar" && cpu == "Steen") || (i == "Steen" && cpu == "Papier") || (i == "Papier" && cpu == "Schaar")){
        result = "Computer wint! " + cpu + " wint van " + i.toLowerCase();
      }
      break;
      }
     }
     document.getElementById("result").innerHTML = result;
     /*var delayInMilliseconds = 10000; //10 seconds

                 setTimeout(function() {
                 location.reload();
                 }, delayInMilliseconds);*/
    }
function convert(number){
    if (number == 1){
    return "Steen";
    }
    if (number == 2){
    return "Papier";
    }
    if (number == 3){
    return "Schaar";
    }
}
