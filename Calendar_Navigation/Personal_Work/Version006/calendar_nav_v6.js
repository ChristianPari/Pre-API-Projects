// pre created divs: main => navDiv, calBody

let date = new Date();
let calObj = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    weekdayNum: date.getDay(),
    monthsArr: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
    daysByMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    weekdaysArr: [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`]
};

// creates elements
createNavBar();
createCalBody();

function createNavBar() {

    let dateHead = createHeading({ text: `${calObj.weekdaysArr[calObj.weekdayNum]}, ${calObj.monthsArr[calObj.month]} ${calObj.day} ${calObj.year}`, id: `dateHead`, size: 2 }),
        nextDay = createButton({ id: 'nextDay', class: 'dateBtns', text: 'Day >' }),
        prevDay = createButton({ id: 'prevDay', class: 'dateBtns', text: '< Day' }),
        nextMonth = createButton({ id: 'nextMonth', class: 'dateBtns', text: 'Month >' }),
        prevMonth = createButton({ id: 'prevMonth', class: 'dateBtns', text: '< Month' }),
        nextYear = createButton({ id: 'nextYear', class: 'dateBtns', text: 'Year >' }),
        prevYear = createButton({ id: 'prevYear', class: 'dateBtns', text: '< Year' });

    document.getElementById(`navDiv`).appendChild(prevDay);
    document.getElementById(`navDiv`).appendChild(prevMonth);
    document.getElementById(`navDiv`).appendChild(prevYear);
    document.getElementById(`navDiv`).appendChild(dateHead);
    document.getElementById(`navDiv`).appendChild(nextYear);
    document.getElementById(`navDiv`).appendChild(nextMonth);
    document.getElementById(`navDiv`).appendChild(nextDay);

};

function createCalBody() {

    createWeekdays();
    createCalGrid();

};

function createWeekdays() {

    let weekdaysDiv = createDiv({ id: `weekdaysDiv` });

    for (let a = 0; a < calObj.weekdaysArr.length; a++) {

        let heading = createHeading({ text: `${calObj.weekdaysArr[a]}`, id: `${calObj.weekdaysArr[a]}`, class: `weekdays` });
        weekdaysDiv.appendChild(heading);

    }

    document.getElementById(`calBody`).appendChild(weekdaysDiv);

};

function createCalGrid() {

    let gridDiv = createDiv({ id: `gridDiv` });

    for (let a = 0; a < 42; a++) {

        let div = createDiv({ id: `${a}` });
        gridDiv.appendChild(div);

    }

    document.getElementById(`calBody`).appendChild(gridDiv);

};

// HTML FUNCTIONS
function createDiv(divObj) {

    // id, class

    let div = document.createElement(`div`);

    div.id = divObj.id != undefined && document.getElementById(divObj.id) == null ? divObj.id : `>> No ID <<`;

    div.className = divObj.class != undefined ? divObj.class : ``;

    return div

};

function createHeading(headingObj) {

    // size, text, id, class

    let heading = headingObj.size >= 1 && headingObj.size <= 5 ? document.createElement(`h` + headingObj.size) : document.createElement(`h5`);

    heading.innerHTML = typeof headingObj.text == `string` ? headingObj.text : `>> No text <<`;

    heading.id = headingObj.id != undefined && document.getElementById(headingObj.id) == null ? headingObj.id : `>> No ID <<`;

    heading.className = headingObj.class != undefined ? headingObj.class : ``;

    return heading

};

function createParagraph(paraObj) {

    // text

    let paragraph = document.createElement(`p`);

    paragraph.innerHTML = paraObj.text != undefined ? paraObj.text : `>> No Text <<`;

    return paragraph

}

function createImage(imageObj) {

    // src, alt, id, class

    let image = document.createElement(`img`);

    image.src = imageObj.src != undefined ? imageObj.src : `images/default.jpg`;

    image.alt = imageObj.alt != undefined ? imageObj.alt : `image couldn't load; broke`;

    image.id = imageObj.id != undefined && document.getElementById(imageObj.id) == null ? imageObj.id : `>> No ID <<`;

    image.className = imageObj.class != undefined ? imageObj.class : ``;

    return image

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

function createHREF(hrefObj) {

    // id, newTab (true or false), ref, display (wether text, image, ect.)

    let href = document.createElement(`a`);

    href.id = hrefObj.id != undefined && document.getElementById(hrefObj.id) == null ? hrefObj.id : `>> No ID <<`;

    href.target = hrefObj.newTab === true ? href.target = `_blank` : ``;

    href.href = hrefObj.ref != undefined ? hrefObj.ref : `>> No Referenece <<`;

    href.innerHTML = hrefObj.display != undefined ? hrefObj.display : `>> No Display <<`;

    return href
};

function createSelect(selectObj) {

    //! WILL NEED TP MODIFY FOR DIFFERENT PROGRAMS
    // id, class, defOp, defOpID, data (used to create the options)

    let select = document.createElement(`select`);

    select.id = selectObj.id != undefined && document.getElementById(selectObj.id) == null ? selectObj.id : `>> No ID <<`;

    select.className = selectObj.class != undefined ? selectObj.class : ``;

    let defaultOp = document.createElement(`option`);

    defaultOp.innerHTML = selectObj.defOp != undefined ? selectObj.defOp : `Select an Option`;

    defaultOp.id = selectObj.defOpID != undefined && document.getElementById(selectObj.defOpID) == null ? selectObj.defOpID : `>> No ID <<`;

    defaultOp.value = ``;

    select.appendChild(defaultOp);

    for (let a = 0; a < selectObj.data.length; a++) {

        let option = document.createElement(`option`);

        option.id = `${selectObj.data[a].title.substr(0,3)}Option`;

        option.innerHTML = selectObj.data[a].title;

        option.value = selectObj.data[a].rentID;

        select.appendChild(option);

    }

    select.onchange = selectObj.onchange != undefined ? selectObj.onchange : ``;

    return select

};