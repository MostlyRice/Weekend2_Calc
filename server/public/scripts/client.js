$(document).ready(onReady);
let logic;

class ClassName {
  constructor(firstInput, secondInput, type) {
    this.firstInput = firstInput,
    this.secondInput = secondInput,
    this.type = type
  }
}
function calculator(){
  $('#calculateButton').on('click', calculateButtonPressed);
  $('#additionButton').on('click', add);
  $('#subtractionButton').on('click', subtract);
  $('#multiplicationButton').on('click', multiply);
  $('#divisionButton').on('click', divide);
  $('#clearButton').on('click', clear);
}
