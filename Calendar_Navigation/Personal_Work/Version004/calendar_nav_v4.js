let dateRightNow = new Date();

let dateInfo = {

    year: dateRightNow.getFullYear(),
    month: dateRightNow.getMonth(),
    day: dateRightNow.getDate(),
    monthsArr: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
    daysByMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    storedDate: []

};

//FUNCTIONS THAT CREATE HTML ELEMENTS
function createDiv(divObj) {

    // id, class

    let div = document.createElement(`div`);

    div.id = divObj.id != undefined && document.getElementById(divObj.id) == null ? divObj.id : `>> No ID <<`;

    div.className = divObj.class != undefined ? divObj.class : ``;

    return div

};

function createHeading(headingObj) {

    // size, text, id

    let heading = headingObj.size >= 1 && headingObj.size <= 5 ? document.createElement('h' + headingObj.size) : document.createElement('h5');

    heading.innerText = (typeof headingObj.text == 'string') ? headingObj.text : 'no text';

    if (headingObj.id != undefined && document.getElementById(headingObj.id) == null) {

        heading.id = headingObj.id

    }

    return heading

}


function createButton(buttonObj) {

    // id, text, class, onClickFunc

    let button = document.createElement('button');

    if (buttonObj.id != undefined && document.getElementById(buttonObj.id) == null) {

        button.id = buttonObj.id

    }

    if (buttonObj.class != undefined) {

        button.className = buttonObj.class

    }

    if (buttonObj.onClickFunc != undefined) {

        button.onclick = buttonObj.onClickFunc;

    }

    if (buttonObj.text != undefined) {

        button.innerText = buttonObj.text

    }

    return button

}

function createSelect(selectObj) {

    // id, class, defOp, defOpID, data (used to create the options)

    let select = document.createElement(`select`);

    select.id = selectObj.id != undefined && document.getElementById(selectObj.id) == null ? selectObj.id : `>> No ID <<`;

    select.className = selectObj.class != undefined ? selectObj.class : ``;

    let defaultOp = document.createElement(`option`);

    defaultOp.innerHTML = selectObj.defOp != undefined ? selectObj.defOp : `Select an Option`;

    defaultOp.id = selectObj.defOpID != undefined && document.getElementById(selectObj.defOpID) == null ? selectObj.defOpID : ``;

    defaultOp.value = ``;

    select.appendChild(defaultOp);

    for (let a = 0; a < selectObj.data.length; a++) {

        let option = document.createElement(`option`);

        option.id = `${selectObj.data[a]}ID`;

        option.innerHTML = selectObj.data[a];

        option.value = selectObj.data[a];

        select.appendChild(option);

    }

    select.onchange = selectObj.onchange != undefined ? selectObj.onchange : ``;

    return select

};