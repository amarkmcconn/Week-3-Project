
//Business Logic

function beepBoop(input) {
  let arrayBeep = []
  if (Number.isInteger(input) === 0) {
    return true
    } else if (Number.isInteger(input) !== 0) {
    const newNumber = parseInt(input)
    arrayBeep.push(newNumber)
    } else {
    
    }
  console.log(arrayBeep) 
}  


function beepBoop(input) {
  let arrayBeep = []
  if (Number.isInteger(input) === 0) {
    return true
    } else if (Number.isInteger(input) !== 0) {
    let newNumber = -1
    for (let i = 0; i <= input; i++) {
      newNumber++;
      arrayBeep.push(newNumber)
    }
    } else {
    return false  
    }
  console.log(arrayBeep) 
}  