// GLOBAL VARIABLES
let dateRightNow = new Date();

let dateInfo = {

    year: dateRightNow.getFullYear(),
    month: dateRightNow.getMonth(),
    day: dateRightNow.getDate(),
    monthsArr: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
    daysByMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    storedDate: []

};

// being used to store the note data
let storedData = {};

// FUNCTION CALL(S)
intialElements()

// FUNCTIONS NEEDED
/* CREATE INITIAL ELEMENTS:
    [*]HEADING TO BODY, 
    [*]2 DIVS TO BODY, 
    [*]BUTTONS: CHANGE DATE, MAKE A NOTE, REVEAL NOTES
    [*]SELECTS: YEAR AND MONTH; THIS DATA WONT NEED CHANGING SO CREATE THEM HERE BUT DISPLAY BE SET TO NONE
    []BUTTONS TO FIRST DIV
    []SELECTS BE APPENDED
*/

function intialElements() {
    // date heading elmement
    let dateDisplay = createHeading({ id: `dateHead`, text: `${dateInfo.monthsArr[dateInfo.month]} ${dateInfo.day}, ${dateInfo.year}`, size: 1 });
    dateInfo.storedDate.unshift(`${dateInfo.monthsArr[dateInfo.month]} ${dateInfo.day}, ${dateInfo.year}<br>`);

    // create divs
    let interactive = createDiv({ id: `interactive` }),
        notesDisplay = createDiv({ id: `notesDisplay` });

    let changeDate = createButton({ id: `changeDateButton`, text: `Change Date`, class: `buttons`, onClickFunc: changeDateFunc }),
        makeNote = createButton({ id: `makeNoteButton`, text: `Make A Note`, class: `buttons`, onClickFunc: makeNoteFunc }),
        revealNotes = createButton({ id: `revealNotes`, text: `Show Notes`, class: `buttons`, onClickFunc: revealNotesFunc });

    // create year and month selects
    let startYear = 1920,
        endYear = 2020,
        yearsArr = [];

    while (startYear <= endYear) {
        yearsArr.unshift(startYear);
        startYear++;
    }
    //^ needed to get years for `yearSelect` data

    let yearSelect = createSelect({ id: `yearSelect`, class: `calSelects`, defOp: `Select A Year!`, data: yearsArr, onchange: selectYear }),
        monthSelect = createSelect({ id: `monthSelect`, class: `calSelects`, defOp: `Select A Month!`, data: dateInfo.monthsArr, onchange: selectMonth });

    document.body.appendChild(dateDisplay);
    document.body.appendChild(interactive);
    document.body.appendChild(notesDisplay);
    interactive.appendChild(changeDate);
    interactive.appendChild(yearSelect);
    yearSelect.style.display = `none`;
    interactive.appendChild(monthSelect);
    monthSelect.style.display = `none`;
    interactive.appendChild(makeNote);
    interactive.appendChild(revealNotes);


}

/* FUNCTIONS FOR BUTTONS ONCLICK:
    []CHANGE DATE: WILL USE THE SELECT ELEMENTS; HIDE OTHER BUTTONS UNTIL DATE IS SELECTED
    []MAKE A NOTE: WILL CREATE A POPUP PROMPT FOR THE USER, THE DATE AND NOTE WILL BE SAVED TOGETHER IN THE SECOND DIV
    []REVEAL NOTES: WILL WORK AS A TOGGLE TO SHOW OR HIDE THE NOTES SECTION; MAKE SCROLLABLE IN CSS ONCE DONE
*/

function changeDateFunc() {}

function makeNoteFunc() {}

function revealNotesFunc() {}

/* FUNCTIONS FOR SELECTS:
    MONTH, DAY, YEAR
        MAKE FUNCTIONS FOR REPEATED CODE
*/

function selectYear() {}

function selectMonth() {}

function selectDay() {}

// FUNCTIONS TO CREATE HTML ELEMENTS
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