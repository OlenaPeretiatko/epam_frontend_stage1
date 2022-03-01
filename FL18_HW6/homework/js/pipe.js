function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}


const pipe = (value, ...funcs) => {
    try {
        for (let i = 0; i < funcs.length; i++) {
            if (isFunction(funcs[i])) {
                value = funcs[i](value);
            } else {
                throw `Provided argument at position ${i} is not a function!`;
            }

        }
        return value;
    } catch (err) {
        return err;
    }
};


const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ');
const capitalize = (value) =>
    value
        .split(' ')
        .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
        .join(' ');
const appendGreeting = (value) => `Hello, ${value}!`;

