function fun1() {
    let n = parseFloat(prompt("Введите число:"));
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    let result = factorial(n);
    alert(`Факториал числа ${n} равен ${result}`);
}

function fun2() {
    let n = parseFloat(prompt("Введите число:"));
    function naturalNum(n) {
        if (n <= 1) {
            return false;
          }
        
          for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
              return false;
            }
          }
          return true;
    }
    let result = naturalNum(n);
    alert(`${result}`);
}

function calculate(operation) {
    const a = parseFloat(document.getElementById("firstNumber").value);
    const b = parseFloat(document.getElementById("secondNumber").value);
    const result = isNaN(a) || isNaN(b) ? "Whrite correct numbers" : 
        operation === '*' ? a * b :
        operation === '/' ? b === 0 ? "eror" : a / b :
        "eror"; 

    document.getElementById("result").textContent = "The Result Is: " + result;
}


function fun4() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const scoreElement = document.querySelector('.score');
    const resultElement = document.querySelector('.result');
  
    if (selectedAnswer) {
      const isCorrect = selectedAnswer.getAttribute('data-answer') === '4';
      const currentScore = parseInt(scoreElement.textContent) || 0;
  
      if (isCorrect) {
        resultElement.textContent = `Score: ${currentScore + 1}`;
      } else {
        resultElement.textContent = `Score: ${currentScore}`;
      }
    }
  }