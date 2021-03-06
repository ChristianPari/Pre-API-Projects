// GLOBAL letIABLES
let dateRightNow = new Date();

let dateInfo = {

    year: dateRightNow.getFullYear(),
    month: dateRightNow.getMonth(),
    day: dateRightNow.getDate(),
    monthsArr: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
    daysByMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

    // VARIABLE FOR STORING THE `DATE AND DATE NOTE` AS KEY/VALUE PAIR
    storedData: {}

};

// FUNCTION CALL(S)
intialElements()

// FUNCTIONS NEEDED
/* CREATE INITIAL ELEMENTS:
    [*]HEADING TO BODY, 
    [*]2 DIVS TO BODY, 
    [*]BUTTONS: CHANGE DATE, MAKE A NOTE, SHOW NOTES, HIDE NOTES
    [*]SELECTS: YEAR AND MONTH; THIS DATA WONT NEED CHANGING SO CREATE THEM HERE BUT DISPLAY BE SET TO NONE
    [*]BUTTONS TO FIRST DIV
    [*]SELECTS BE APPENDED
*/

function intialElements() {

    // CREATE DATE HEADING ELEMENT
    let dateDisplay = createHeading({ id: `dateHead`, text: `${dateInfo.monthsArr[dateInfo.month]} ${dateInfo.day}, ${dateInfo.year}`, size: 1 });

    // CREATE DIVS
    let mainDiv = createDiv({ id: `mainDiv` }),
        interactive = createDiv({ id: `interactive` }),
        notesMainDiv = createDiv({ id: `notesMainDiv` }),
        notesDisplay = createDiv({ id: `notesDisplay` });

    let changeDate = createButton({ id: `changeDateButton`, text: `Change Date`, class: `buttons`, onClickFunc: changeDateFunc }),
        makeNote = createButton({ id: `makeNoteButton`, text: `Make A Note`, class: `buttons`, onClickFunc: makeNoteFunc }),
        revealNotes = createButton({ id: `revealNotesButton`, text: `Show Notes`, class: `buttons`, onClickFunc: revealNotesFunc }),
        hideNotes = createButton({ id: `hideNotesButton`, text: `Hide Notes`, class: `buttons`, onClickFunc: hideNotesFunc });

    // CREATE YEAR AND MONTHS SELECTS
    // CREATE A LOOP TO GET `YEAR` SELECT DATA
    let startYear = 1920,
        endYear = 2030,
        yearsArr = [];

    while (startYear <= endYear) {
        yearsArr.unshift(startYear);
        startYear++;
    }

    let yearSelect = createSelect({ id: `yearSelect`, class: `calSelects`, defOp: `Select A Year!`, data: yearsArr, onchange: selectYear }),
        monthSelect = createSelect({ id: `monthSelect`, class: `calSelects`, defOp: `Select A Month!`, data: dateInfo.monthsArr, onchange: selectMonth });

    document.body.appendChild(mainDiv);
    mainDiv.appendChild(dateDisplay);
    mainDiv.appendChild(interactive);
    mainDiv.appendChild(notesMainDiv);
    notesMainDiv.appendChild(notesDisplay);
    notesDisplay.style.opacity = `0`;
    interactive.appendChild(changeDate);
    interactive.appendChild(yearSelect);
    yearSelect.style.display = `none`;
    interactive.appendChild(monthSelect);
    monthSelect.style.display = `none`;
    interactive.appendChild(makeNote);
    interactive.appendChild(revealNotes);
    interactive.appendChild(hideNotes);
    hideNotes.style.display = `none`;
    mainDiv.style.height = `100px`;


}

/* FUNCTIONS FOR BUTTONS ONCLICK:
    [*]CHANGE DATE: WILL USE THE SELECT ELEMENTS; HIDE OTHER BUTTONS UNTIL DATE IS SELECTED
    []MAKE A NOTE: WILL CREATE A POPUP PROMPT FOR THE USER, THE DATE AND NOTE WILL BE SAVED TOGETHER IN THE SECOND DIV
    []REVEAL NOTES: WILL WORK AS A TOGGLE TO SHOW OR HIDE THE NOTES SECTION; MAKE SCROLLABLE IN CSS ONCE DONE
*/

function changeDateFunc() {

    document.getElementById(`changeDateButton`).style.display = `none`;
    document.getElementById(`makeNoteButton`).style.display = `none`;
    document.getElementById(`revealNotesButton`).style.display = `none`;
    document.getElementById(`hideNotesButton`).style.display = `none`;
    document.getElementById(`yearSelect`).style.display = `initial`;
    document.getElementById(`yearSelect`).value = ``;

}

