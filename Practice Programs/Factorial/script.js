let num = parseInt(prompt("Enter a Number for Factorial: "))
numArr = []
for (let i = 1; i < num; i++) {
    numArr.push(i)   
}

let factorial = numArr.reduce((total, value)=>{
    return total * value;
})

alert(`Factorial is: ${factorial}`)