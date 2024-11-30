let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let score = [];
let btns = ['red','yellow','green','purple'];

let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');


document.addEventListener('keypress',function(){
    if(started == false){
    console.log("Game Started");
    started = true;
    levelUp();
    }
    
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);

}


function levelUp(){
    userSeq = [];
    level++;
   
    h2.innerText = `Level ${level}`;
   

    let randIndex = Math.floor(Math.random()*4);
    let randColor = btns[randIndex];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIndex);
    // console.log(randBtn);
    // console.log(randColor);
    gameSeq.push(randColor);
    console.log(gameSeq);
    // btnFlash(randBtn);
    flashele();
    
}
function checkAns(indx){
    
    if(userSeq[indx] == gameSeq[indx]){
        console.log('same');
        if(userSeq.length == gameSeq.length){
            
            setTimeout(levelUp,1000);
            
        }
    }
    else{
        h2.innerHTML = `Game Over! <i class="fa-regular fa-face-sad-cry"></i> Your score was <b>${level}</b> <br> Press any key to start `;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='beige';   
        },200);
        highScore();
        reset();
         
    }
}


function btnPress(){
   let btn = this;
   btnFlash(btn);
   let userColor = btn.getAttribute("id");
   userSeq.push(userColor);
//    console.log(userSeq);
   checkAns(userSeq.length-1);
}
let allbtns = document.querySelectorAll('.box');
for(btn of allbtns){
btn.addEventListener('click',btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
// function flashele(){
//     for(let i=0;i<gameSeq.length;i++){
       
//          let curColor = btns[i];
//          let randBtn = document.querySelector(`.${curColor}`);
//          btnFlash(randBtn);
//     }
// }
function flashele() {
    let i = 0;

    function flashNext() {
        if (i < gameSeq.length) {
            let curColor = gameSeq[i];
            let btn = document.querySelector(`.${curColor}`);
            btnFlash(btn);
            i++;
            setTimeout(flashNext, 600); 
        }
    }

    flashNext(); 
}

function highScore(){
  score.push(level);
  let hS = Math.max(...score);

  
//   highScore.push(level);
//   let hS = Math.max(highScore);
  h3.innerHTML =`Highest Score is ${hS} ` ;

}