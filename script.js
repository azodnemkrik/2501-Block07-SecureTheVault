/*
Pseudocode:
1. Create a "vault" feel
2. Set up variables
3. Create a message that will be displayed to the user
4. Enhance the project by adding a little functionality vs. just displaying the message upon loading the page. I will add 2 buttons that will allow the user to either see the combination or opt out of the vault.
*/



// Declare the 3 codes for the combined combination
const codeNumber1 = (220 / 2) - 100; // 10
const codeNumber2 = (1 + 2 + 3 + 4) * 4; // 40 
const codeNumber3 = codeNumber2 - 1; // 39



// Declare the Combination to be used for output
const theCombination = `You have received this message because you have been chosen to open an important vault. Here is the secret combination:
 ${codeNumber1} - ${codeNumber2} - ${codeNumber3}`;



// YES Function - user accepted mission, output the Combination
function outputCombination() {
    alert(theCombination);
}



// NO Function - user declines mission, a message from our tactical lead
function optOut() {
    alert('You have opted out of the vault. Congratulations!\n\nYOU JUST SAVED YOUR LIFE! \n~Trust No One~ \n\n–Ethan');
}
