/*

! Convert the Calendar program to use `select` elements instead of buttons
? Be sure to test for false dates and that code logic is in order
^ For now dont worry about repeating code, can always go back and update/clean up

*/

// GLOBAL DATA / VARIABLES
let calendarData = {

    years: 2100,
    months: 12,
    daysByMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

}


intialElms();

// CREATE HTML ELEMENTS
function intialElms() {

    // HEADING TO DISPLAY DATE INFO
    let dateDisplay = createHeading({ text: `No date selected`, id: `dateHead`, size: 1 });

    // CREATE SELECTS
    let yearSelect = createSelect({ id: `yearSelect`, class: `calendarSelects`, defOp: `Select A Year`, defOpID: `yearDef`, onChangeFunc: modifyData }),
        monthSelect = createSelect({ id: `monthSelect`, class: `calendarSelects`, defOp: `Select A Month`, defOpID: `monthDef`, onChangeFunc: modifyData }),
        daySelect = createSelect({ id: `daySelect`, class: `calendarSelects`, defOp: `Select A Day`, defOpID: `dayDef`, onChangeFunc: modifyData });

    document.body.appendChild(dateDisplay);
    document.body.appendChild(yearSelect);
    document.body.appendChild(monthSelect);
    document.body.appendChild(daySelect);

}

// FUNCTIONS TO UPDATE THE PROGRAM
function modifyData() {

    console.log(this);

}

//FUNCTIONS THAT CREATE HTML ELEMENTS
function createHeading(headingObj) {

    // size, text, id

    let heading = headingObj.size >= 1 && headingObj.size <= 5 ? document.createElement(`h` + headingObj.size) : document.createElement(`h5`);

    heading.innerHTML = (typeof headingObj.text == `string`) ? headingObj.text : `>> No text <<`;

    heading.id = headingObj.id != undefined && document.getElementById(headingObj.id) == null ? headingObj.id : `>> No ID <<`;

    return heading

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