// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

let Number1=document.getElementById("number1")
let Number2=document.getElementById("number2")


// Iteration 3: Creating variables required to make the game functional
var score=0
var operator
let plus=document.getElementById("plus")
let minus=document.getElementById("minus")
let mul=document.getElementById("mul")
let divide=document.getElementById("divide")
let modulus=document.getElementById("modulus")

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let Number3=document.getElementById("number3")
var num3;
let num1
let num2
// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
    num1=Math.round(Math.random()*100)
    num2=Math.round(Math.random()*100)

    //edge case 
    if (num1<num2){
        let temp=num1
        num1=num2
        num2=temp
    }
    //taking random operator 
    operator=Math.round(Math.random()*5)

    //if else---
    switch(operator){
        case 1:
            num3=num1+num2;
            break

        case 2:
            num3=num1-num2
            break
        case 3:
            num3=num1*num2
            break
        case 4:
            num3=Math.floor(num1/num2)
            break
        case 5:
            num3=num1%num2
            break
        case 0:
            randomise()
            break;
    }
    // if(operator===1){
    //     num3=num1+num2;
    // } else if(operator===2){
    //     num3=num1-num2;
    // } else if(operator===3){
    //     num3=num1*num2;
    // } else if(operator===4){
    //     num3=num1/num2;
    // } else if(operator===5){
    //     num3=num1%num2;
    // } else if(operator===0){
    //     randomise();
    // }
    Number1.innerHTML=num1
    Number2.innerHTML=num2
    Number3.innerHTML=num3
    console.log(num1,num2,num3,operator)
}
randomise()

// Iteration 6: Making the Operators (button) functional
plus.addEventListener("click",()=>{
    if(num1+num2===parseInt(num3)){
        score++
        randomise()
        resetTimer(timerID)
    }else{
        location.href="gameover.html?score="+score
    }
})

minus.addEventListener("click",()=>{
    if(num1-num2==parseInt(num3)){
        score++
        resetTimer(timerID)
        randomise()
    }else{
        location.href="gameover.html?score="+score
    }
})

mul.addEventListener("click",()=>{
    if(num1*num2==parseInt(num3)){
        score++
        resetTimer(timerID)
        randomise()
    }else{
        location.href="gameover.html?score="+score
    }
})

divide.addEventListener("click",()=>{
    if(num1/num2==parseInt(num3)){
        score++
        resetTimer(timerID)
        randomise()
    }else{
        location.href="gameover.html?score="+score
    }
})

modulus.addEventListener("click",()=>{
    if(num1%num2==parseInt(num3)){
        score++
        resetTimer(timerID)
        randomise()
    }else{
        location.href="gameover.html?score="+score
    }
})
// Iteration 7: Making Timer functional
const timer=document.getElementById("timer")

var timerID;
function startTimer(){
    var time = 20;
    timer.innerText = time;
    timerID = setInterval(()=>{
        time--;
        localStorage.setItem("score",score)
        if(time ==0){
            location.href = 'gameover.html'
        }
        else{
            timer.innerText = time
        }
    },1000)
}
function resetTimer(intervalid){
    clearInterval(intervalid)
    startTimer();
}
startTimer()