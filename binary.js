// Create a function that receives a string of numbers
function binary(biString) {
  // Evaluated a expoenent variable that receives the biString length excluding
  // the last index.
  var exponent = biString.length -1;

  var decimal = 0;

  // Loop trough the the biString iterate every index and through the exponent
  // variable all the index from the last index trough the first index.
  for (var i = 0; i < biString.length; i++, exponent--) {
  // If the biString index using the method of is not a number or the biString index
  // using the method parseInt that convert a string in a number is greater than 1
    if (isNaN(biString[i]) || parseInt(biString[i]) > 1) {
      // return error
      return "invalid input are decimal 0";
    }
    //decimal will get it the biString index number * (using the Math.pow that take
  // the first number and the second as exponent(wich is biString length - the last index))
    decimal += parseInt(biString[i]) * Math.pow(2, exponent);

  }
  // return the decimal;
  return decimal;
}
console.log(binary('102')); // invalid input are decimal 0
console.log(binary('10ret01')); // invalid input are decimal 0
console.log(binary('1001')); // 9
console.log(binary('100')); // 4
