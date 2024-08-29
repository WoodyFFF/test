var hamburger = document.getElementById("hamburger");
var coke = document.getElementById("coke");
var coin = document.getElementById("coin");
var score = document.getElementById("score");
var game = document.getElementById("game");
var start = document.getElementById("start");
var jumpSound = document.getElementById('jumpSound');
var hitSound = document.getElementById('hitSound');
var gameMusic = document.getElementById('gameMusic');
var counter=0;

document.addEventListener('DOMContentLoaded', function() {
    var gameMusic = document.getElementById('gameMusic');
    gameMusic.volume = 0.6;
    gameMusic.play();
});

function jump(){
    if(hamburger.classList == "animate"){return}
    hamburger.classList.add("animate");
    jumpSound.play();
    setTimeout(function(){
        hamburger.classList.remove("animate");
    },500);
}

game.addEventListener("click", (e) => {
    start.innerHTML = "";
    start.style.display = "none";
    coke.classList.add("cokeAnimate");
    coin.classList.add("coinAnimate");
    setTimeout(function(){
        alert("Congratulation! You won a free burger.");
        window.location.href = 'voucher.html';
}, 15000);
});

var checkDead = setInterval(function() {
    let hamburgerTop = parseInt(window.getComputedStyle(hamburger).getPropertyValue("top"));
    let cokeLeft = parseInt(window.getComputedStyle(coke).getPropertyValue("left"));
    let coinLeft = parseInt(window.getComputedStyle(coin).getPropertyValue("left"));
    if(cokeLeft<20 && cokeLeft>-50 && hamburgerTop>=400){
        coke.style.animation = "none";
        coin.style.animation = "none";
        hitSound.play();
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        coke.classList.add("cokeAnimate");
        coin.classList.add("coinAnimate");
    }
    if(coinLeft<20 && coinLeft>-50 && hamburgerTop>=400){
        coke.style.animation = "none";
        coin.style.animation = "none";
        hitSound.play();
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        coke.classList.add("cokeAnimate");
        coin.classList.add("coinAnimate");
    }
    else{game.addEventListener("click", (e) => {
        counter++;
        score.innerHTML = Math.floor(counter/100);
    })
    }}, 20);