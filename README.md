# _Mr. Roboger's Neighborhood_
#### By _**Mark McConnell**_
#### _A HTMl website using required JavaScript, jQuery and custom ccs. Requirements were outlined in Week 3 project_
## Technologies Used
* _HTML_
* _JavaScript_
* _jQuery_
* _CSS_
## Description
_This is an HTML application that takes a users input and shows the output after hitting the submit button. The user inputs a number and the website outputs a sentence with numbers altered depending if a one, two or three is in the number. The HTML application is created using parameters outlined in week three learning objectives_
## Setup/Installation Requirements
* _Fork this repository by clicking the fork button located near the top right-hand corner of your web brower_
* _Rename this repository to whatever suits your fancy. Open up the repository you just forked. Click settings and the first option will be available to rename it!_
* _Clone the repository to your computer. Right-click on your desktop and click git bash here and confirm you are in the desktop directory. use $ git clone https://github.com/amarkmcconn/Week-3-Project._
* _After cloning the repository to your desktop. It will appear on your desktop as a folder named Week_3_Project. Click on the folder and you will have access to the whole project folder._
* _After opening the Week-3-Project folder, it will contain all the files associated for this project._

## Known Bugs

* _Currently working to alter any numbers above ten_


## License

_MIT. Please contact via email: mark.programming1@gmail.com should you have any questions, comments, or concerns._

Copyright (c) _2022_ _Mark McConnell_




```javascript
Business Logic Testing
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

Test 6: "It should return the 2 as boop"
Code: beepBoop(5);
Expected Output: ["0,beep,boop, 3, 4, 5"]

Test 7: "It should return the 3 as Won't you be my neighbor?"
Code: beepBoop(5);
Expected Output: ["0, beep,boop, won't you be my neighbor?, 4, 5"]

// should I create a separate function to evaluate final string?
// it would take up too many lines to enter all the combos that need to replaced with the words below. forEach loop? 
Test 8 "It should return all the numbers that contain a 3 in it" 
Code: c
Expected Output: [0,3,13]

Test 9 "It should return 'boop' if the number contains a 2 in it" 
Code: beepBoop(3);
Expected Output: [0,"beep", "boop", "won't you be my neighbor?", 4, 5]

Test 10 "It should return 'beep?' if the number contains a 1 in it" 
Code: beepBoop(11);
Expected Output: [0,"beep", "boop", "won't you be my neighbor?", 4, 5]

```