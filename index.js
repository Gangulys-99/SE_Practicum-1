let summation = () => {
    let num1 = document.getElementById("num-1").value;
    let num2 = document.getElementById("num-2").value;
    let result = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = "Result: " + result;
}
