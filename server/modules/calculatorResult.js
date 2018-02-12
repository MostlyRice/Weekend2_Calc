let calculatorResult = [];

let logicalOperation = function(firstInput, secondInput, operation){
  firstInput = Number(firstInput);
  secondInput = Number(secondInput);
  let calculationsPushed = 0;
  if (operation == 'add'){
    console.log( firstInput + secondInput);
    calculationsPushed = firstInput + secondInput;
  }
  else if (operation == 'subtract'){
    console.log(firstInput - secondInput);
    calculationsPushed = firstInput - secondInput;
  }
  else if (operation == 'multiply'){
    console.log(firstInput * secondInput);
    calculationsPushed = firstInput * secondInput;
  }
  else {
    console.log(x / secondInput);
    calculationsPushed = firstInput / secondInput;
  }

  calculatorResult.push(calculationsPushed)
}
let returncalculationsPushed = function(){
  return calculationsPushed;
}
let clerAll = function (){
  calculatorResult = [];
}

module.exports = {
  calculationsPushed: calculationsPushed,
  logicalOperation: logicalOperation,
  clearAll: ClearAll
}
