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

    let nextDay = createButton({ id: 'nextDay', class: 'dateBtns', text: 'Day >', onClickFunc: modifyDate }),
        prevDay = createButton({ id: 'prevDay', class: 'dateBtns', text: '< Day', onClickFunc: modifyDate }),
        nextMonth = createButton({ id: 'nextMonth', class: 'dateBtns', text: 'Month >', onClickFunc: modifyDate }),
        prevMonth = createButton({ id: 'prevMonth', class: 'dateBtns', text: '< Month', onClickFunc: modifyDate }),
        nextYear = createButton({ id: 'nextYear', class: 'dateBtns', text: 'Year >', onClickFunc: modifyDate }),
        prevYear = createButton({ id: 'prevYear', class: 'dateBtns', text: '< Year', onClickFunc: modifyDate }),
        cancel = createButton({ id: `cancelButton`, text: `X`, onClickFunc: cancelMethod }),
        yearSelect = createSelect({ id: `yearSelect`, class: `calSelects`, defOp: `Select Year`, data: yearsArr, onchange: selectYear }),
        monthSelect = createSelect({ id: `monthSelect`, class: `calSelects`, defOp: `Select Month`, data: dateInfo.monthsArr, onchange: selectMonth });

    document.body.appendChild(mainDiv);
    mainDiv.appendChild(dateDisplay);
    mainDiv.appendChild(interactive);
    mainDiv.appendChild(notesMainDiv);
    notesMainDiv.appendChild(notesDisplay);
    interactive.appendChild(changeDate);
    interactive.appendChild(yearSelect);
    interactive.appendChild(prevMonth);
    interactive.appendChild(nextMonth);
    interactive.appendChild(prevDay);
    interactive.appendChild(nextDay);
    interactive.appendChild(prevYear);
    interactive.appendChild(nextYear);
    interactive.appendChild(cancel);
    interactive.appendChild(monthSelect);
    interactive.appendChild(makeNote);
    interactive.appendChild(revealNotes);
    interactive.appendChild(hideNotes);
    mainDiv.style.height = `110px`;
    nextMonth.style.display = `none`;
    prevMonth.style.display = `none`;
    nextDay.style.display = `none`;
    prevDay.style.display = `none`;
    nextYear.style.display = `none`;
    prevYear.style.display = `none`;
    cancel.style.display = `none`;
    yearSelect.style.display = `none`;
    monthSelect.style.display = `none`;
    hideNotes.style.display = `none`;



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
    document.getElementById(`nextMonth`).style.display = `initial`;
    document.getElementById(`prevMonth`).style.display = `initial`;
    document.getElementById(`nextDay`).style.display = `initial`;
    document.getElementById(`prevDay`).style.display = `initial`;
    document.getElementById(`nextYear`).style.display = `initial`;
    document.getElementById(`prevYear`).style.display = `initial`;
    document.getElementById(`cancelButton`).style.display = `initial`;
    document.getElementById(`yearSelect`).style.display = `initial`;
    document.getElementById(`yearSelect`).value = ``;

}

function modifyDate() {

    let id = this.id,
        curDay = dateInfo.day,
        curMonth = dateInfo.month,
        curYear = dateInfo.year;

    checkLeapYear(curYear);

    // preform a change on dateInfo based on the button pressed
    // creating functions for each specific case
    switch (id) {
        case `nextDay`:

            nextDay(curDay, curMonth);

            break;

        case `prevDay`:
            prevDay(curDay, curMonth);

            break;

        case `nextMonth`:

            nextMonth(curMonth);

            break;

        case `prevMonth`:

            prevMonth(curMonth);

            break;

        case `nextYear`:

            nextYear(curYear);
            // added the function call below to make Febuarys day length change accordingly
            checkLeapYear(curYear + 1);

            break;

        case `prevYear`:

            prevYear(curYear);
            // added the function call below to make Febuarys day length change accordingly
            checkLeapYear(curYear - 1);

            break;

    }

    // checking for impossible dates
    if (dateInfo.day > dateInfo.daysByMonth[dateInfo.month]) {

        dateInfo.day = dateInfo.daysByMonth[dateInfo.month];

    }

    if (dateInfo.year <= 1) {

        dateInfo.year = 1;

    }

    // UPDATE THE FRONT-END
    let oldDate = document.getElementById(`dateHead`),
        parentDiv = oldDate.parentNode,
        newDate = createHeading({ text: `${dateInfo.monthsArr[dateInfo.month]} ${dateInfo.day}, ${dateInfo.year}`, size: 1 });
    parentDiv.replaceChild(newDate, oldDate);
    newDate.id = `dateHead`;


}

