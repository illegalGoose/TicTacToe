const buttonOne = document.getElementById('first'),
    buttonTwo = document.getElementById('second'),
    buttonThree = document.getElementById('third'),
    buttonFour = document.getElementById('fourth'),
    buttonFive = document.getElementById('fifth'),
    buttonSix = document.getElementById('sixth'),
    buttonSeven = document.getElementById('seventh'),
    buttonEigth = document.getElementById('eigth'),
    buttonNine = document.getElementById('ninth');

let turn = "O";
let nextTurn = document.getElementById('nextTurn');
let winnerImg = new Image();

function Board(){
     console.log(event, this)
    if(nextTurn.textContent == 'Winner: O' ||
       nextTurn.textContent == 'Winner: X'){
        return
    }if(turn == "O"){
        if(this.value == ""){
            this.value = "O";
            turn = "X";
            nextTurn.textContent='Next turn: X';
        }
    }else{
        if(this.value == ""){
            this.value = "X";
            turn = "O";
            nextTurn.textContent='Next turn: O';
        }
    }
    if(buttonOne.value == "O" && buttonTwo.value == "O" && buttonThree.value == "O" ||
       buttonFour.value == "O" && buttonFive.value == "O" && buttonSix.value == "O" ||
       buttonSeven.value == "O" && buttonEigth.value == "O" && buttonNine.value == "O" ||
       buttonOne.value == "O" && buttonFour.value == "O" && buttonSeven.value == "O" ||
       buttonTwo.value == "O" && buttonFive.value == "O" && buttonEigth.value == "O" ||
       buttonThree.value == "O" && buttonSix.value == "O" && buttonNine.value == "O" ||
       buttonOne.value == "O" && buttonFive.value == "O" && buttonNine.value == "O" ||
       buttonThree.value == "O" && buttonFive.value == "O" && buttonSeven.value == "O"){
        nextTurn.textContent='Winner: O!';
        winnerImg.src = 'https://s28637.pcdn.co/wp-content/uploads/2015/08/Winning-GIF.gif';
    }
    if(buttonOne.value == "X" && buttonTwo.value == "X" && buttonThree.value == "X" ||
       buttonFour.value == "X" && buttonFive.value == "X" && buttonSix.value == "X" ||
       buttonSeven.value == "X" && buttonEigth.value == "X" && buttonNine.value == "X" ||
       buttonOne.value == "X" && buttonFour.value == "X" && buttonSeven.value == "X" ||
       buttonTwo.value == "X" && buttonFive.value == "X" && buttonEigth.value == "X" ||
       buttonThree.value == "X" && buttonSix.value == "X" && buttonNine.value == "X" ||
       buttonOne.value == "X" && buttonFive.value == "X" && buttonNine.value == "X" ||
       buttonThree.value == "X" && buttonFive.value == "X" && buttonSeven.value == "X"){
        nextTurn.textContent='Winner: X!';
        winnerImg.src = 'https://s28637.pcdn.co/wp-content/uploads/2015/08/Winning-GIF.gif';
    }
    if(buttonOne.value != "" &&
       buttonTwo.value != "" &&
       buttonThree.value != "" &&
       buttonFour.value != "" &&
       buttonFive.value != "" &&
       buttonSix.value != "" &&
       buttonSeven.value != "" &&
       buttonEigth.value != "" &&
       buttonNine.value != ""){
        nextTurn.textContent="Draw!";
    }
    
}

buttonOne.addEventListener('click', Board);
buttonTwo.addEventListener('click', Board);
buttonThree.addEventListener('click', Board);
buttonFour.addEventListener('click', Board);
buttonFive.addEventListener('click', Board);
buttonSix.addEventListener('click', Board);
buttonSeven.addEventListener('click', Board);
buttonEigth.addEventListener('click', Board);
buttonNine.addEventListener('click', Board);