
// Só vai precisar usar a classe aonde precisar

var canvases = document.getElementsByClassName('board');
var ctxs = [];

// Loop para configurar o contexto 2D para cada elemento canvas
for (var i = 0; i < canvases.length; i++) {
    ctxs[i] = canvases[i].getContext('2d');
    ctxs[i].lineJoin = "round";
    ctxs[i].globalCompositeOperation = "lighter";
}

var colorLine = "#ff00ff"; // Cor
var speed = 250; // Velocidade
var lineWidth = 250; // Espessura em px

function resizeCanvas() {
    // Loop para ajustar o tamanho de cada elemento canvas
    for (var i = 0; i < canvases.length; i++) {
        canvases[i].width = window.innerWidth;
        canvases[i].height = window.innerHeight;
    }
}

function drawLine(ctx, x, y, length) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length, y);
    ctx.strokeStyle = colorLine;
    ctx.lineWidth = lineWidth;
    ctx.shadowColor = colorLine;
    ctx.shadowBlur = 20;
    ctx.stroke();
}

function draw() {
    resizeCanvas();
    // Loop para desenhar em cada elemento canvas
    for (var i = 0; i < canvases.length; i++) {
        var ctx = ctxs[i];
        var length = canvases[i].width;
        var offset = (Date.now() / (1000 / speed)) % length;
        ctx.clearRect(0, 0, canvases[i].width, canvases[i].height);
        drawLine(ctx, -offset, canvases[i].height / 2, length);
    }
    requestAnimationFrame(draw);
}

draw();

// Atualiza o desenho quando a janela for redimensionada
window.addEventListener('resize', function() {
    draw();
});
