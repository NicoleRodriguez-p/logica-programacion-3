function calculoFactorial() {
    const numberInput = document.getElementById("numberInput").value;

    // Verificar si el valor ingresado es un número
    if (isNaN(numberInput)) {
        alert("Por favor, ingresa un número valido.");
        return;
    }

    const number = parseInt(numberInput);
    let factorial = 1;

    // Calcular el factorial
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = `${number} = ${factorial}`;
}
