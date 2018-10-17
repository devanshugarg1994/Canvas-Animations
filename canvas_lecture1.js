
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
// c.fillRect(100,100,100,100);
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = "000000";
// c.stroke();


// c.beginPath();
// c.arc(500,500,200,0, 2 * Math.PI,false);
// c.strokeStyle = 'blue';
// c.stroke();
// c.closePath();

// for (var i = 0; i < 100; i++) {
    
//     var x = Math.random() * canvas.width;
//     var y = Math.random() * canvas.height;
// 	c.beginPath();
// 	c.arc(x, y, 30, 0, 2 * Math.PI, false);
// 	c.strokeStyle = 'blue';
// 	c.stroke();
// 	c.closePath();

// setInterval( function (argument) {   // Use for purposes of animation sixty frames pre second to appear smooth.
// 	// body...
// },1000/60);

var x= 200;
var y= 200;
var radius = 30;

function animation() {
	requestAnimationFrame(animation); // Browser can optimize it, so animations will be smoother
	 								  // Animations in active tabs will stop , allowing the Cpu to chill
	 								  // More battery-friend
	c.clearReact(0,0,canvas.width,canvas.height);   
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI *2, false);
    c.strokeStyle='red';
    c.stroke();

    x+=1;

    // if(x + radius > innerWidth || x - )
}

animation();