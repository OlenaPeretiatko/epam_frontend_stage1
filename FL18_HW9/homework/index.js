/* START TASK 1: Your code goes here */

let all = [];
let clicked = [];
for (let i = 0; i < 9; i++) {
    all.push(i);
}


let cell = document.getElementsByTagName('td');
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', function () {
        if (clicked.includes(i) === false) {
            clicked.push(i);
        }
        if (i === 5) {
            cell[5].style.backgroundColor = 'green';
            let notClicked = all.filter(x => !clicked.includes(x));
            for (let el of notClicked) {
                cell[el].style.backgroundColor = 'green';
            }
        } else if (i % 3 === 0) {
            let n = i + 3;
            for (i; i < n; i++) {
                if (cell[i].style.backgroundColor !== 'yellow') {
                    cell[i].style.backgroundColor = 'blue';
                }
            }
        } else {
            cell[i].style.backgroundColor = 'yellow';
        }
    })
}

/* END TASK 1 */


/* START TASK 2: Your code goes here */

document.getElementById('phone').addEventListener('input', function () {
    let phone = document.getElementById('phone');
    if (phone.checkValidity() === true) {
        document.getElementById('dataRes').style.backgroundColor = null;
        document.getElementById('dataRes').innerHTML = '';
        document.getElementById('myBtn').disabled = false;
    } else {
        document.getElementById('dataRes').innerHTML = "Type number doesn't follow format <br>" +
            '+380*********';
        document.getElementById('dataRes').style.backgroundColor = '#ff8080';
        document.getElementById('myBtn').disabled = true;
    }
});

function checkData() {
    document.getElementById('dataRes').innerHTML = 'Data was successfully sent';
    document.getElementById('dataRes').style.backgroundColor = 'green';
    document.getElementById('phone').style.border = '1px solid black';
    document.getElementById('myBtn').disabled = false;

}

/* END TASK 2 */


/* START TASK 3: Your code goes here */

let scoreA = 0;
let scoreB = 0;
let court = document.getElementById('court');


court.addEventListener('click', function (e) {
    let left = document.getElementById('court').getBoundingClientRect().left;
    let right = document.getElementById('court').getBoundingClientRect().right;
    let top_ = window.scrollY + document.getElementById('court').getBoundingClientRect().top + 5;
    let bottom = top_ + 317;

    let startX = (right + left) / 2;
    let startY = (top_ + bottom) / 2;
    let ball = document.getElementById('ball');
    let x = e.pageX;
    let y = e.pageY;

    if (x > left && x < right && y > top_ && y < bottom) {
        ball.style.position = 'absolute';
        ball.style.right = startX - x + 'px';
        ball.style.bottom = startY - y + 'px';
    }
    if (x > left + 25 && x < left + 40 && y > startY - 8 && y < startY + 8) {
        scoreB += 1;
        document.getElementById('score-right').innerHTML = `Team B: ${scoreB}`;
        document.getElementById('score').innerHTML = 'Team B score!';
        document.getElementById('score').style.color = 'red';
    }
    if (x < right - 25 && x > right - 40 && y > startY - 8 && y < startY + 8) {
        scoreA += 1;
        document.getElementById('score-left').innerHTML = `Team A: ${scoreA}`;
        document.getElementById('score').innerHTML = 'Team A score!';
        document.getElementById('score').style.color = 'blue';
    }
    setTimeout(function () {
        document.getElementById('score').innerHTML = ' ';
    }, 3000);

});

/* END TASK 3 */
