var canvas= new fabric.Canvas("myCanvas");

ballX=0;
ballY=0;
holeX=800;
holeY=400;


block_image_width = 5;
block_image_height = 5;

holobj= "";
ball_object= "";
function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
        holobj= Img;

        holobj.scaleToWidth(150)
        holobj.scaleToHeight(140)
        holobj.set({
           top:holeY,
           left: holeX 
        })
        canvas.add(holobj)
    })
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
        ball_object= Img;

        ball_object.scaleToWidth(150)
        ball_object.scaleToHeight(140)
        ball_object.set({
           top:ballY,
           left: ballX 
        })
        canvas.add(ball_object)
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
if((ballX == holeX)&&(ballY == holeY)){
document.getElementById("hd3").innerHTML= "You hit the Goal !!!!"
document.getElementById("myCanvas").style.borderColor="red"
}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up(){
		if(ballY > 0){
			ballY -= 10
			canvas.remove(ball_object)
			new_image()
		}
	}
	function down(){
		if(ballY < 600){
			ballY += 10
			canvas.remove(ball_object)
			new_image()
		}
	}
	function left()
	{
		if(ballX >5)
		{
			ballX -= 10
			canvas.remove(ball_object)
			new_image()
			console.log("left")
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			ballX += 10
			canvas.remove(ball_object)
			new_image()
			console.log("right")
		}
	}
	
}