function makeNoteFunc() {

    let currentDate = document.getElementById(`dateHead`).innerText;

    if (dateInfo.storedData[currentDate] == null) {
        // CREATES THIS IF THE DATE KEY DOESNT EXIST YET

        let note = prompt(`Create a note!`);
        dateInfo.storedData[`${currentDate}`] = note;

        let dates = Object.keys(dateInfo.storedData);
        // console.log(dates);

        let idx = dates.indexOf(currentDate);

        let noteDiv = createDiv({ id: currentDate, class: `noteDivs` }),
            noteDate = createHeading({ id: `noteDate`, class: `noteDates`, text: `${dates[idx]}`, size: 3 }),
            noteText = createParagraph({ text: `- ${dateInfo.storedData[`${currentDate}`]}` });
        noteDiv.appendChild(noteDate);
        noteDiv.appendChild(noteText);

        document.getElementById(`notesDisplay`).appendChild(noteDiv);

    } else {
        // CREATES THIS IF THE DATE KEY DOES EXIST

        let note = prompt(`Create a note!`),
            prevNote = dateInfo.storedData[`${currentDate}`],
            newNote = `${prevNote}<br>- ${note}`;
        dateInfo.storedData[`${currentDate}`] = newNote;

        let dates = Object.keys(dateInfo.storedData);
        // console.log(dates);

        let idx = dates.indexOf(currentDate);

        let div = document.getElementById(`${currentDate}`);
        div.parentNode.removeChild(div);

        let noteDiv = createDiv({ id: currentDate, class: `noteDivs` }),
            noteDate = createHeading({ id: `noteDate`, class: `noteDates`, text: `${dates[idx]}`, size: 3 }),
            noteText = createParagraph({text: `- ${dateInfo.storedData[`${currentDate}`]}`});
        noteDiv.appendChild(noteDate);
        noteDiv.appendChild(noteText);

        document.getElementById(`notesDisplay`).appendChild(noteDiv);

    }

}

function revealNotesFunc() {

    document.getElementById(`revealNotesButton`).style.display = `none`;
    document.getElementById(`hideNotesButton`).style.display = `initial`;
    document.getElementById(`mainDiv`).style.height = `300px`;
    document.getElementById(`mainDiv`).style.transition = `0.5s`;
    document.getElementById(`notesDisplay`).style.transition = `opacity 0.5s`;
    document.getElementById(`notesDisplay`).style.opacity = `1`;
    document.getElementById(`notesDisplay`).style.transitionDelay = `0.25s`;
    
}

function hideNotesFunc() {

    document.getElementById(`revealNotesButton`).style.display = `initial`;
    document.getElementById(`hideNotesButton`).style.display = `none`;
    document.getElementById(`mainDiv`).style.height = `100px`;
    document.getElementById(`mainDiv`).style.transition = `0.5s`;
    document.getElementById(`notesDisplay`).style.transition = `opacity 0.1s`;
    document.getElementById(`notesDisplay`).style.opacity = `0`;

}

/* FUNCTIONS FOR SELECTS:
    [*]CHECK FOR LEAP YEAR
    [*]MONTH, [*]DAY, [*]YEAR
        MAKE FUNCTIONS FOR REPEATED CODE (IF ANY)
*/

function checkLeapYear(year) {

    if (year % 4 == 0 || (year % 100 != 0 && year % 400 == 0)) {

        dateInfo.daysByMonth[1] = 29;

    } else {

        dateInfo.daysByMonth[1] = 28;

    }

}

function selectYear() {

    dateInfo.year = this.value;

    if (dateInfo.year == ``) {
        return
    } else {
        
        checkLeapYear(dateInfo.year);
        
        this.style.display = `none`;
        document.getElementById(`monthSelect`).style.display = `initial`;
        document.getElementById(`monthSelect`).value = ``;
        
    }

}

function selectMonth() {

    dateInfo.month = dateInfo.monthsArr.indexOf(this.value);

    if (this.value == ``) {
        return
    } else {
        
        this.style.display = `none`;
        
        // CREATE A LOOP TO GET `DAYS` DATA
        let daysArr = [],
        startDay = 1,
        endDay = dateInfo.daysByMonth[dateInfo.month];
        while (startDay <= endDay) {
            daysArr.push(startDay);
            startDay++;
        }
        
        // CREATE DAY SELECT ELEMENT
        let daySelect = createSelect({ id: `daySelect`, class: `calSelects`, defOp: `Select A Day!`, data: daysArr, onchange: selectDay });
        
        document.getElementById(`interactive`).appendChild(daySelect);
        
    }
        
}

function selectDay() {

    dateInfo.day = this.value;

    if (this.value == ``) {
        return
    } else {

        this.style.display = `none`;

        document.getElementById(`changeDateButton`).style.display = `initial`;
        document.getElementById(`makeNoteButton`).style.display = `initial`;
        document.getElementById(`revealNotesButton`).style.display = `initial`;

        if (document.getElementById(`dateHead`) != null) {

            let oldDate = document.getElementById(`dateHead`),
                parentDiv = oldDate.parentNode,
                newDate = createHeading({ text: `${dateInfo.monthsArr[dateInfo.month]} ${dateInfo.day}, ${dateInfo.year}`, size: 1 });
            parentDiv.replaceChild(newDate, oldDate);
            newDate.id = `dateHead`;

        }

    }   

}

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

    heading.className = headingObj.class != undefined ? headingObj.class : ``;

    return heading

}

function createParagraph(paraObj) {

    // text

    let paragraph = document.createElement(`p`);

    paragraph.innerHTML = paraObj.text != undefined ? paraObj.text : `>> No Text <<`;

    return paragraph

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