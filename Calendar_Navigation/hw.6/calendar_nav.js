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

//! change to change each day at some point using `new Date()`
// let currentDate = {

//     year: 2020,
//     month: 4,
//     day: 6

// };

let currentDate = new Date();
let dmy = {

    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear()

};

//function calls
createInitalElms()


//functions 

//creates elements and puts them on the body
function createInitalElms() {

    //create the head elm
    // & set the properties
    //! createHeading({ text: currentDate, id: 'dateHead' })
    createHeading({ text: `${dmy.day} ${dmy.month} ${dmy.year}`, id: `dateHead`, size: 1 })

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

function modifyDate() {

    let buttonID = this.id;

    if (buttonID == `nextDay`) {

        if (dmy.month == 2) {

            dmy.day++;

            if (dmy.day > 28 && (dmy.year % 4 != 0)) {

                dmy.day = 1

            } else
            if (dmy.day > 29 && (dmy.year % 4 == 0)) {

                dmy.day = 1

            }

        }

        if (dmy.month == 4 || dmy.month == 6 || dmy.month == 9 || dmy.month == 11) {

            if (dmy.day >= 30) {

                dmy.day = 1;

            } else {

                dmy.day++;

            }

        }

        if (dmy.month == 1 || dmy.month == 3 || dmy.month == 5 || dmy.month == 7 || dmy.month == 8 || dmy.month == 10 || dmy.month == 12) {

            if (dmy.day >= 31) {

                dmy.day = 1

            } else {

                dmy.day++;

            }

        }

    }
    if (buttonID == `prevDay`) {


        dmy.day--;

        if (dmy.day < 1 && dmy.month == 2) {

            if (dmy.year % 4 != 0) {

                dmy.day = 28

            } else
            if (dmy.year % 4 == 0) {

                dmy.day = 29

            }

        }

        if (dmy.month == 4 || dmy.month == 6 || dmy.month == 9 || dmy.month == 11) {

            if (dmy.day < 1) {

                dmy.day = 30;

            }

        }

        if (dmy.month == 1 || dmy.month == 3 || dmy.month == 5 || dmy.month == 7 || dmy.month == 8 || dmy.month == 10 || dmy.month == 12) {

            if (dmy.day < 1) {

                dmy.day = 31

            }

        }

    }
    if (buttonID == `nextMonth`) {

        dmy.month++

            if (dmy.month > 12) {

                dmy.month = 1

            }

    }
    if (buttonID == `prevMonth`) {

        dmy.month--

            if (dmy.month < 1) {

                dmy.month = 12

            }

    }
    if (buttonID == `nextYear`) {

        dmy.year++

    }
    if (buttonID == `prevYear`) {

        dmy.year--

            if (dmy.year < 1) {

                dmy.year = 1

            }

    }

    document.body.innerHTML = ``;
    createInitalElms()

    console.log(buttonID);

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