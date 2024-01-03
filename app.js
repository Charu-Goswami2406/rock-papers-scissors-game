let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const genCompchoice=()=>{
    let options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

const playgame=(userchoice)=>{
    console.log("user-choice= ",userchoice);
    const compChoice=genCompchoice();
    console.log("comp choice=",compChoice);

    if(userchoice==compChoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compChoice==="paper" ? false:true; 
        }
        else if(userchoice==="paper"){
            userwin=compChoice==="scissors" ? false:true;
        }
        else{
            userwin=compChoice==="rock" ? false:true;
        }
        showWinner(userwin,userchoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
});

const drawgame=()=>{
    msg.innerText="Game Draw! Play Again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userwin,userchoice,compChoice)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText=userScore;
        msg.innerText=`You win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscorepara.innerText=compScore;
        msg.innerText=`You lose! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}