window.onload = () => {

    requestAllUsers();
    let header = createHeading({ id: `mainHead`, text: `Company Resource Site`, size: 1 }),
        mainDiv = createDiv({ id: `mainDiv` });
    document.body.appendChild(header);
    document.body.appendChild(mainDiv);

    // maybe implement a sidebar that holds 'interested in' companies after a button is clicked on the user div

}

function requestAllUsers() {

    // setup xhr 
    let xhr = new XMLHttpRequest(),
        reqMeth = 'GET',
        ep = `https://jsonplaceholder.typicode.com/users`,
        async = true;

    xhr.open(reqMeth, ep, async); // initialize api request/open channel

    xhr.onload = () => { // handle the api reponse

        // raw response
        // parse raw
        // iterate through the data to get each users info

        let rawRes = xhr.responseText,
            parsedRes = JSON.parse(rawRes);

        console.log(parsedRes[0]); // to see what key/value pairs im working with

        for (let a = 0; a < parsedRes.length; a++) {

            let userData = parsedRes[a]; // created a variable to store each users data in

            displayUser(userData); // function to handle the users data

        }

    }

    xhr.send(); // if we need to; this will pass information with the request, in the form of a JSON object

}

function displayUser(user) {

    // div for each user
    // heading that'll display the company name
    // heading for name
    // 'contact us' button; when clicked displays a pop-up with the contact info
    // 'get directions' link to google maps
    // link to website

    let div = createDiv({ class: `userDivs` }),
        compName = createHeading({ text: user.company.name, size: 2, class: `companyNames` }),
        ownName = createHeading({ text: user.name, size: 3, class: `owner` }),
        contact = createButton({ text: `Contact Us`, class: `contact` }),
        location = `${user.address.geo.lat},${user.address.geo.lng}`,
        directions = createHREF({ display: `Get Directions`, ref: `https://www.google.com/maps/place/${location}`, newTab: true, class: `directions` }),
        website = createHREF({ display: `Check Out Our Website`, ref: `${user.website}`, newTab: true, class: `websites` });

    // append children to parent nodes

}

// FUNCTIONS FOR CREATING HTML ELEMENTS
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

    // id, newTab (true or false), ref, display (wether text, image, ect.), class

    let href = document.createElement(`a`);

    href.id = hrefObj.id != undefined && document.getElementById(hrefObj.id) == null ? hrefObj.id : `>> No ID <<`;

    href.target = hrefObj.newTab === true ? href.target = `_blank` : ``;

    href.href = hrefObj.ref != undefined ? hrefObj.ref : `>> No Referenece <<`;

    href.innerHTML = hrefObj.display != undefined ? hrefObj.display : `>> No Display <<`;

    href.className = hrefObj.class != undefined ? hrefObj.class : ``;

    return href
};