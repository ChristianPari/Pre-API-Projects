/*

! Convert the Calendar program to use `select` elements instead of buttons
? Be sure to test for false dates and that code logic is in order
^ For now dont worry about repeating code, can always go back and update/clean up

*/

// GLOBAL DATA / VARIABLES
let calendarData = {

    years: 2020,
    months: 12,
    monthsObj: [{ 1: 31 }, { 2: 28 }, { 3: 31 }, { 4: 30 }, { 5: 31 }, { 6: 30 }, { 7: 31 }, { 8: 31 }, { 9: 30 }, { 10: 31 }, { 11: 30 }, { 12: 31 }],
    dateDisplay: []
        //^ USED TO DISPLAY THE DATE ONCE THE USER HAS SELECTED YEAR MONTH AND DAY; FORMAT: DD/MM/YYYY

}

// FUNCTION CALLS TO DISPLAY
intialElms();

// CREATE HTML ELEMENTS
function intialElms() {

    if (document.getElementById(`restartButton`) == null) {

        // HEADING TO DISPLAY DATE INFO
        let dateDisplay = createHeading({ text: `No date selected`, id: `dateHead`, size: 1 });
        dateDisplay.style.display = `none`;
        //^ SETTING DISPLAY TO NONE SO AND WILL MAKE IT REAPPEAR ONCE PROGRAM IS FINISHED RUNNING; WILL DISPLAY DATE

        // CREATE BUTTON
        let beginButton = createButton({ id: `beginButton`, text: `Click to select a date!`, onClickFunc: showSelects });

        document.body.appendChild(dateDisplay);
        document.body.appendChild(beginButton);

    } else {

        document.body.innerHTML = ``;

        // HEADING TO DISPLAY DATE INFO
        let dateDisplay = createHeading({ text: `No date selected`, id: `dateHead`, size: 1 });
        dateDisplay.style.display = `none`;

        // CREATE BUTTON
        let beginButton = createButton({ id: `beginButton`, text: `Click to select a date!`, onClickFunc: showSelects });

        document.body.appendChild(dateDisplay);
        document.body.appendChild(beginButton);

    }


}

// FUNCTIONS TO UPDATE THE PROGRAM
function dateDisplay() {

    let string = `${calendarData.dateDisplay[2]}/${calendarData.dateDisplay[1]}/${calendarData.dateDisplay[0]}`;
    return string

}

function showSelects() {

    let yearSelect = createSelect({ id: `yearSelect`, class: `calendarSelects`, defOp: `Select A Year`, defOpID: `yearDef`, onChangeFunc: modifyData });
    document.body.appendChild(yearSelect);
    yearSelectOptions();
    document.getElementById(`beginButton`).style.display = `none`;

}

function yearSelectOptions() {

    let a = calendarData.years;
    while (a >= 1920) {

        let option = document.createElement(`option`);

        option.id = `Year${a}ID`;

        option.innerHTML = a;

        option.value = a;

        document.getElementById(`yearSelect`).appendChild(option);

        a--;

    }

}

function monthSelectOptionsByNum(year) {

    if (year % 4 == 0 || (year % 100 != 0 && year % 400 == 0)) {

        calendarData.monthsObj[1][2] = 29;
        console.log(`leap`);


    } else {

        calendarData.monthsObj[1][2] = 28;
        console.log(`not leap`);


    }

    let a = 1;
    while (a <= calendarData.months) {

        let option = document.createElement(`option`);

        option.id = `Month${a}ID`;

        option.innerHTML = a;

        option.value = Object.keys(calendarData.monthsObj[a - 1])[0];

        document.getElementById(`monthSelect`).appendChild(option);

        a++;

    }

}

function daysSelectOptions(month) {

    let daysInMonth = calendarData.monthsObj[month - 1][month];
    console.log(daysInMonth);

    let a = 1;
    while (a <= daysInMonth) {

        let option = document.createElement(`option`);

        option.id = `Day${a}ID`;

        option.innerHTML = a;

        option.value = a;

        document.getElementById(`daySelect`).appendChild(option);

        a++;

    }

}

