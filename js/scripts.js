
//Business Logic

function arrayString(input) {
  let arrayBeep = []
  if (Number.isInteger(input) === 0) {
    return true
    } else if (Number.isInteger(input) !== 0) {
    let newNumber = -1
    for (let i = 0; i <= input; i++) {
      newNumber++;
      arrayString.push(newNumber)
    }
    } else {
    return false  
    }
  const final = arrayString.toString();
  return final;
} 