// SWITCH FUNCTIONS
function nextDay(curDay, curMonth) {
    // check for:
    //? what month are we in? 
    //? what is the last day of the month? 
    //? are we on the last day of the month? if so, continue on to the next month
    //? is it december? b/c then we have to continue into the next year
    //? if not on last day then continue increasing through the month

    // need to minus 1 to account for the index of the months not starting at 1 but instead starting at 0; Jan = 0 not 1
    if (curDay < dateInfo.daysByMonth[curMonth]) {

        dateInfo.day++

    } else if (curDay == dateInfo.daysByMonth[curMonth] && curMonth != 11) { // at end of the month, but not the end of the year)

        dateInfo.day = 1;
        dateInfo.month++;

    } else if (curDay == dateInfo.daysByMonth[curMonth] && curMonth == 11) { // at end of the month of december/ end of year

        dateInfo.day = 1;
        dateInfo.month = 1;
        dateInfo.year++;

    } else {

        console.log(`Something went wrong, check code`);

    }

}

function prevDay(curDay, curMonth) {
    // check for:
    //? what month are we in?
    //? are we on the first day of the month? if so, continue on to the next month
    //? is it january? b/c then we have to continue into the previous year
    //? if not on last day then continue decreasing through the month

    if (curDay > 1) {

        dateInfo.day--;

    } else if (curDay == 1 && curMonth != 0) { // at beginning of the month, but not the end of the year)

        dateInfo.day = dateInfo.daysByMonth[curMonth - 1];
        dateInfo.month--;

    } else if (curDay == 1 && curMonth == 0) { // at beginning of the month of december/ end of year

        dateInfo.day = 31;
        dateInfo.month = 12;
        dateInfo.year--;

    } else {

        console.log(`Something went wrong, check code`);

    }

}

function nextMonth(curMonth) {
    // check for:
    //? is it deecember?
    //? otherwise just continue through

    if (curMonth < 11) {

        dateInfo.month++;

    } else if (curMonth == 11) {

        dateInfo.month = 1;
        dateInfo.year++;

    } else {

        console.log(`Something went wrong, check code`);

    }

}

function prevMonth(curMonth) {
    // check for:
    //? is it january?
    //? otherwise just continue through
    //? dont want to cause `fake dates` like Feb 31st

    if (curMonth > 0) {

        dateInfo.month--;

    } else if (curMonth == 0) {

        dateInfo.month = 12;
        dateInfo.year--;

    } else {

        console.log(`Something went wrong, check code`);

    }

}

function nextYear(curYear) {

    if (curYear > 0) {

        dateInfo.year++;

    }

}

function prevYear(curYear) {
    // check for:
    //? is it year 1?

    if (curYear == 1) {
        dateInfo.year = 1;
    } else {

        dateInfo.year--;

    }

}

function cancelMethod() {

    document.getElementById(`nextMonth`).style.display = `none`;
    document.getElementById(`prevMonth`).style.display = `none`;
    document.getElementById(`nextDay`).style.display = `none`;
    document.getElementById(`prevDay`).style.display = `none`;
    document.getElementById(`nextYear`).style.display = `none`;
    document.getElementById(`prevYear`).style.display = `none`;
    document.getElementById(`cancelButton`).style.display = `none`;
    document.getElementById(`yearSelect`).style.display = `none`;
    document.getElementById(`changeDateButton`).style.display = `initial`;
    document.getElementById(`makeNoteButton`).style.display = `initial`;

    if (document.getElementById(`mainDiv`).style.height == `400px`) {

        document.getElementById(`hideNotesButton`).style.display = `initial`;

    } else {

        document.getElementById(`revealNotesButton`).style.display = `initial`;

    }

}

