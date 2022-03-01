function reverseNumber(num) {
    let startNum = num;
    num = Math.abs(num);
    let b, newNum = 0;
    while (num > 0) {
        b = num % 10;
        newNum = newNum * 10 + b;
        num = parseInt(num / 10);
    }
    if (startNum < 0) {
        return parseInt('-' + newNum);
    } else {
        return newNum;
    }
}

function forEach(arr, func) {
    for (let el of arr) {
        func(el);
    }
}

function map(arr, func) {
    let newArr = [];
    for (let el of arr) {
        newArr.push(func(el));
    }
    return newArr;
}


function filter(arr, func) {
    let newArr = [];
    for (let el of arr) {
        if (func(el) === true) {
            newArr.push(el);
        }
    }
    return newArr;
}

function getAdultAppleLovers(data) {
    let names = [];
    for (let el of data) {
        console.log(el.name, el.favoriteFruit);
        if (el.age > 18 && el.favoriteFruit === 'apple') {
            names.push(el.name);
        }
    }
    return names;
}


function getKeys(obj) {
    let newArr = [];
    for (let property in obj) {
        newArr.push(property)
    }
    return newArr;
}

function getValues(obj) {
    let newArr = [];
    for (let property in obj) {
        newArr.push(obj[property])
    }
    return newArr;

}

function showFormattedDate(dateObj) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    console.log('It is ' + dateObj.getDate() + ' of ' + months[dateObj.getMonth()] + ', ' + dateObj.getFullYear());
}

console.log(reverseNumber(12345)) // returns 54321
console.log(reverseNumber(-100)) // returns -98765

forEach([2, 5, 8], function (el) {
    console.log(el)
})// logs to console: 2 5 8

console.log(map([2, 5, 8], function (el) {
    return el + 3;
})) // returns [5, 8, 11]
console.log(map([1, 2, 3, 4, 5], function (el) {
    return el * 2;
})) // returns [2, 4, 6, 8, 10]

console.log(filter([2, 5, 1, 3, 8, 6], function (el) {
    return el > 3
}))// returns [5, 8, 6]
console.log(filter([1, 4, 6, 7, 8, 10], function (el) {
    return el % 2 === 0
})) //returns [4, 6, 8, 10]

console.log(getKeys({keyOne: 1, keyTwo: 2, keyThree: 3})) // returns [“keyOne”, “keyTwo”, “keyThree”]

console.log(getValues({keyOne: 1, keyTwo: 2, keyThree: 3})) // returns [1, 2, 3]

showFormattedDate(new Date('2018-08-27T01:10:00')) // returns ‘It is 27 of Aug, 2018’
// every month should be showed as 3 letters (e.g. Feb, Apr or Dec)
