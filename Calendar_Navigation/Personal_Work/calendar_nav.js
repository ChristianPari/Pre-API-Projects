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
    shortMonths: [4, 6, 9, 11],
    regMonths: [1, 3, 5, 7, 8, 12]

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

    let buttonID = this.id;

    if (buttonID == `nextDay`) {

        if (calendar.month == 2) {

            calendar.day++;

            if (calendar.day > 28 && (calendar.year % 4 != 0))
                calendar.day = 1

            else if (calendar.day > 29 && (calendar.year % 4 == 0))
                calendar.day = 1

        }

        if (calendar.shortMonths.includes(calendar.month)) {

            if (calendar.day >= 30)
                calendar.day = 1;

            else
                calendar.day++;

        }

        if (calendar.regMonths.includes(calendar.month)) {

            if (calendar.day >= 31)
                calendar.day = 1

            else
                calendar.day++;

        }

    }

    if (buttonID == `prevDay`) {


        calendar.day--;

        if (calendar.day < 1 && calendar.month == 2) {

            if (calendar.year % 4 != 0)
                calendar.day = 28

            else if (calendar.year % 4 == 0)
                calendar.day = 29

        }

        if (calendar.shortMonths.includes(calendar.month)) {

            if (calendar.day < 1)
                calendar.day = 30;

        }

        if (calendar.regMonths.includes(calendar.month)) {

            if (calendar.day < 1)
                calendar.day = 31

        }

    }

    if (buttonID == `nextMonth`) {

        calendar.month++

            if (calendar.month > 12)
                calendar.month = 1

    }

    if (buttonID == `prevMonth`) {

        calendar.month--

            if (calendar.month < 1)
                calendar.month = 12

    }

    if (buttonID == `nextYear`) {

        calendar.year++

    }

    if (buttonID == `prevYear`) {

        calendar.year--

            if (calendar.year < 1)
                calendar.year = 1

    }

    document.body.innerHTML = ``;
    createInitalElms()

    console.log(buttonID);

}

//FUNCTIONS FOR THE BACKEND
function displayDate(separator) {

    let sep = separator != undefined ? separator : '/',

        dateObj = calendar,

        day = calendar.day > 9 ? calendar.day : '0' + calendar.day,

        month = calendar.month > 9 ? calendar.month : '0' + calendar.month;

    string = month + sep + day + sep + calendar.year;

    return string

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