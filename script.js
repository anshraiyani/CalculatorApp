let previousValue='';
let currentValue='';
let operatorValue='';

document.addEventListener('DOMContentLoaded', function(){
    let clear = document.querySelector('.clear')
    let operators = document.querySelectorAll('.operator')
    let numbers = document.querySelectorAll('.number')
    let decimal = document.querySelector('.decimal')
    let equal = document.querySelector('.equal')
    let previous = document.querySelector('.previous-value')
    let current = document.querySelector('.current-value')

    numbers.forEach((number) => number.addEventListener("click", function(e){
        registerNumber(e.target.textContent)
        current.textContent=currentValue
    }))

    operators.forEach((operator) => operator.addEventListener("click", function(e){
        registerOperator(e.target.textContent)
        previous.textContent=previousValue+" "+operatorValue
        current.textContent=currentValue
    }))

    clear.addEventListener("click", function(){
        previousValue=''
        currentValue=''
        operatorValue=''
        current.textContent=currentValue
        previous.textContent=previousValue
    })

    equal.addEventListener("click", function(){
        calculate()
        if(previousValue.length<=13){
            previous.textContent=''
            current.textContent=previousValue
        }
        else{
            previous.textContent=''
            current.textContent=previousValue.slice(0,12)+"..."
        }
    })

    decimal.addEventListener("click", function(){
        registerDecimal()
    })
})

function registerNumber(num){
    if(currentValue.length<=7)
        currentValue+=num
}

function registerOperator(op){  
    operatorValue=op
    previousValue=currentValue
    currentValue=''
}

function calculate(){
    previousValue=Number(previousValue)
    currentValue=Number(currentValue)

    if(operatorValue === "+"){
        previousValue+=currentValue
    }
    else if(operatorValue === "-"){
        previousValue-=currentValue
    }
    else if(operatorValue === "/"){
        previousValue/=currentValue
    }
    else if(operatorValue === "X"){
        previousValue*=currentValue
    }
    currentValue=previousValue
    previousValue = previousValue.toString()
    currentValue = currentValue.toString()
}

function registerDecimal(){
    if(!currentValue.includes(".")){
        currentValue += "."
    }
}