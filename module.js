//Rules Area
const Rules = document.querySelector('.board')
const RuleBtn = document.querySelector('.rules')
const CancelBtn = document.querySelector('.board')

RuleBtn.addEventListener('click', (a)=>{
    Rules.style.display = "block";
    })
CancelBtn.addEventListener('click', (b)=>{
    Rules.style.display = "none";
    })

    //Player Select Area
    let line = document.querySelector('#lines')
    let Rock = document.querySelector('.fist')
    let Scissors = document.querySelector('.scissor')
    let Paper = document.querySelector('.hand')
    let Your;

    function RockCliked(){
        Your = "Rock"
        Rock.style.display = "block"
        Rock.style.position = "absolute"
        Rock.style.top = "60vh"
        Rock.style.left = "30vw"
        Scissors.style.display = "none"
        Paper.style.display = "none"
        line.style.display = "none"
        CompShow()
      }
      function ScissorsClicked(){
        Your = "Scissors"
        Scissors.style.display = "block"
        Scissors.style.position = "absolute"
        Scissors.style.top = "60vh"
        Scissors.style.left = "30vw"
        Rock.style.display = "none"
        Paper.style.display = "none"
        line.style.display = "none"
        CompShow()
      }
      function PaperClicked(){
        Your = "Paper"
        Paper.style.display = "block"
        Paper.style.position = "absolute"
        Paper.style.top = "60vh"
        Paper.style.left = "30vw"
        Scissors.style.display = "none"
        Rock.style.display = "none"
        line.style.display = "none"
        CompShow()
      }
Rock.addEventListener('click', RockCliked)
Scissors.addEventListener('click', ScissorsClicked)
Paper.addEventListener('click', PaperClicked)

// Computer Select Area
const options = ["Rock", "Paper", "Scissors"]
let pcRock = document.querySelector('.pcRock')
let pcPaper = document.querySelector('.pcPaper')
let pcScissors = document.querySelector('.pcScissors')
let pcRockBg = document.querySelector('.rockbg')
let pcPaperBg = document.querySelector('.paperbg')
let pcScissorsBg = document.querySelector('.scissorsbg')
let PlayAgain = document.querySelector('.play')
let PC;

function CompShow(){
  CompChoice = options[Math.floor(Math.random() * 3)];
  return CompChoose()
}

function CompChoose(){
    if(CompChoice == "Rock"){
      console.log("rock")
     PC = "Rock"
     pcRock.style.display = "block"
     WinCircle.style.top = "2vh"
     WinCircle.style.right = "39vw"
     return winner()

    }
    else if(CompChoice == "Paper"){
      console.log("paper")
     PC = "Paper"
     pcPaper.style.display = "block"
     WinCircle.style.top = "2vh"
     WinCircle.style.right = "39vw"
     return winner()
    }
    else{
      console.log("scissors")
      PC = "Scissors"
     pcScissors.style.display = "block"
     WinCircle.style.top = "2vh"
     WinCircle.style.right = "39vw"
     return winner()
    }
  }

  // Cheking the Winner Area
   let Display;

  function winner(){
    if(Your == "Rock" && PC == "Rock"){
      console.log("Tie Up");
      Display = "Tie"
      ScoreBoard()
    }
    else if(Your == "Rock" && PC == "Scissors"){
      console.log("You Won");
      Display = "Win"
      ScoreBoard()
    }
    else if(Your == "Rock" && PC == "Paper"){
      console.log("You Lost");
      Display = "Lost"
      ScoreBoard()
    }
    else if(Your == "Paper" && PC == "Paper"){
      console.log("Tie Up");
      Display = "Tie"
      ScoreBoard()
    }
    else if(Your == "Paper" && PC == "Rock"){
      console.log("You Won");
      Display = "Win"
      ScoreBoard()
    }
    else if(Your == "Paper" && PC == "Scissors"){
      console.log("You Lost");
      Display = "Lost"
      ScoreBoard()
    }
    else if(Your== "Scissors" && PC == "Scissors"){
      console.log("Tie Up");
      Display = "Tie"
      ScoreBoard()
    }
    else if(Your == "Scissors" && PC == "Paper"){
      console.log("You Won");
      Display = "Win"
      ScoreBoard()
    }
    else if(Your == "Scissors" && PC == "Rock"){
      console.log("You Lost");
      Display = "Lost"
      ScoreBoard()
    }
    }


 //Changes after Winning/Loosing  Area


let countPlayer = 0
let countComp = 0

let YouWin = document.querySelector('.win')
let YouLost = document.querySelector('.lost')
let Tie = document.querySelector('.tie')


let Updated = document.querySelector('.score')

let NextBtn = document.querySelector('.next')
let WinCircle = document.querySelector('.yWC')
let cWinCircle = document.querySelector('.cWC')

let score = JSON.parse(localStorage.getItem("sc"))
let CompScore = document.querySelector(".number1")
if(score){
  CompScore.innerText = score;
}

let pScore = JSON.parse(localStorage.getItem("self"))
let PlayerScore = document.querySelector(".number2")
if(pScore){
  PlayerScore.innertext = pScore;

  }

function ScoreBoard(){
      if(Display == "Tie"){
        Tie.style.display = "block"
        PlayAgain.style.visibility = "visible"
      }

      else if(Display == "Win"){
        YouWin.style.display = "block"
        NextBtn.style.visibility = "visible"
        WinCircle.style.visibility = "visible"
        WinCircle.style.position = "absolute"
        WinCircle.style.left = "37vw"
        PlayAgain.style.visibility = "visible"
        countPlayer++;
        PlayerScore.innerText = countPlayer
        localStorage.setItem("self", JSON.stringify(countPlayer))
      }
      else if(Display == "Lost"){
        YouLost.style.display = "block"
        PlayAgain.style.visibility = "visible"
        cWinCircle.style.visibility = "visible"
        countComp++;
        CompScore.innerText = countComp
        localStorage.setItem("sc", JSON.stringify(countComp))
      }
    }
