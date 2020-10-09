const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

// ctx.beginPath();
// ctx.moveTo(75, 40);
// ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
// ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
// ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
// ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
// ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
// ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
// ctx.fill();

ctx.fillStyle = 'red'

function draw(x,y){
    const circle = new Path2D();
    circle.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill(circle);
}

let isMousedown = false;


canvas.addEventListener('mousedown',e => {
    
    isMousedown = true;
    // const {
    //     clientX,clientY
    // } = e;

  
    // const react = canvas.getBoundingClientRect()
    // draw(clientX - react.left, clientY - react.top)
    // console.log('mousedown')
})

canvas.addEventListener('mouseup',e =>{
   isMousedown = false;
})

canvas.addEventListener('mousemove',e =>{
    if(!isMousedown){
        return;
    }
    const {
        clientX,clientY
    } = e;

  
    const react = canvas.getBoundingClientRect()
    draw(clientX - react.left, clientY - react.top)
    console.log('mousedown')
})

const colorPicker = [...document.querySelectorAll('.color-picker')]
colorPicker.forEach(colorPicker =>{
    colorPicker.addEventListener('click', e =>{
        ctx.fillStyle = e.target.style.backgroundColor
    })
})

document.getElementById('btn-clear').addEventListener('click',e=>{
    ctx.clearRect(0,0,600,700)
})


