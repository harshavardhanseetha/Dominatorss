var count1=1;
var a=0;
b=0;
player1 = prompt("Change Player1 name", "Player 1"); 
player2 = prompt("Change player2 name", "Player 2"); 
document.querySelector("h2#pa1").innerHTML = player1; 
        document.querySelector("h2#pa2").innerHTML = player2; 


var crowd = new Audio();
crowd.src="../Audio/crowd.mp3";


function disable1(){
    if(count1<6){
        roll1();
        sound.play();
        score1();
        count1++;
    }
    else{
        document.getElementsByClassName("roll1").disabled=true;
    }
    
}
var count2=1;
function disable2(){
    if(count2<6){
        roll2();
        score();
        sound.play();
        score2();
        count2++;
    }
    if(count1==6 && count2==6)
        {
            open();
        }
    else{
        document.getElementsByClassName("roll2").disabled=true;
    }
    
}
  function editNames() { 
        player1 = prompt("Change Player1 name", "Player 1"); 
        player2 = prompt("Change player2 name", "Player 2"); 
        document.querySelector("p.p1-name").innerHTML 
                                = player1;
      document.querySelector("p.p2-name").innerHTML 
                                = player2;
        document.querySelector("h2#pa1").innerHTML = player1; 
        document.querySelector("h2#pa2").innerHTML = player2; 
    }














var cube = document.getElementById('cube');
var cube1 = document.getElementById('cube1');

var min = 1;
var max = 20;
var sound = new Audio();
sound.src="../Audio/roll.mp3";
function Reset(){
    sound.play();
    cube.style.transform = 'rotateX('+0+'deg) rotateY('+0+'deg)';
    cube1.style.transform = 'rotateX('+0+'deg) rotateY('+0+'deg)';
}


var rand1 = Math.round(Math.random()*5) + 1;
var rand2 = Math.round(Math.random()*5) + 1;


function roll1() {
  var x = getRandom(max, min);
  var y = getRandom(max, min);
  rand1 = Math.round(Math.random()*5) + 1;
cube.style.transform = 'rotateX('+0+'deg) rotateY('+360+'deg)';
 a=a+rand1;
if(rand1==1){
  cube.style.transform = 'rotateX('+0+'deg) rotateY('+360+'deg)';
}
if(rand1==2){
  cube.style.transform = 'rotateX('+360+'deg) rotateY('+-90+'deg)';
}
if(rand1==3){
  cube.style.transform = 'rotateX('+180+'deg) rotateY('+720+'deg)';
}
if(rand1==4){
  cube.style.transform = 'rotateX('+720+'deg) rotateY('+90+'deg)';
}
if(rand1==5){
  cube.style.transform = 'rotateX('+270+'deg) rotateY('+720+'deg)';
}
if(rand1==6){
  cube.style.transform = 'rotateX('+90+'deg) rotateY('+720+'deg)';
}
}
function roll2() {
  var x = getRandom(max, min);
  var y = getRandom(max, min);
  rand2 = Math.round(Math.random()*5) + 1;
    b=rand2+b;
if(rand2==1){
  cube1.style.transform = 'rotateX('+0+'deg) rotateY('+360+'deg)';
}
if(rand2==2){
  cube1.style.transform = 'rotateX('+360+'deg) rotateY('+-90+'deg)';
}
if(rand2==3){
  cube1.style.transform = 'rotateX('+180+'deg) rotateY('+720+'deg)';
}
if(rand2==4){
  cube1.style.transform = 'rotateX('+720+'deg) rotateY('+90+'deg)';
}
if(rand2==5){
  cube1.style.transform = 'rotateX('+270+'deg) rotateY('+720+'deg)';
}
if(rand2==6){
  cube1.style.transform = 'rotateX('+90+'deg) rotateY('+720+'deg)';
}
}
var sc= document.getElementById('score');
function score(){
    sc.style.opacity=1;
}
function score_down(){
    sc.style.opacity=0;
}


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("butn1");

var replay = document.getElementsByClassName("start")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
 function open() {
  crowd.play();
  modal.style.display = "block";
  if(a>b){
        document.querySelector("p.w-pa").innerHTML = player1;
      document.querySelector("p.f-score").innerHTML = a;
    }
    if(b>a){
        document.querySelector("p.w-pa").innerHTML = player2;
        document.querySelector("p.f-score").innerHTML = b;
    }
    if(a==b){
        document.querySelector("p.won").innerHTML ="Draw";
        document.querySelector("p.f-score").innerHTML = b;
    }
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    crowd.pause();
  }
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  crowd.pause();
}
replay.onclick = function() {
  modal.style.display = "none";
  a=0;
  b=0;
  document.querySelector("p#p1").innerHTML = a;
  document.querySelector("p#p2").innerHTML = b;
  Reset();
  rand1=0;
  rand2=0;
  count1=0;
  count2=0;
  crowd.pause();
}

// When the user clicks anywhere outside of the modal, close it

function restart() {
  modal.style.display = "none";
  a=0;
  b=0;
  document.querySelector("p#p1").innerHTML = a;
  document.querySelector("p#p2").innerHTML = b;
  Reset();
  rand1=0;
  rand2=0;
  count1=0;
  count2=0;
  crowd.pause();
}

function score1(){
    document.querySelector("p#p1").innerHTML = a;
}

function score2(){
    document.querySelector("p#p2").innerHTML = b;
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max-min)) + min) * 90;
}