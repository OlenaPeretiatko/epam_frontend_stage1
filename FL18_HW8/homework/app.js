const appRoot = document.getElementById('app-root');

function setAttributes(el, options) {
    Object.keys(options).forEach(function (attr) {
        el.setAttribute(attr, options[attr]);
    })
}

const h1 = document.createElement('h1');
h1.innerHTML = 'Countries Search';
appRoot.append(h1);


const p1 = document.createElement('p');
p1.setAttribute('id', 'typeOfSearch');
p1.innerHTML = 'Please, choose type of search:';
appRoot.append(p1);

const inputRegion = document.createElement('input');
const labelRegion = document.createElement('label');
const div1 = document.createElement('div');
setAttributes(inputRegion, {
    'type': 'radio',
    'id': 'region',
    'name': 'option',
    'value': 'region'
})
setAttributes(labelRegion, {
    'for': 'region'
})
labelRegion.innerHTML = 'By Region';
div1.append(inputRegion, labelRegion);

const inputLanguage = document.createElement('input');
const labelLanguage = document.createElement('label');
const div2 = document.createElement('div');
setAttributes(inputLanguage, {
    'type': 'radio',
    'id': 'language',
    'name': 'option',
    'value': 'language'
})
setAttributes(labelLanguage, {
    'for': 'language'
})
labelLanguage.innerHTML = 'By Language';
div2.append(inputLanguage, labelLanguage);

const form = document.createElement('form');
form.append(div1, div2);
appRoot.append(form);

const p2 = document.createElement('p');
p2.setAttribute('id', 'searchQuery');
p2.innerHTML = 'Please, choose search query:';
appRoot.append(p2);

document.getElementById('region').addEventListener('click', both);
document.getElementById('language').addEventListener('click', both);

const select = document.createElement('select');
select.setAttribute('id', 'selector')
const optionDef = document.createElement('option');
optionDef.innerHTML = 'Select value';
optionDef.value = 'default';
select.append(optionDef);
const p3 = document.createElement('p');
p3.setAttribute('id', 'default')
appRoot.append(select);
appRoot.append(p3);


const divMain = document.createElement('div');
divMain.setAttribute('id', 'mainContent');
const table = document.createElement('table');
table.setAttribute('id', 'js-sort-table')
let th = document.createElement('th');
const tr = document.createElement('tr');
let tr1 = document.createElement('tr');
let tbody = document.createElement('tbody');


let tableHeaders = ['Country name <i id="country" class="arrow">&#8597;</i>',
    'Capital', 'World Region', 'Languages', 'Area <i id="area" class="arrow">&#8597;</i>', 'Flag'];

p3.innerHTML = 'No items, please choose search query';

function both() {
    p3.innerHTML = 'No items, please choose search query';
    let getRegionsList, getCountryList, val;
    val = this.value;
    if (val === 'region') {
        getRegionsList = externalService.getRegionsList();
    } else if (val === 'language') {
        getRegionsList = externalService.getLanguagesList();
    }
    table.style.visibility = 'hidden';
    select.innerHTML = ' ';
    select.append(optionDef);
    for (let el of getRegionsList) {
        const option = document.createElement('option');
        option.value = el;
        option.innerHTML = el;
        select.append(option);
    }
    let i = 0;
    document.getElementById('selector').addEventListener('change', function change() {
        table.style.visibility = 'visible';
        let regionOrLanguage = this.value;
        if (this.value === 'default') {
            p3.innerHTML = 'No items, please choose search query';
        } else {
            optionDef.style.display = 'none';
            p3.innerHTML = null;
            tr.innerHTML = ' ';
            for (let el of tableHeaders) {
                th = document.createElement('th');
                th.innerHTML = el;
                th.setAttribute('onclick', `sortTable(${i})`);
                tr.append(th);
                i++;
            }
            tbody.innerHTML = ' ';
            if (val === 'region') {
                getCountryList = externalService.getCountryListByRegion(regionOrLanguage);
            } else if (val === 'language') {
                getCountryList = externalService.getCountryListByLanguage(regionOrLanguage);
            }

            for (let el of getCountryList) {
                tr1 = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                const td3 = document.createElement('td');
                const td4 = document.createElement('td');
                const td5 = document.createElement('td');
                const td6 = document.createElement('td');
                td1.innerHTML = el.name;
                td2.innerHTML = el.capital;
                td3.innerHTML = el.region;
                let lang = Object.values(el.languages);
                td4.innerHTML = lang.join(', ');
                td5.innerHTML = el.area;
                td6.innerHTML = `<img src="${el.flagURL}">`;
                tr1.append(td1, td2, td3, td4, td5, td6);
                tbody.append(tr1);
                table.append(tbody);
            }
        }

    })
}

appRoot.append(select);
table.append(tr);
divMain.append(table);
appRoot.append(divMain);

function sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById('js-sort-table');
    switching = true;
    dir = 'asc';
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName('TD')[n];
            y = rows[i + 1].getElementsByTagName('TD')[n];
            if (dir === 'asc') {
                if (!isNaN(parseInt(x.innerHTML))) {
                    document.getElementById('area').innerHTML = '&#8593;';
                    document.getElementById('country').innerHTML = '&#8597;';
                    if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    document.getElementById('country').innerHTML = '&#8593;';
                    document.getElementById('area').innerHTML = '&#8597;';
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else if (dir === 'desc') {
                if (!isNaN(parseInt(x.innerHTML))) {
                    document.getElementById('area').innerHTML = '&#8595;';
                    console.log('number')
                    if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    document.getElementById('country').innerHTML = '&#8595;';
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount === 0 && dir === 'asc') {
                dir = 'desc';
                switching = true;
            }
        }
    }
}