(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

window.onload = function () {
    var canvas = document.getElementById('canvasIcon');
    var context = canvas.getContext('2d');
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 68;
    var endPercent = 101;
    var curPerc = 0;
    var circ = Math.PI * 2;
    var quart = Math.PI / 2;
    var img = document.getElementById('scicon');
    context.lineWidth = 12;
    context.strokeStyle = 'white';
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    canvas.onclick = function () {
        if (curPerc == endPercent) {
            curPerc = 0;
            animate();
        }
    };
    canvas.onmouseover = function () {
        if (curPerc == endPercent) {
            curPerc = 0;
            animate();
        }
    };

    function animate(current) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 25, 25, 100, 100 * img.height / img.width);
        context.beginPath();
        context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
        context.stroke();
        curPerc++;
        if (curPerc < endPercent) {
            requestAnimationFrame(function () {
                animate(curPerc / 100)
            });
        }

    }

    animate();

    function displayNextImage() {
        posAndroid = (posAndroid === android.length - 1) ? 0 : posAndroid + 1;
        document.getElementById("androidScreenshot").src = android[posAndroid];
        posPebble = (posPebble === pebbleOG.length - 1) ? 0 : posPebble + 1;
        document.getElementById("pebbleScreenshot1").src = pebbleOG[posPebble];
        document.getElementById("pebbleScreenshot2").src = pebbleTime[posPebble];
        document.getElementById("pebbleScreenshot3").src = pebbleRound[posPebble];
    }

    function startTimer() {
        setInterval(displayNextImage, 4000);

    }

    var android = [];
    var pebbleOG = [];
    var pebbleTime = [];
    var pebbleRound = [];
    var posAndroid = -1;
    var posPebble = -1;
    android[1] = "./images/AndroidScreen2.png";
    android[2] = "./images/AndroidScreen3.png";
    android[3] = "./images/AndroidScreen4.png";
    android[0] = "./images/AndroidScreen1.png";
    pebbleOG[1] = "./images/PebbleScreen2.png";
    pebbleOG[2] = "./images/PebbleScreen3.png";
    pebbleOG[0] = "./images/PebbleScreen1.png";
    pebbleTime[1] = "./images/TimeScreen2.png";
    pebbleTime[2] = "./images/TimeScreen3.png";
    pebbleTime[0] = "./images/TimeScreen1.png";
    pebbleRound[1] = "./images/RoundScreen2.png";
    pebbleRound[2] = "./images/RoundScreen3.png";
    pebbleRound[0] = "./images/RoundScreen1.png";
    startTimer();
};