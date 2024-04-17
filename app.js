//strike button
var strikeButton = document.querySelector("#strike");
//reset button
var resetButton = document.querySelector("#reset");

//score tags
var team1score_tag = document.getElementById("score-team1");
var team2score_tag = document.getElementById("score-team2");

//wicket tags
var team1Wicket_tag = document.getElementById("wickets-team1");
var team2Wicket_tag = document.getElementById("wickets-team2");

//Audio variables
var strikeAudio = new Audio("http://bit.ly/so-ball-hit");
var gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

var team1Score = 0;
var team2Score = 0;
var team1Wicket = 0;
var team2Wicket = 0;
var team1BallsFaced = 0;
var team2BallsFaced = 0;
var turn = 1;

var possibleOutcomes = [0, 1, 2, 3, 4, 5, 6, 'W'];

strike.addEventListener('click', function() {
strikeAudio.play();
strikeAudio.currentTime = 0;
var random = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
console.log("random: ",random)

//India batting
    if(turn==1)
    {
        team1BallsFaced++;
    var ball = document.querySelector(`#team1-superover div:nth-child(${team1BallsFaced})`); //  ` is used for inputing varibles inside the double quotes
    ball.innerHTML = random;

    if(random =="W")
    {
    team1Wicket++;
    }
    else
    {
    team1Score+= random;
    }
    if(team1BallsFaced == 6 || team1Wicket == 2)
    {
        turn = 2;
    }
    updateScore();
    }
});

function updateScore()
{
team1score_tag.innerHTML = team1Score;
team1Wicket_tag.innerHTML = team1Wicket;

function gameOver(){
    if(team1Score>team2Score){
    alert("IND wins")
    }
    else if(team1Score<team2Score){
    alert("PAK WINS") 
    }
    else{
        alert("IT'S A TIE")
    }
    
    resetButton.addEventListener("click", resetFunction)
    function resetFunction(){
        window.location.reload()
}
}