function makeNoteFunc() {

    let currentDate = document.getElementById(`dateHead`).innerText;

    if (dateInfo.storedData[currentDate] == null) {
        // CREATES THIS IF THE DATE KEY DOESNT EXIST YET

        let note = prompt(`Create a note!`);
        dateInfo.storedData[`${currentDate}`] = [];
        dateInfo.storedData[`${currentDate}`].push(note);

        let dates = Object.keys(dateInfo.storedData);

        let idx = dates.indexOf(currentDate);

        let noteDiv = createDiv({ id: currentDate, class: `noteDivs` }),
            noteDate = createHeading({ id: `noteDate`, class: `noteDates`, text: `${dates[idx]}`, size: 3 }),
            noteText = createParagraph({ text: `* ${dateInfo.storedData[`${currentDate}`][0]}` });
        noteDiv.appendChild(noteDate);
        noteDiv.appendChild(noteText);

        document.getElementById(`notesDisplay`).appendChild(noteDiv);

    } else {
        // CREATES THIS IF THE DATE KEY DOES EXIST

        let note = prompt(`Create a note!`);
        dateInfo.storedData[`${currentDate}`].push(note);

        let dates = Object.keys(dateInfo.storedData);

        let idx = dates.indexOf(currentDate);

        let div = document.getElementById(`${currentDate}`);
        div.parentNode.removeChild(div);

        let noteDiv = createDiv({ id: currentDate, class: `noteDivs` }),
            noteDate = createHeading({ id: `noteDate`, class: `noteDates`, text: `${dates[idx]}`, size: 3 }),
            noteText = ``;
        
        for (let a = 0; a < dateInfo.storedData[`${currentDate}`].length; a++) {

            if (a > 0) {

                noteText += `<br>* ${dateInfo.storedData[`${currentDate}`][a]}`;

            } else {

                noteText += `* ${dateInfo.storedData[`${currentDate}`][a]}`;

            }

        }

        let noteInfo = createParagraph({text: noteText});
        noteDiv.appendChild(noteDate);
        noteDiv.appendChild(noteInfo);

        document.getElementById(`notesDisplay`).appendChild(noteDiv);

    }

}

function revealNotesFunc() {

    document.getElementById(`revealNotesButton`).style.display = `none`;
    document.getElementById(`hideNotesButton`).style.display = `initial`;
    document.getElementById(`mainDiv`).style.height = `400px`;
    document.getElementById(`mainDiv`).style.transition = `0.5s`;
    document.getElementById(`notesDisplay`).style.transition = `opacity 0.5s`;
    document.getElementById(`notesDisplay`).style.opacity = `1`;
    document.getElementById(`notesDisplay`).style.transitionDelay = `0.25s`;
    
}

function hideNotesFunc() {

    document.getElementById(`revealNotesButton`).style.display = `initial`;
    document.getElementById(`hideNotesButton`).style.display = `none`;
    document.getElementById(`mainDiv`).style.height = `110px`;
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
        let daySelect = createSelect({ id: `daySelect`, class: `calSelects`, defOp: `Select Day`, data: daysArr, onchange: selectDay });
        
        document.getElementById(`interactive`).appendChild(daySelect);
        
    }
        
}

function selectDay() {

    dateInfo.day = this.value;

    if (this.value == ``) {
        return
    } else {

        this.style.display = `none`;

        document.getElementById(`nextMonth`).style.display = `none`;
        document.getElementById(`prevMonth`).style.display = `none`;
        document.getElementById(`nextDay`).style.display = `none`;
        document.getElementById(`prevDay`).style.display = `none`;
        document.getElementById(`nextYear`).style.display = `none`;
        document.getElementById(`prevYear`).style.display = `none`;
        document.getElementById(`cancelButton`).style.display = `none`;
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