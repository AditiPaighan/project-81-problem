canvas = 
document.getElementById("myCanvas");
color = "red";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.stroeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.sroke()

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);
     
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle( mouse_x , mouse_y);
}

function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokstyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x , mouse_y ,40,0,2 * Math.PI);
    ctx.stroke();
}

function cleararea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}