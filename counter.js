function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        // minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    timer()
    
};
const crate=document.createElement('p')
crate.classList.add('result')
document.addEventListener('DOMContentLoaded', function() {
    let btns = document.querySelectorAll('.btn2')
    btns.forEach((btn) => {
        btn.addEventListener('click', function(e) {
            let selected_value = e.path[0].id
            if("dog" === selected_value) {
                func2("ture")
                
            }
            else{
                func2("flase")
            }
            
        })
        
    })
})
function func2(result){
    
    const question1 = document.getElementById('question1')
    crate.innerText = ' '
    crate.innerText = result;
    question1.appendChild(crate) 
 
    }

function timer() {
    var fiveMinutes = 10,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
}