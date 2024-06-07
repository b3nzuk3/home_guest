let scoreLine = 0
let scoreLine_g = 0
let scoreDisplay = document.getElementById("score-el")
let scoreDisplay_g = document.getElementById("score-el-g")

function one(){
    scoreLine += 1
    scoreDisplay.textContent = scoreLine 
}

function two(){
    scoreLine += 2
    scoreDisplay.textContent = scoreLine    
}

function three(){
    scoreLine += 3
    scoreDisplay.textContent = scoreLine    
}

function one_g(){
    scoreLine_g += 1
    scoreDisplay_g.textContent = scoreLine_g
}

function two_g(){
    scoreLine_g += 2
    scoreDisplay_g.textContent = scoreLine_g    
}

function three_g(){
    scoreLine_g += 3
    scoreDisplay_g.textContent = scoreLine_g    
    console.log(scoreLine_g)
}

console.log(scoreLine)