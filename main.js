canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car2_width = 120;
car2_height = 70;

background_img="https://cdn.wallpapersafari.com/72/46/sJHtQn.jpg";
car1_image = "https://tse3.mm.bing.net/th?id=OIP.i1o6Cr4PaXd1jzALEvDZuwHaD3&pid=Api&P=0&w=299&h=157"
car2_image = "https://tse4.mm.bing.net/th?id=OIP.IpUgSbZn8-9C8GiNrKSe1QHaFj&pid=Api&P=0&w=225&h=170"

car1_x = 10;
car1_y = 10;
car2_x = 10;
car2_y = 100;

function add() {
	background_img_tag = new Image();
	background_img_tag.onload = upload_background;
	background_img_tag.src = background_img;

	car1_img_tag = new Image();
	car1_img_tag.onload = upload_car1;
	car1_img_tag.src = car1_img;

	car2_img_tag = new Image();
	car2_img_tag.onload = upload_car2;
	car2_img_tag.src = car2_img;
}



function upload_background() {

	ctx.drawImage(background_img_tag,0,0,canvas.width,cavas.height);
}
function upload_car1() {

	ctx.drawImage(car1_img_tag,car1_height,car1_width,car1_x,car1_y);
}
function upload_car2() {

	ctx.drawImage(car2_img_tag,car2_height,car2_width,car2_x,car2_y);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(keyPressed = '38'){
		car1_up();
		console.log("car1 up")
	}

	if(keyPressed = '40'){
		car1_down();
		console.log("car1 down")
	}

	if(keyPressed = '39'){
		car1_right();
		console.log("car1 right")
	}

	if(keyPressed = '37'){
		car1_left();
		console.log("car1 left")
	}

	if(keyPressed = '65'){
		car2_up();
		console.log("car2 up a")
	}

	if(keyPressed = '66'){
		car2_down();
		console.log("car2 down b")
	}

	if(keyPressed = '67'){
		car2_right();
		console.log("car2 right c")
	}

	if(keyPressed = '68'){
		car2_left();
		console.log("car2 left d")
	}
}

