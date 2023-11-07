// Iteration 8: Making scoreboard functional

let scoreboard=document.getElementById("score-board")
var urlQuery=new URLSearchParams(window.location.search)
var score=urlQuery.get("score")
scoreboard.innerHTML=score


const playAgainButton=document.getElementById("play-again-button")
playAgainButton.onclick=()=>{
    location.href="./game.html"
}