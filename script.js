
const startBtn = document.getElementById("start-btn")
const input = document.getElementById("input")
const timerdisplay = document.getElementById("timer")
const resetbtn = document.getElementById("reset-btn")


let time ;


function startTimer(){

    timevalue =(input.value) 
    tv = Number(timevalue)
    if(isNaN(tv))  // isNaN() is a fn that checks if the value is NaN or not
    {
        timerdisplay.innerText = "Please Enter a valid Number"
        return
    }
    if(tv<=0){
        timerdisplay.innerText = "Please Enter seconds greater than zero"
        return
    }
    

    clearInterval(time)

   time = setInterval(function() {
        timerdisplay.innerText = tv ;
        tv-- ;
        if(tv < 0){
            clearInterval(time)
            timerdisplay.innerText = "Time Up ! 🕛 "
            input.value = ""
        }
    }, 1 * 1000);
   
}




function resetTimer(){
   tv = 0    
   timerdisplay.innerText = "00"
   clearInterval(time)
   input.value = " "
   
}

resetbtn.addEventListener('click', resetTimer)
startBtn.addEventListener('click',startTimer)