
function calculator(){
 let operator = prompt("Enter Operator( + / - or *): ");
 let firstNumber = parseFloat(prompt("Enter First Number: "));
 let secondNumber = parseFloat(prompt("Enter Second Number: "));

 let result = null;

 if (isNaN(firstNumber) || isNaN(secondNumber)){
      alert("Invalid Input")
      calculator();
   }
   else{
      if (operator == '+'){
            result = firstNumber + secondNumber;
      }
      else if(operator == '/'){
            result = firstNumber / secondNumber;
      }
      else if(operator == '-'){
            result = firstNumber - secondNumber;
      }
      else if(operator == '*'){
       result = firstNumber * secondNumber;
      }
      alert('Result is ' + result);
   }
   
}

calculator();