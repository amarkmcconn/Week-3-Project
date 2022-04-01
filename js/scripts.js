
//Business Logic

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
  if (arrayBeep[1] === 1){
    const index = arrayBeep.indexOf(1)
    arrayBeep[index] = "beep"
  }
  if (arrayBeep[2] === 2){
    const index1 = arrayBeep.indexOf(2)
    arrayBeep[index1] = "boop"
  }
  if (arrayBeep[3] === 3){
    const index2 = arrayBeep.indexOf(3)
    arrayBeep[index2] = "won't you be my neighbor?"
  }  
  console.log(arrayBeep) 
} 


 


// function beepBoop(input) {
//   let arrayBeep = []
//   if (Number.isInteger(input) === 0) {
//     return true
//     } else if (Number.isInteger(input) !== 0) {
//     const newNumber = parseInt(input)
//     arrayBeep.push(newNumber)
//     } else {
    
//     }
//   console.log(arrayBeep) 
// }  