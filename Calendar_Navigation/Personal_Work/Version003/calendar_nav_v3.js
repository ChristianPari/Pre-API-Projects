let dateRightNow = new Date();

let dateInfo = {

    year: dateRightNow.getFullYear(),
    month: dateRightNow.getMonth(),
    day: dateRightNow.getDate(),
    monthsArr: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
    daysByMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    storedDate: []

};

//FUNCTION CALLS
intialElems();

function intialElems() {
    // date heading elm
    let dateDisplay = createHeading({ id: `dateHead`, text: `${dateInfo.monthsArr[dateInfo.month]} ${dateInfo.day}, ${dateInfo.year}`, size: 1 });
    dateInfo.storedDate.unshift(`${dateInfo.monthsArr[dateInfo.month]} ${dateInfo.day}, ${dateInfo.year}<br>`);

    // create divs
    let userDiv = createDiv({ id: `userDiv` });

    // create a button
    let button = createButton({ id: `beginButton`, text: `Select A Date!`, onClickFunc: startSelect });

    // select elm 1920-2020
    let startYear = 1920,
        endYear = 2020,
        yearsArr = [];
    while (startYear <= endYear) {
        yearsArr.unshift(startYear);
        startYear++;
    }
    let yearSelect = createSelect({ id: `yearSelect`, class: `calSelects`, defOp: `Select A Year!`, data: yearsArr, onchange: selectYear });

    // select elm months Jan-Dec
    let monthSelect = createSelect({ id: `monthSelect`, class: `calSelects`, defOp: `Select A Month!`, data: dateInfo.monthsArr, onchange: selectMonth });

    document.body.appendChild(dateDisplay);
    document.body.appendChild(userDiv);
    userDiv.appendChild(button);
    userDiv.appendChild(yearSelect);
    yearSelect.style.display = `none`;
    userDiv.appendChild(monthSelect);
    monthSelect.style.display = `none`;

}

//FUNCTIONS FOR FRONT-END/BACK-END

// BUTTON FUNCTION
function startSelect() {

    if (document.getElementById(`dateHead`).style.display != `none`) {
        console.log(`1`);

        document.body.innerHTML = ``;
        console.log(`2`);

        intialElems();
        console.log(`3`);

        document.getElementById(`dateHead`).innerHTML = `${dateInfo.storedDate[0]}`;
        document.getElementById(`dateHead`).style.display = `initial`;

    }

    document.getElementById(`beginButton`).style.display = `none`;
    document.getElementById(`yearSelect`).style.display = `initial`;


};

// SELECT FUNCTIONS
function selectYear() {


    console.log(this.value);
    dateInfo.year = this.value;

    // this.value = ``;

    checkLeapYear(dateInfo.year);

    this.style.display = `none`;
    document.getElementById(`monthSelect`).style.display = `initial`;

};

function checkLeapYear(year) {

    if (year % 4 == 0 || (year % 100 != 0 && year % 400 == 0)) {

        dateInfo.daysByMonth[1] = 29;

    } else {

        dateInfo.daysByMonth[1] = 28;

    }

}

function selectMonth() {

    console.log(this.value);
    dateInfo.month = dateInfo.monthsArr.indexOf(this.value);

    this.style.display = `none`;

    let daysArr = [],
        startDay = 1,
        endDay = dateInfo.daysByMonth[dateInfo.month];
    while (startDay <= endDay) {
        daysArr.push(startDay);
        startDay++;
    }

    // CREATE DAY SELECT ELEMENT
    let daySelect = createSelect({ id: `daySelect`, class: `calSelects`, defOp: `Select A Day!`, data: daysArr, onchange: selectDay });

    document.getElementById(`userDiv`).appendChild(daySelect);

};

function selectDay() {

    console.log(this.value);
    dateInfo.day = this.value;

    this.style.display = `none`;

    // SHOW THE DATE HEADING ELEMENT AND HAVE IT BE UPDATED
    dateInfo.storedDate.unshift(`${dateInfo.monthsArr[dateInfo.month]} ${dateInfo.day}, ${dateInfo.year}`);
    document.getElementById(`dateHead`).innerHTML = `${dateInfo.monthsArr[dateInfo.month]} ${dateInfo.day}, ${dateInfo.year}<br>`;
    // document.getElementById(`dateHead`).style.display = `initial`;

    // RESHOW THE BUTTON ELEMENT
    document.getElementById(`beginButton`).style.display = `initial`;

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

    //! WILL NEED TP MODIFY FOR DIFFERENT PROGRAMS
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