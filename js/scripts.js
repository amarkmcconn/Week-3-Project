
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
        if ((i + " ").indexOf("3") !== -1) {
          arrayBeep[i] = "won't you be my neighbor?"
        // all elements are now the above!  
        } else if ((i + " ").indexOf("2") !== -1) {
           arrayBeep[i] = "boop!"
        } else if ((i + " ").indexOf("1") !== -1){
          arrayBeep[i] = "beep!"
        } else {

        }
    }
  const final = arrayBeep.toString();
  return final; 
  }
}  

// UI Logic

$(document).ready(function() {
  $("form").submit((event)=>{
    event.preventDefault();
    const input = $("#sentence-input").val();
    const beep = beepBoop(input);
    $("#output").text(beep);
  });
});
  
  






// if (arrayBeep[3] === 3){
  //     let index2 = arrayBeep.indexOf(3")
  //     arrayBeep[index2] = "won't you be my neighbor?"
  //   }
  // if (arrayBeep[2] === 2){
  //   const index1 = arrayBeep.indexOf(2)
  //   arrayBeep[index1] = "boop!"
  // }
  // if (arrayBeep[1] === 1){
  //   const index = arrayBeep.indexOf(1)
  //   arrayBeep[index] = "beep!"
  // }