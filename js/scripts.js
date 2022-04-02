
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
    arrayBeep[index] = "beep!"
  }
  if (arrayBeep[2] === 2){
    const index1 = arrayBeep.indexOf(2)
    arrayBeep[index1] = "boop!"
  }
  if (arrayBeep[3] === 3){
    const index2 = arrayBeep.indexOf(3)
    arrayBeep[index2] = "won't you be my neighbor?"
  } 
  
  const final = arrayBeep.toString();
  return final;  
}  

function matchString3(input) {
  let string = beepBoop(input);
  let result = string.match(/3,13,23,30,31,32,33,34,35,36,37,38,39,43,53,63,73,83,93,103/i);
  console.log(result) 
  return result;
} 

function matchString2() {
  let string = beepBoop(10);
  let result = string.match(/2,12,20,21,22,24,25,26,27,28,29,42,52,62,72,82,92,102,112/i);
  document.write("output : " + result);
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




// const three = [3,13,23,30,31,32,33,34,35,36,37,38,39,43,53,63,73,83,93,103]
//   if (const final = const three)
      
// const two = [2,12,20,21,22,24,25,26,27,28,29,42,52,62,72,82,92,102,112,]
// const one = [1,11,41,51,61,71,81,91,101,111,141,151] 

// let upWont = arrayBeep.filter(x => (x.includes("3")); 
  //   console.log(upWont)
  // .forEach wouldn't show me result. filter?