
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas.width);
console.log(canvas.height);
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
// }

// setInterval( function (argument) {   // Use for purposes of animation sixty frames pre second to appear smooth.
// 	// body...
// },1000/60);


function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx= dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
    
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        c.strokeStyle='red';
        c.stroke();
        c.fillStyle= 'black';
        c.fill();
        c.closePath();


    }

    this.update = function () {

        if((this.x + this.radius) > canvas.width || (this.x - this.radius) < 0)
        {
           this.dx*= -1;
        }


        if((this.y + this.radius) > canvas.height || (this.y - this.radius) < 0)
        {
            this.dy*= -1;
        }

        this.x+=this.dx;
        this.y+=this.dy;

        this.draw();
    }




}


var circleArray = [];

for(var i=0; i<50; i++){
    
    var x= Math.random() * (canvas.width-radius*2) + radius;
    var y= Math.random() * (canvas.height-radius*2) + radius;
    var radius = 30;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5) ;
    circleArray.push(new Circle(x, y, dx, dy, radius));

}

function animation() {
	requestAnimationFrame(animation); // Browser can optimize it, so animations will be smoother
	 								  // Animations in active tabs will stop , allowing the Cpu to chill
	 								  // More battery-friend
	
    c.clearRect(0, 0, canvas.width, canvas.height);   
    for( var i=0 ; i < circleArray.length ; i++)
    {
        circleArray[i].update();
    }    

}
animation();