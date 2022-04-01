```javascript
Describe: beepBoop()

Test 1: "It should recognize the number 0"
Code: beepBoop(0);
Expected Output: True

Test 2: "It should recognize any number "
Code: beepBoop(5);
Expected Output: True

Test 3: "It should return an array"
Code: beepBoop(5);
Expected Output: [5]

Test 4: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test 5: "It should return the number 1 as beep"
Code: beepBoop(5);
Expected Output: [0, "beep", 2, 3, 4, 5]

Test 6: "It should return the number 1 as beep and 2 as boop"
Code: beepBoop(5);
Expected Output: [0,"beep", "boop", 3, 4, 5]

Test 7: "It should return the number 1 as beep and number 2 as boop and number 3 as Won't you be my neighbor?"
Code: beepBoop(5);
Expected Output: [0,"beep", "boop", "won't you be my neighbor?", 4, 5]

Test 8 "It should return 'won't you be my neighbor?' if the number contains a 3 in it" 
Code: beepBoop(5);
Expected Output: [0,"beep", "boop", "won't you be my neighbor?", 4, 5]

Test 9 "It should return 'boop' if the number contains a 2 in it" 
Code: beepBoop(5);
Expected Output: [0,"beep", "boop", "won't you be my neighbor?", 4, 5]

Test 10 "It should return 'beep?' if the number contains a 1 in it" 
Code: beepBoop(5);
Expected Output: [0,"beep", "boop", "won't you be my neighbor?", 4, 5]

```