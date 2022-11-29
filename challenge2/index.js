let p = document.querySelector('#speed');
let speed = prompt('Enter your speed');
//if else statement if speed is less than or equal to 70
if (speed <= 70) {
    p.innerHTML = 'OK';
}
// else if statement if speed is greater than or equal to 70 and points are greater than or equal to 12
else if (speed > 70) {
    let exceeded = speed - 70;
    let points = exceeded / 5;
    if (points >= 12) {
        p.innerHTML = 'License suspended';
    }else {
    p.innerHTML = 'Points: ' + points;
    }
}
