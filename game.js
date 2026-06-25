const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 720;

const lamp = {
    x:640,
    y:360,
    hp:100
};

function drawLamp(){

    ctx.fillStyle="gold";

    ctx.beginPath();

    ctx.arc(lamp.x,lamp.y,18,0,Math.PI*2);

    ctx.fill();

    ctx.fillStyle="white";

    ctx.fillText("Tower Lamp",lamp.x-35,lamp.y+40);

}

function drawHP(){

    ctx.fillStyle="red";

    ctx.fillRect(20,20,300,25);

    ctx.fillStyle="lime";

    ctx.fillRect(20,20,lamp.hp*3,25);

    ctx.strokeStyle="white";

    ctx.strokeRect(20,20,300,25);

}

function game(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawLamp();

    drawHP();

    requestAnimationFrame(game);

}

game();
