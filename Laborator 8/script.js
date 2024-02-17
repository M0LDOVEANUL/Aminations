const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(300, 300);
ctx.lineTo(300,200);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(500, 200);
ctx.lineTo(500, 300);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300,300);
ctx.lineTo(400,200);
ctx.lineTo(500,300);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400,200);
ctx.lineTo(380,182);
ctx.lineTo(400,164);
ctx.lineTo(420,182);
ctx.closePath();
ctx.stroke();