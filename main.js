canvas = document.getElementById('myCanvas');
c = canvas.getContext("2d");

car1_image = "car1.png";
car1_width = 120;
car1_height = 70;
car1_x = 10;
car1_y = 10;

car2_image = "Car_2.png";
car2_width = 120;
car2_height = 70;
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add() {
    background_img = new Image();
    background_img.onload = upload_bg();
    background_img.src = background_image;

    car1_img = new Image();
    car1_img.onload = upload_car1();
    car1_img.src = car1_image;

    car2_img = new Image();
    car2_img.onload = upload_car2();
    car2_img.src = car2_image;
}

function upload_bg() {
    c.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function upload_car1() {
    c.drawImage(car1_img, car1_x, car1_y, car1_width, car1_height);
}

function upload_car2() {
    c.drawImage(car2_img, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);

  // Arrow keys
    if (key_pressed == '38') {
        up();
        console.log("UP ARROW KEY");
    }
    if (key_pressed == '40') {
        down();
        console.log("DOWN ARROW KEY");
    }
    if (key_pressed == '37') {
        left();
        console.log("LEFT ARROW KEY");
    }
    if (key_pressed == '39') {
        right();
        console.log("RIGHT ARROW KEY");
    }

  // W,S,A,D
    if (key_pressed == '87') {
        up_2();
        console.log("KEY W");
    }
    if (key_pressed == '83') {
        down_2();
        console.log("KEY S");
    }
    if (key_pressed == '65') {
        left_2();
        console.log("KEY A");
    }
    if (key_pressed == '68') {
        right_2();
        console.log("KEY D");
    }

    // Checking Who Won
    if (car1_x > 675) {
        console.log("Car 1 Won");
        document.getElementById("game_status").innerHTML = "Car 1 Won!!";
    } else if (car2_x > 675) {
        console.log("Car 2 Won");
        document.getElementById("game_status").innerHTML = "Car 2 Won!!";
    }
    
}

// Arrow Key's Code
function up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x = " + car1_x + "  + y =" + car1_y);
        upload_bg();
        upload_car1();
        upload_car2();
    }
}

function down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("When up arrow is pressed, x = " + car1_x + "  + y =" + car1_y);
        upload_bg();
        upload_car1();
        upload_car2();
    }
}

function left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("When up arrow is pressed, x = " + car1_x + "  + y =" + car1_y);
        upload_bg();
        upload_car1();
        upload_car2();
    }
}

function right()
{
	if(car1_x <= 700)
	{
		car1_x = car1_x + 10;
		console.log("When right arrow is pressed,  x = " + car1_x + " + y = " + car1_y);
		upload_bg();
        upload_car1();
        upload_car2();
   }
}

// W,S,A,D keys' code
function up_2() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("When up arrow is pressed, x = " + car2_x + "  + y =" + car2_y);
        upload_bg();
        upload_car1();
        upload_car2();
    }
}

function down_2() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        console.log("When up arrow is pressed, x = " + car2_x + "  + y =" + car2_y);
        upload_bg();
        upload_car1();
        upload_car2();
    }
}

function left_2() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("When up arrow is pressed, x = " + car2_x + "  + y =" + car2_y);
        upload_bg();
        upload_car1();
        upload_car2();
    }
}

function right_2() {
	if(car2_x <= 700)
	{
		car2_x =car2_x + 10;
		console.log("When right arrow is pressed,  x = " + car2_x + " + y = " + car2_y);
        upload_bg();
        upload_car1();
		upload_car2();
   }
}