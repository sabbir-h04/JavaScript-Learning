let colorGenerator = function() {
    let value1= Math.floor(Math.random() * 256);
    let value2= Math.floor(Math.random() * 256);
    let value3= Math.floor(Math.random() * 256);
    return `rgb(${value1}, ${value2}, ${value3})`;
}

let colorLoop

let startChangingColor = function(){
    if (!colorLoop) {
        colorLoop = setInterval(()=>{
            document.body.style.backgroundColor = colorGenerator()
        },1500)
    }
    
}
let stopChangingColor = function(){
    clearInterval(colorLoop)
    colorLoop = null
}

document.querySelector("#start").addEventListener("click",startChangingColor)
document.querySelector("#stop").addEventListener("click",stopChangingColor)

