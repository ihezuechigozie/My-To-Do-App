
console.log(myScore)

function myScore(){
    var scoreOfUser = Number(userScore.value)

    if (scoreOfUser==""){
        showgrade.value = "Uknown"
        showgrade.style.color = "black"
        
    }
    else if(scoreOfUser>=0 && scoreOfUser<40) {
        console.log(showgrade)
        showgrade.value = "F - Fail"
        showgrade.style.color = "red"
    }
    else if(scoreOfUser>=40 && scoreOfUser<45){
        showgrade.value = "E - Pass"
        showgrade.style.color = "#7e2779"
       
    }
    else if(scoreOfUser>=45 && scoreOfUser<50){
        showgrade.value = "D - Average" 
        showgrade.style.color = "#140a1d"

    }
    else if(scoreOfUser>=50 && scoreOfUser<60){
        showgrade.value = "C - Credit"
        showgrade.style.color = "blue"
        
    }
    else if(scoreOfUser>=60 && scoreOfUser<70){
        showgrade.value = "B - Good"
        showgrade.style.color = "#2196f3"
       
    }

    else if(scoreOfUser>=70 && scoreOfUser<=100){
        showgrade.value = "A - Excellent" 
        showgrade.style.color = "green"
        
    }
   
    else{
        showgrade.value = "Unknown"
        showgrade.style.color = "black"
       
    }
    }
    
    