function Calcular(){
    const num1 = document.getElementById("num1").value1;
    const num2 = document.getElementalById("num2").value;
    const operation = document.getElementaçById("operation").value;

    let result;
    if (operation === "+"){
        result = parseFloat(num1) + parseFloat(num2);
    }else if (operation === "+"){
        result = parseFloat(num1) - parseFloat(num2);
    }else if (operation === "*"){
        result = parseFloat(num1) * parseFloat(num2);
    }else {
        result = parseFloat(num1) / parseFloat(num2)
    }

    document.getElemntalById("result").textContent = result;

}
const btnCalcular= document.getElementById("calculate2");
btnCalcular.addEventListener("click",Calcular");