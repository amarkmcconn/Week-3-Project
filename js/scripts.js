
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
      if (arrayBeep.indexOf("3")) {
        arrayBeep[i] = "won't you be my neighbor"
        // Uncaught TypeError: i.indexOf is not a function at beep Boop when I run this in the console. syntax?
        // I need to able to say if the current element with index of 3 change that specific element to the text. 
      }
    }
    } else {
    return false  
    }
    

  console.log(arrayBeep)   
}


  // if (arrayBeep.indexOf("3")){
  //     let index2 = arrayBeep.indexOf(3)
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
  
  
  
//   const final = arrayBeep.toString();
//   return final;  
// }  

// for the code above this targets a specific index of the array and updates that value. Typing it all out would be inefficient. I believe the correct manner would be using the for Loop above as its being created. 

// function matchString3(input) {
//   let string = beepBoop(input);
//   let result = string.match(/3,13,23,30,31,32,33,34,35,36,37,38,39,43,53,63,73,83,93,103/i);
//   console.log(result) 
//   return result;
// } 

// I guess I wouldn't be sure to get this to call the beepBoop function. If this did work then I would have to loop and change all entries to specific word the re-enter back into original string. Code would be too long. 

// function matchString2() {
//   let string = beepBoop(10);
//   let result = string.match(/2,12,20,21,22,24,25,26,27,28,29,42,52,62,72,82,92,102,112/i);
//   document.write("output : " + result);
// }

// UI Logic

$(document).ready(function() {
  $("form").submit((event)=>{
    event.preventDefault();
    const input = $("#sentence-input").val();
    const beep = beepBoop(input);
    $("#output").text(beep);
  });
});




// const three = [3,13,23,30,31,32,33,34,35,36,37,38,39,43,53,63,73,83,93,103]
//   if (const final = const three)
      
// const two = [2,12,20,21,22,24,25,26,27,28,29,42,52,62,72,82,92,102,112,]
// const one = [1,11,41,51,61,71,81,91,101,111,141,151] 

// let upWont = arrayBeep.filter(x => (x.includes("3")); 
  //   console.log(upWont)
  // .forEach wouldn't show me result. filter?
  
// function change(arrayBeep, 3,'wont you be my neighbor') {
//   return arrayBeep.map(el => {
//     if (String(el).indexOf("3")) 
//     return "won't you be my neighbor";
//     return el;
//   });
// }
// function change(arrayBeep, 2,'boop') {
//   return arrayBeep.map(el => {
//     if (String(el).indexOf("2")) 
//     return "boop";
//     return el;
//   });
// }