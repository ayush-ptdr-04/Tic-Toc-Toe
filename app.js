// step-1
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

//step-7
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//step-2
let turn0 = true; //player-X, player-O

let count = 0;

//step-3
const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

//step-4
boxes.forEach( (box) =>{
    box.addEventListener( "click",  ()=>{
        count++
        //player0
        if(turn0){
            box.innerText = "0";
            changeColor(box);
            turn0 = false;
        } else {
            box.innerText = "X";
            changeColor(box);
            turn0 = true;
        }
             box.disabled = true;
             checkWinner();
             totalCounts(count);
    });
});

const totalCounts =(count)=> {
    if(count == 9){
        msg.innerText = "GAME IS DRAW";
    }
}

//step-5
const changeColor=(box)=>{
    if(box.innerText == 0){
       box.classList.add("change");
    } else {
        box.classList.add("change2");
    }
}

//step-9
const disabledBoxes = () => {
     for(let box of boxes){
        box.disabled = true;
     }
}

//step-11
const enabledBoxes = () => {
    for(let box of boxes){
       box.disabled = false;
       box.innerText = "";
    }
}

//step-8
const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner Is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

//step-6
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes [pattern[0]].innerText;
        let pos2Val = boxes [pattern[1]].innerText;
        let pos3Val = boxes [pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            } 
        }
    }
};

//step-10
const resetGame = () => {
    true0 = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
};

//step-12
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);