
//Business Logic

function beepBoop(input) {
  let arrayBeep = []
  if (Number.isInteger(input)) {
    const newNumber = input
    arrayBeep.push(newNumber)
   } else {
    return false
   }
  console.log(arrayBeep) 
}  
