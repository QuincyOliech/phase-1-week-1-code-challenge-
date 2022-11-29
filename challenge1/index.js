//declaring the function
//linking the function to the button
let p = document.querySelector('#grade');
let marks = prompt('Enter your marks');
// if else statement if marks are greater than or equal to 80
if (marks >= 80) {
    p.innerHTML = 'A';
}
// else if statement if marks are greater than or equal to 70
else if (marks >= 70) {
    p.innerHTML = 'B';
}
// else if statement if marks are greater than or equal to 60
else if (marks >= 60) {
    p.innerHTML = 'C';
}
// else if statement if marks are greater than or equal to 50
else if (marks >= 50) {
    p.innerHTML = 'D';
}
// else if statement if marks are greater than or equal to 40
else if (marks >= 40) {
    p.innerHTML = 'E';
} 