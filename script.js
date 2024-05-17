player = 0;
ai = 0;

setScore();

function setScore(){
    let p = document.getElementById("p-score");
    let a = document.getElementById("ai-score");

    p.innerHTML = player;
    a.innerHTML = ai;
}

function myClick(btn){
    

    // 0 -> rock
    // 1 -> paper
    // 2 -> sccisor

    let p = document.querySelector('input[name="play"]:checked').value;
    console.log(p);
    let a = Math.floor(Math.random() * 3);
    console.log(a);
    setAI(a);
    game(p,a);
    btn.innerHTML = "Play Again";
}

function setAI(play){
    // 0 -> rock
    // 1 -> paper
    // 2 -> sccisor

    let c = document.getElementById("comp");

    if (play == 0){
        c.innerHTML = "ROCK";
    }
    else if (play == 1){
        c.innerHTML = "PAPER";
    }
    else{
        c.innerHTML = "SCCISOR";
    }
}

function game(p1,p2){
    if(p1 == p2){
        result(0);
    }
    else if ((p1 == 0 && p2 == 2) || (p1 == 1 && p2 == 0) || (p1 == 2 && p2 == 1)){
        player++;
        result(1);
    }
    else{
        ai++;
        result(-1);
    }
    setScore();
}

function result(state){
    // 0 -> draw
    // -1 -> lose
    // 1 -> win
    let s = document.getElementById("Board");
    if(state == 1){
        s.innerHTML = "YOU WIN";
        s.style.color = "green";
    }
    else if (state == -1){
        s.innerHTML = "YOU LOSE";
        s.style.color = "red";
    }
    else{
        s.innerHTML = "DRAW";
        s.style.color = "white";
    }
}