function modifyData() {

    console.log(this.id);

    let data = this;

    if (data.id == `yearSelect`) {

        let monthSelect = createSelect({ id: `monthSelect`, class: `calendarSelects`, defOp: `Select A Month`, defOpID: `monthDef`, onChangeFunc: modifyData });

        document.body.appendChild(monthSelect);
        monthSelectOptionsByNum(data.value);
        document.getElementById(`yearSelect`).style.display = `none`;
        calendarData.dateDisplay.push(data.value);
        console.log(calendarData.dateDisplay);

    } else if (data.id == `monthSelect`) {

        let daySelect = createSelect({ id: `daySelect`, class: `calendarSelects`, defOp: `Select A Day`, defOpID: `dayDef`, onChangeFunc: modifyData });

        document.body.appendChild(daySelect);
        let month = data.value;
        daysSelectOptions(month);
        document.getElementById(`monthSelect`).style.display = `none`;
        if (data.value < 10) {
            let newVal = `0${data.value}`;
            calendarData.dateDisplay.push(newVal);
            console.log(calendarData.dateDisplay);
        } else {
            calendarData.dateDisplay.push(data.value);
            console.log(calendarData.dateDisplay);
        }

    } else if (data.id == `daySelect`) {

        let restartButton = createButton({ id: `restartButton`, text: `Click to select a new date!`, onClickFunc: intialElms });
        if (data.value < 10) {
            let newVal = `0${data.value}`;
            calendarData.dateDisplay.push(newVal);
            console.log(calendarData.dateDisplay);
        } else {
            calendarData.dateDisplay.push(data.value);
            console.log(calendarData.dateDisplay);
        }

        document.getElementById(`dateHead`).innerHTML = dateDisplay();
        document.getElementById(`daySelect`).style.display = `none`;
        document.body.appendChild(restartButton);
        document.getElementById(`dateHead`).style.display = `initial`;

    }

}

//FUNCTIONS THAT CREATE HTML ELEMENTS
function createHeading(headingObj) {

    // size, text, id

    let heading = headingObj.size >= 1 && headingObj.size <= 5 ? document.createElement(`h` + headingObj.size) : document.createElement(`h5`);

    heading.innerHTML = (typeof headingObj.text == `string`) ? headingObj.text : `>> No text <<`;

    heading.id = headingObj.id != undefined && document.getElementById(headingObj.id) == null ? headingObj.id : `>> No ID <<`;

    return heading

};

function createButton(buttonObj) {

    // id, class, text, onClickFunc

    let button = document.createElement(`button`);

    button.id = buttonObj.id != undefined && document.getElementById(buttonObj.id) == null ? buttonObj.id : `>> No ID <<`;

    button.className = buttonObj.class != undefined ? buttonObj.class : ``;

    button.innerHTML = typeof buttonObj.text == `string` ? buttonObj.text : `>> No Text <<`;

    button.onclick = buttonObj.onClickFunc != undefined && typeof buttonObj.onClickFunc == `function` ? buttonObj.onClickFunc : `>> No function <<`;

    return button

};

function createSelect(selectObj) {


    // id, class, defOp, defOpID, onChangeFunc

    let select = document.createElement(`select`);

    select.id = selectObj.id != undefined && document.getElementById(selectObj.id) == null ? selectObj.id : `>> No ID <<`;

    select.className = selectObj.class != undefined ? selectObj.class : ``;

    let defaultOp = document.createElement(`option`);

    defaultOp.innerHTML = selectObj.defOp != undefined ? selectObj.defOp : `Select an Option`;

    defaultOp.id = selectObj.defOpID != undefined && document.getElementById(selectObj.defOpID) == null ? selectObj.defOpID : `>> No ID <<`;

    defaultOp.value = ``;

    select.appendChild(defaultOp);

    // CREATING THE OPTIONS FOR EACH SELECT ELEMENT

    select.onchange = selectObj.onChangeFunc != undefined ? selectObj.onChangeFunc : ``;

    return select

};