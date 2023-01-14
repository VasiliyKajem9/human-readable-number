module.exports = function toReadable (number) {
  const stringNum = number + '';

  const numbers = [
    ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],

    ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],

    ['hundred']
  ];

  function underNN (num) {
    if (+ num == 0 && num.length > 1) {
      return ''
    } else if (+num <= 19) {
      return numbers[0][+num]
    } else if  (+num >= 20 && +num < 100) {
      if(num[1] == 0) {
        return numbers[1][+ num[0] - 2] + '' 
      } else return numbers[1][+ num[0] - 2] + ' ' + numbers[0][+ num[1]]
    }
  }



  if (number < 100) {
    return underNN(stringNum)
  } else if (+ stringNum.slice(1) == 0) {
    return numbers[0][stringNum[0]] + ' ' + numbers[2][0]
  } else if ( number >= 100) {
    return numbers[0][stringNum[0]] + ' ' + numbers[2][0] + ' ' + underNN(stringNum.slice(1))
  }
}
