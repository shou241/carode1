canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car_1_width = 100;
car_1_height = 80;

car_2_width = 100;
car_2_height = 80;

car_1_x = 10;
car_1_y = 10;

car_2_x = 10;
car_2_y = 30;

background_image = "racing.jpg";
car_1_image = "CAR_1.png"
car_2_image = "car2.png"


function add(){

    background_imgtag= new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;


    car_1_imgtag = new Image();
    car_1_imgtag.onload = uploadCAR_1;
    car_1_imgtag.src = car_1_image;

    car_2_imgtag = new Image();
    car_2_imgtag.onload = uploadcar2;
    car_2_imgtag.src = car_2_image;
}







function uploadBackground() {
    ctx.drawImage(background_imgtag, 0 , 0 , canvas.width, canvas.height);
}

function uploadCAR_1() {
    ctx.drawImage(car_1_imgtag, car_1_x, car_1_y, car_1_height, car_1_width);
}

function uploadcar2() {
    ctx.drawImage(car_2_imgtag, car_2_x, car_2_y, car_2_height, car_2_width);
}










window.addEventListener("keydown", my_keydown)


    function my_keydown(e)
    {
        keyPressed = e.keyCode;
        console.log(keyPressed);   

        if(keyPressed == '38')
        {
            up();
            console.log("up")
        }


        if(keyPressed == '40')
        {
            down();
            console.log("down")
        }


       if(keyPressed == '37')
       {
           left();
           console.log("left")
       }

       if(keyPressed == '39')
       {
           right();
           console.log("right")
       }

       if(keyPressed == '87')
       {
           w();
           console.log("w")
       }

       if(keyPressed == '65')
       {
           a();
           console.log("a")
       }

       if(keyPressed == '83')
       {
           s();
           console.log("s")
       }

       if(keyPressed == '68')
       {
           d();
           console.log("d")
       }

    }





























































































    
    function up()
    {
        if(car_1_y >=0)
        {
           car_1_y = car_1_y - 10;
           console.log("When up arrow key is pressed, x=" +car_1_x+ "y =" +car_1_y);
           uploadBackground()
           uploadCAR_1
        }
        ctx.drawImage(car_1_imgtag, car_1_x, car_1_y, car_1_height, car_1_width);
    }


    function w()
    {
        if(car_2_y >=0)
        {
           car_2_y = car_2_y - 10;
           console.log("When w key is pressed, x=" +car_2_x+ "y =" +car_2_y);
           uploadBackground()
           uploadcar2()
        }
        ctx.drawImage(car_2_imgtag, car_2_x, car_2_y, car_2_height, car_2_width);
    }


    function down()
    {
        if(car_1_y >=500)
        {
           car_1_y = car_1_y + 10;
           console.log("When down arrow key is pressed, x=" +car_1_x+ "y =" +car_1_y);
           uploadBackground()
           uploadCAR_1()
        }
        ctx.drawImage(car_1_imgtag, car_1_x, car_1_y, car_1_height, car_1_width);
    }


    function s()
    {
        if(car_2_y >=500)
        {
           car_2_y = car_2_y + 10;
           console.log("When s key is pressed, x=" +car_2_x+ "y =" +car_2_y);
           uploadBackground()
           uploadcar2()
        }
        ctx.drawImage(car_2_imgtag, car_2_x, car_2_y, car_2_height, car_2_width);
    }


   

    function left()
    {
        if(car_1_x >=0)
        {
           car_1_x = car_1_x - 10;
           console.log("When left arrow key is pressed, x=" +car_1_x+ "y =" +car_1_y);
           uploadBackground()
           uploadCAR_1()
        }
        ctx.drawImage(car_1_imgtag, car_1_x, car_1_y, car_1_height, car_1_width);
    }


    function a()
    {
        if(car_2_x >=0)
        {
           car_2_x = car_2_x - 10;
           console.log("When a key is pressed, x=" +car_2_x+ "y =" +car_2_y);
           uploadBackground()
           uploadcar2()
        }
        ctx.drawImage(car_2_imgtag, car_2_x, car_2_y, car_2_height, car_2_width);
    }





    function right()
    {
        if(car_1_x >=700)
        {
           car_1_x = car_1_x + 10;
           console.log("When right arrow key is pressed, x=" +car_1_x+ "y =" +car_1_y);
           uploadBackground()
           uploadCAR_1()
        }
        ctx.drawImage(car_1_imgtag, car_1_x, car_1_y, car_1_height, car_1_width);
    }


    function d()
    {
        if(car_2_x >=700)
        {
           car_2_x = car_2_x + 10;
           console.log("When d key is pressed, x=" +car_2_x+ "y =" +car_2_y);
           uploadBackground()
           uploadcar2()
        }
        ctx.drawImage(car_2_imgtag, car_2_x, car_2_y, car_2_height, car_2_width);
    }



images_array = ["array1.jpg", "array2.jpg", "array2.jpg", "array2.jpg"];
random_number=Math.floor(Math.random()*4);
background_image = images_array[random_number];
console.log("backgroung_image = " + background_image);