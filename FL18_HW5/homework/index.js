function isEquals(a, b) {
    return a === b;
}

function isBigger(a, b) {
    return a > b;
}

function storeNames() {
    let names = [];
    for (let i = 0; i < arguments.length; i++) {
        names.push(arguments[i]);
    }
    return names;

}

function getDifference(a, b) {
    if (a > b) {
        return a - b;
    } else {
        return b - a;
    }
}

function negativeCount(array) {
    let negatives = [];
    for (let el of array) {
        if (el < 0) {
            negatives.push(el);
        }
    }
    return negatives.length;


}

function letterCount(word, letter) {
    let count = 0;
    for (let el of word) {
        if (el.includes(letter)) {
            count += 1;
        }
    }
    return count;
}
function countPoints(array) {
    let count = 0;
    for (let el of array) {
        let x = Number(el.split(':')[0]);
        let y = Number(el.split(':')[1]);
        if (x > y) {
            count += 3;
        } else if (x < y) {
            count += 0;
        } else {
            count += 1;
        }
    }
    return count;
}
