// Função para a calculadora


function calculate(operation) {

    // Obtendo os valores dos inputs e convertendo para números (float)
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    // Verificando se os números são válidos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Por favor, insira números válidos!";
        return;
    }
    // Variável para armazenar
    let result;
    // Realizando a operação com base no parâmetro passado
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('result').textContent = "Não é possível dividir por zero!";
                return;
            }
            result = num1 / num2;
    }
    // Exibindo o resultado da operação no elemento com id "result"
    document.getElementById('result').textContent = `Resultado: ${result}`;
    
}

function transformText(n){

    const texto = document.getElementById('textInput').value;
    let result = "";

    if(texto.trim() === ''){
        document.getElementById('textResult').textContent = 'Por favor, digite algum texto!'
        return;
    }

    if(n == 'upper'){
        result = texto.toUpperCase();
        
    } else if (n == 'lower'){
        result = texto.toLowerCase();
    }

    document.getElementById('textResult').textContent = `Resultado: ${result}`;
    return;
}

function countChars(){
    
    const texto = document.getElementById('textInput').value;
    let result = texto.length;
    document.getElementById('textResult').textContent = `Resultado: ${result}`;
    return;

}

// array de cores
const colors = ['red','blue','yellow','wine','green'];
let currentColorIndex = 0; 

document.getElementById('colorBox').addEventListener('click', function(){

    currentColorIndex = (currentColorIndex + 1) % colors.length;
    this.style.backgroundColor = colors[currentColorIndex];

});