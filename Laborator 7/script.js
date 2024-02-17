    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = '#FFA500'; 
    ctx.fillRect(100, 200, 200, 150); 

    ctx.fillStyle = '#8B4513'; 
    ctx.beginPath();
    ctx.moveTo(100, 200); 
    ctx.lineTo(200, 100); 
    ctx.lineTo(300, 200); 
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#A52A2A'; 
    ctx.fillRect(180, 250, 40, 100); 

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(215, 300, 3, 0, Math.PI * 2); 
    ctx.fill();

    ctx.fillStyle = '#ADD8E6'; 
    ctx.fillRect(120, 220, 50, 50);
    ctx.fillRect(230, 220, 50, 50);