let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#rb");
let newGameBtn = document.querySelector("#ng");

let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;   

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];


// Box click
boxes.forEach(function(box){

    box.addEventListener("click", function(){

        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;

        checkWinner();

    });

});



function showWinner(winner){

    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");

    disableBoxes();

}



function disableBoxes(){

    boxes.forEach(function(box){
        box.disabled = true;
    });

}



function enableBoxes(){

    boxes.forEach(function(box){
        box.disabled = false;
        box.innerText = "";
    });

}



function resetGame(){

    turnO = true;

    enableBoxes();

    msgContainer.classList.add("hide");

}



function checkWinner(){

    for(let pattern of winPattern){

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){

            if(pos1 === pos2 && pos2 === pos3){

                showWinner(pos1);

            }

        }

    }

}



newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
