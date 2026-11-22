let turns = true;
function toggleTurns() {
    if (turns == true) {
        console.log("X");
        turns = false;
        return "X";
    }
 else {
    console.log("O");
    turns = true;
    return "O";
 }
}
let button = document.querySelectorAll(".button"); 
button.forEach((button) => {
    button.addEventListener("click",() => {
        console.log("button clicked", button.id);
        button.innerText = toggleTurns();
        button.disabled=true;
        checkWinner()
    });
});

const winpattern = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];
const checkWinner = () => {
   for(pattern of winpattern){
    console.log(button[pattern[0]].innerText, button[pattern[1]].innerText, button[pattern[2]]);
    if(button[pattern[0]].innerText !== "" && button[pattern[0]].innerText === button[pattern[1]].innerText && button[pattern[1]].innerText === button[pattern[2]].innerText){
        
        button[pattern[0]].style.color = "lightgreen";
        button[pattern[1]].style.color = "lightgreen";
        button[pattern[2]].style.color = "lightgreen";

        document.querySelector(".winner").style.visibility = "visible";
        
        
        console.log(button[pattern[0]].innerText, "is the winner");
        document.querySelector(".winner h1").innerText = button[pattern[0]].innerText + " is the winner";
        return;
    }
   }
};

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    button.forEach((button) => {
        button.innerText = "";
        document.querySelector(".winner").style.visibility = "hidden";
        button.disabled = false;
        button.style.color = "rgb(188, 35, 35)";
    })
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    resetButton.click();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
     console.log( "x is the winner");
        document.querySelector(".winner h1").innerText = "X is the winner";
        document.querySelector(".winner").style.visibility = "visible";
        return;
  }
});

