function convertToRoman(num) {
  const romanNumerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  
  let result = '';
  
  for (let i = 0; i < romanNumerals.length; i++) {
    const [symbol, value] = romanNumerals[i];
    
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  
  return result;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a number: ', (num) => {
  const roman = convertToRoman(parseInt(num));
  console.log(`Roman numeral: ${roman}`);
  readline.close();
});





// do not edit below this line
module.exports = convertToRoman
