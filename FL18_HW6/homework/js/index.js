function visitLink(path) {
    let n = localStorage.getItem(path);
    if (n === null) {
        n = 1;
    } else {
        n++;
    }
    localStorage.setItem(path, n);
}


function viewResults() {
    let ul = '';

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        ul += `<li> You visited ${key} ${value} time(s)</li>`;

    }
    document.body.innerHTML += `<ul> ${ul} </ul>`;
    localStorage.clear();
}

console.log(localStorage);