let number = 1000



setInterval(fn, 1000)

function fn(){
   
    
    
    if(number > 0){
    number = number - 1
    document.querySelector('.timer').innerHTML = number
}


}
for (let i=0; i < 5; i++) { 
    let a = Math.round(Math.random()*50)
    let b = Math.round(Math.random()*10)
    let answer = prompt("ROBO CHECK, what is " + a + " plus " + b + "")
    console.log(answer)
    let correctanswer = a + b

    if(!(parseInt(answer) === correctanswer)){
        break

    }
}
