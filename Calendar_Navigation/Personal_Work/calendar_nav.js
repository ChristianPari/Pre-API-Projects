/*

[*] create my buttons along with on heading elm

[*] set my event listeners -> create functions

       one function for each button, 
    [] update the date variable/s, 
    [] update the heading to reflect the date var


[] set the heading text to the current date, store the current date in a variable

[] track numbers of days in a month, how many month ( year is easiest to deal with)

*/

//global variables

let currentDate = new Date();
let calendar = {

    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
    daysByMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

};

//function calls
createInitalElms()


//functions 

//creates elements and puts them on the body
function createInitalElms() {

    //create the head elm
    // & set the properties
    //! create a function that creates a setup for the date display
    createHeading({ text: displayDate(`-`), id: `dateHead`, size: 1 })

    //create all the needed button elms

    // next-day, prev-day, next-month, prev-month, next-year, prev-year (set back to current date)

    createButton({ id: 'nextDay', class: 'navBtns', text: 'Next Day', onClickFunc: modifyDate }),
        createButton({ id: 'prevDay', class: 'navBtns', text: 'Previous Day', onClickFunc: modifyDate }),
        createButton({ id: 'nextMonth', class: 'navBtns', text: 'Next Month', onClickFunc: modifyDate }),
        createButton({ id: 'prevMonth', class: 'navBtns', text: 'Previous Month', onClickFunc: modifyDate }),
        createButton({ id: 'nextYear', class: 'navBtns', text: 'Next Year', onClickFunc: modifyDate }),
        createButton({ id: 'prevYear', class: 'navBtns', text: 'Previous Year', onClickFunc: modifyDate });

}

//modify the date variable depending on which button was clicked
//! change to switches instead of ton of if else statements
//^ have functions for each specific case

function modifyDate() {

    let id = this.id,
        curDay = calendar.day,
        curMonth = calendar.month,
        curYear = calendar.year;

    // check for leap year
    checkLeapYear(curYear);

    // preform a change on calendar based on the button pressed
    // creating functions for each specific case
    switch (id) {
        case `nextDay`:

            // call for nextDay function
            nextDay(curDay, curMonth);

            break;

        case `prevDay`:

            // call for prevDay function
            prevDay(curDay, curMonth);

            break;

        case `nextMonth`:

            // call for nextMonth
            nextMonth(curMonth);

            break;

        case `prevMonth`:

            // call for prevMonth
            prevMonth(curMonth);

            break;

        case `nextYear`:

            // call for nextYear
            nextYear(curYear);

            break;

        case `prevYear`:

            // call for prevYear
            prevYear(curYear);

            break;

    }

    // checking for impossible dates
    if (calendar.day > calendar.daysByMonth[calendar.month - 1]) {
        calendar.day = calendar.daysByMonth[calendar.month - 1];
    }

    if (calendar.year <= 1) {
        calendar.year = 1;
    }

    // update the client/frontend display
    document.getElementById(`dateHead`).innerHTML = displayDate(`-`);
    //^ completely overwriting the heading that displays the date text

}

function displayDate(separator) {

    let sep = separator != undefined ? separator : '/',

        day = calendar.day > 9 ? calendar.day : '0' + calendar.day,

        month = calendar.month > 9 ? calendar.month : '0' + calendar.month;

    string = day + sep + month + sep + calendar.year;

    return string

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
    if (curDay < calendar.daysByMonth[curMonth - 1]) {

        calendar.day++

    } else if (curDay == calendar.daysByMonth[curMonth - 1] && curMonth != 12) { // at end of the month, but not the end of the year)

        calendar.day = 1;
        calendar.month++;

    } else if (curDay == calendar.daysByMonth[curMonth - 1] && curMonth == 12) { // at end of the month of december/ end of year

        calendar.day = 1;
        calendar.month = 1;
        calendar.year++;

    }

}

function prevDay(curDay, curMonth) {
    // check for:
    //? what month are we in?
    //? are we on the first day of the month? if so, continue on to the next month
    //? is it january? b/c then we have to continue into the previous year
    //? if not on last day then continue decreasing through the month

    if (curDay > 1) {

        calendar.day--;

    } else if (curDay == 1 && curMonth != 1) { // at beginning of the month, but not the end of the year)

        calendar.day = calendar.daysByMonth[curMonth - 2];
        calendar.month--;

    } else if (curDay == 1 && curMonth == 1) { // at beginning of the month of december/ end of year

        calendar.day = 31;
        calendar.month = 12;
        calendar.year--;

    } else {

        console.log(`Something went wrong, check code`);

    }

}

function nextMonth(curMonth) {
    // check for:
    //? is it deecember?
    //? otherwise just continue through

    if (curMonth < 12) {

        calendar.month++;

    } else if (curMonth == 12) {

        calendar.month = 1;
        calendar.year++;

    } else {

        console.log(`Something went wrong, check code`);

    }

}

function prevMonth(curMonth) {
    // check for:
    //? is it january?
    //? otherwise just continue through
    //? dont want to cause `fake dates` like Feb 31st

    if (curMonth > 1) {

        calendar.month--;

    } else if (curMonth == 1) {

        calendar.month = 12;
        calendar.year--;

    } else {

        console.log(`Something went wrong, check code`);

    }

}

function nextYear(curYear) {

    if (curYear > 0) {

        calendar.year++;

    }

}

function prevYear(curYear) {

    if (curYear == 1) {
        calendar.year = 1;
    } else {

        calendar.year--;

    }

}


// easiest to check on the onlick function so that you dont have to repeat code or have more intense logic
function checkLeapYear(year) {

    if (year % 4 == 0 || (year % 100 != 0 && year % 400 == 0)) {

        calendar.daysByMonth[1] = 29;

    } else {

        calendar.daysByMonth[1] = 28;

    }

}


//FUNCTIONS THAT CREATE HTML ELEMENTS
function createHeading(headingObj) {

    let heading = headingObj.size >= 1 && headingObj.size <= 5 ? document.createElement(`h` + headingObj.size) : document.createElement(`h5`);

    heading.innerHTML = (typeof headingObj.text == `string`) ? headingObj.text : `>> No text <<`;

    heading.id = headingObj.id != undefined && document.getElementById(headingObj.id) == null ? headingObj.id : `>> No ID <<`;

    document.body.appendChild(heading);

    // return heading

};

function createButton(buttonObj) {

    let button = document.createElement(`button`);

    button.id = buttonObj.id != undefined && document.getElementById(buttonObj.id) == null ? buttonObj.id : `>> No ID <<`;

    button.className = buttonObj.class != undefined ? buttonObj.class : ``;

    button.innerHTML = typeof buttonObj.text == `string` ? buttonObj.text : `>> No Text <<`;

    button.onclick = buttonObj.onClickFunc != undefined && typeof buttonObj.onClickFunc == `function` ? buttonObj.onClickFunc : `>> No function <<`;

    document.body.appendChild(button);

    // return button

};