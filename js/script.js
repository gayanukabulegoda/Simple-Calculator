let expression = "";

function appendNumber(number) {
  expression += number;
  document.getElementById("display").value = expression;
}

function appendOperator(operator) {
  expression += operator;
  document.getElementById("display").value = expression;
}

function appendDecimal() {
  if (!/[\d.]$/.test(expression)) {
    // If the last character is not a digit or the expression is empty, append '0.'
    expression += "0.";
  } else if (!expression.includes(".")) {
    expression += ".";
  }
  document.getElementById("display").value = expression;
}

function appendPercentage(operator) {
  if (operator === "%") {
    // Calculate percentage of the current expression
    try {
      const percentage = eval(expression) / 100;
      expression = percentage.toString();
      document.getElementById("display").value = expression;
    } catch (error) {
      document.getElementById("display").value = "Error";
      expression = "";
    }
  } else {
    expression += operator;
    document.getElementById("display").value = expression;
  }
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = "";
}

function clearFromRight() {
  if (expression.length > 0) {
    expression = expression.slice(0, expression.length - 1);
    document.getElementById("display").value = expression;
  }
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById("display").value = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById("display").value = "Error";
    expression = "";
  }
}

let themeBtn = document.getElementById("theme-change-btn");
let body = document.getElementById("body");

themeBtn.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
  themeBtn.innerHTML = body.classList.contains("dark-theme")
    ? '<i class="fa-solid fa-sun" style="color: #934bb0;"></i>'
    : '<i class="fa-solid fa-moon" style="color: #301347;"></i>';
});
