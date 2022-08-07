var mouseEvent = "empty";
var width = screen.width;
var last_position_of_x, last_position_of_y;
var new_width = width - 50;
var new_height = screen.height - 100;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 10;

    canvas.addEventListener("touchstart", my_mousedown);
    canvas.addEventListener("mousedown", my_mousedown);
    if (width < 992) {
        document.getElementById("myCanvas").innerHtml =  new_width;
        document.getElementById("myCanvas").innerHtml =  new_height;
        document.body.style.overflow = "hidden";
    }
    function my_mousedown(e)
    {
        last_position_of_x = e.clientX - canvas.offsetLeft;
        last_position_of_y = e.clientY - canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
