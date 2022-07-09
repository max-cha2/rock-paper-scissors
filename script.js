function computerPlay(){
    let pick = Math.floor(Math.random() * 3);
    if (pick === 0){
        return 'rock';
    }
    else if(pick === 1){
        return 'paper';
    }
    else if (pick === 2){
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        document.getElementById("display-player-pick").innerHTML = "player picks: " + playerSelection;
        document.getElementById("display-computer-pick").innerHTML = "computer picks: " + computerSelection;
        document.getElementById("display-result").innerHTML = "tie";
    }
    else if(playerSelection ==='paper' && computerSelection === 'rock'){
        document.getElementById("display-player-pick").innerHTML = "player picks: " + playerSelection;
        document.getElementById("display-computer-pick").innerHTML = "computer picks: " + computerSelection;
        document.getElementById("display-result").innerHTML = "player wins this round";
        player_win_count++;
        document.getElementById("display-player-count").innerHTML = "player win count: " + player_win_count;
        document.getElementById("display-computer-count").innerHTML = "computer win count: " + computer_win_count;
        check_win(player_win_count, computer_win_count)
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        document.getElementById("display-player-pick").innerHTML = "player picks: " + playerSelection;
        document.getElementById("display-computer-pick").innerHTML = "computer picks: " + computerSelection;
        document.getElementById("display-result").innerHTML = "player wins this round";
        player_win_count++;
        document.getElementById("display-player-count").innerHTML = "player win count: " + player_win_count;
        document.getElementById("display-computer-count").innerHTML = "computer win count: " + computer_win_count;
        check_win(player_win_count, computer_win_count)
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        document.getElementById("display-player-pick").innerHTML = "player picks: " + playerSelection;
        document.getElementById("display-computer-pick").innerHTML = "computer picks: " + computerSelection;
        document.getElementById("display-result").innerHTML = "player wins this round";
        player_win_count++;
        document.getElementById("display-player-count").innerHTML = "player win count: " + player_win_count;
        document.getElementById("display-computer-count").innerHTML = "computer win count: " + computer_win_count;
        check_win(player_win_count, computer_win_count)
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        document.getElementById("display-player-pick").innerHTML = "player picks: " + playerSelection;
        document.getElementById("display-computer-pick").innerHTML = "computer picks: " + computerSelection;
        document.getElementById("display-result").innerHTML = "computer wins this round";
        computer_win_count++;
        document.getElementById("display-player-count").innerHTML = "player win count: " + player_win_count;
        document.getElementById("display-computer-count").innerHTML = "computer win count: " + computer_win_count;
        check_win(player_win_count, computer_win_count)
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        document.getElementById("display-player-pick").innerHTML = "player picks: " + playerSelection;
        document.getElementById("display-computer-pick").innerHTML = "computer picks: " + computerSelection;
        document.getElementById("display-result").innerHTML = "computer wins this round";
        computer_win_count++;
        document.getElementById("display-player-count").innerHTML = "player win count: " + player_win_count;
        document.getElementById("display-computer-count").innerHTML = "computer win count: " + computer_win_count;
        check_win(player_win_count, computer_win_count)
    }
    else if(playerSelection ==='scissors' && computerSelection === 'rock'){
        document.getElementById("display-player-pick").innerHTML = "player picks: " + playerSelection;
        document.getElementById("display-computer-pick").innerHTML = "computer picks: " + computerSelection;
        document.getElementById("display-result").innerHTML = "computer wins this round";
        computer_win_count++;
        document.getElementById("display-player-count").innerHTML = "player win count: " + player_win_count;
        document.getElementById("display-computer-count").innerHTML = "computer win count: " + computer_win_count;
        check_win(player_win_count, computer_win_count)
    }
}

function check_win(player_win_count, computer_win_count){
    if(player_win_count === 5 && player_win_count > computer_win_count){
        document.getElementById("display-winner").innerHTML = "player got 5 wins. you win."
    }
    else if(computer_win_count === 5 && computer_win_count > player_win_count){
        document.getElementById("display-winner").innerHTML = "computer got 5 wins. computer win."
    }
}

let player_win_count = 0;
let computer_win_count = 0;

function game(){
    const rockBtn = document.querySelector(".rock-button");
    const paperBtn = document.querySelector(".paper-button");
    const scissorBtn = document.querySelector(".scissor-button");
    let playerSelect = '';

    if(rockBtn.firstChild.nodeValue === 'rock'){
        rockBtn.addEventListener('click', () => {
            playerSelect = 'rock';
            playRound(playerSelect, computerPlay());
        });
    }
    if (paperBtn.firstChild.nodeValue === 'paper'){
        paperBtn.addEventListener('click', () => {
            playerSelect = 'paper';
            playRound(playerSelect, computerPlay());
        });     
    }
    if (scissorBtn.firstChild.nodeValue === 'scissors'){
        scissorBtn.addEventListener('click', () => {
            playerSelect = 'scissors';
            playRound(playerSelect, computerPlay());
        });     
    }
    
}

game();