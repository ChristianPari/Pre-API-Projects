/*
    First, create the object and it's important data
    Second, create your resuable methods and use dot notation to add them to the object
    Third, if calling your methods manually, call them all last and organize in the logical order 
*/

//! DONT HAVE IMAGES ONE WORKING

let body = document.body;
body.id = `bodyID`;
body.style.backgroundColor = `lightBlue`;

let movieRental = {

    availableMovies: [{
            title: `The Avengers`,
            img: `images/The_Avengers.jpg`
        },
        {
            title: `Guardians of the Galaxy`,
            img: `images/Guardians_of_the_Galaxy.jpg`
        },
        {
            title: `Spider-Man: Homecoming`,
            img: `images/Spider-Man_Homecoming.jpg`
        },
        {
            title: `Thor: The Dark World`,
            img: `images/Thor_The_Dark_World.jpg`
        },
        {
            title: `Iron Man`,
            img: `images/Iron_Man.jpg`
        },
        {
            title: `Captian America: The First Avenger`,
            img: `images/Captain_America_The_First_Avenger.jpg`
        },
        {
            title: `Star Wars VI: Return of the Jedi`,
            img: `images/Star_Wars_6_Return_of_the_Jedi.jpg`
        },
        {
            title: `Star Wars VIII: The Last Jedi`,
            img: `images/Star_Wars_8_The_Last_Jedi.jpg`
        },
        {
            title: `Black Panther`,
            img: `images/Black_Panther.jpg`
        },
        {
            title: `Doctor Strange`,
            img: `images/Doctor_Strange.jpg`
        }
    ],

    rentedMovies: [{
            title: `Thor: Ragnarok`,
            img: `images/Thor_Ragnarok.jpg`
        },
        {
            title: `Spider-Man: Far From Home`,
            img: `images/Spider-Man_Far_From_Home.jpg`
        },
        {
            title: `Captain America: The Winter Soldier`,
            img: `images/Captain_America_The_Winter_Soldier.jpg`
        },
        {
            title: `Captian America: Civil War`,
            img: `images/Captain_America_Civil_War.jpg`
        },
        {
            title: `Star Wars III: Revenge of the Sith`,
            img: `images/Star_Wars_3_Revenge_of_the_Sith.jpg`
        },
        {
            title: `Guardians of the Galaxy Vol. 2`,
            img: `images/Guardians_of_the_Galaxy_Vol2.jpg`
        }
    ],

    title() {

        let heading = movieRental.createHeadingElem(`Movie Rental JavaScript`, 1, `mainHeading`);
        heading.align = `center`;
        document.body.appendChild(heading);

    },

    displayAvailable() {

        let availableMovies = movieRental.availableMovies.sort((a, b) => { if (a.title > b.title) { return 1 } else { return -1 } });

        let heading = movieRental.createHeadingElem(`Available Movies`, 2, `availableMoviesHeading`),
            avlDiv = document.getElementById(`availableDiv`),
            list = movieRental.createListElem(false, availableMovies, `availableMoviesList`);

        avlDiv.appendChild(heading);
        avlDiv.appendChild(list);
        document.getElementById(`availableMoviesList`).style.listStyleType = `none`;

    },

    displayRented() {

        let rentedMovies = movieRental.rentedMovies.sort((a, b) => { if (a.title > b.title) { return 1 } else { return -1 } });

        let heading = movieRental.createHeadingElem(`Rented Movies`, 2, `rentedMoviesHeading`),
            rntDiv = document.getElementById(`rentedDiv`),
            list = movieRental.createListElem(false, rentedMovies, `rentedMoviesList`);

        rntDiv.appendChild(heading);
        rntDiv.appendChild(list);
        document.getElementById(`rentedMoviesList`).style.listStyleType = `none`;

    },

    movieLookUp() {

        let ref = movieRental.createHrefElem(`https://www.imdb.com/?ref_=nv_home`, `Click here to search on iMDb!`);
        let body = document.getElementById(`bodyID`);

        body.appendChild(ref);

    },

    selectMovies() {

        let select = movieRental.createSelectElem(`availableMoviesSelect`, `Please select a movie`);
        for (let a = 0; a < movieRental.availableMovies.length; a++) {

            let option = document.createElement(`option`);
            option.innerText = movieRental.availableMovies[a].title;
            select.appendChild(option);

        }

        let body = document.getElementById(`bodyID`);
        body.appendChild(select);

    }

}


movieRental.createMainContainers = () => {

    const avlDiv = document.createElement(`div`),
        rntDiv = document.createElement(`div`);

    avlDiv.id = `availableDiv`;
    rntDiv.id = `rentedDiv`;

    // avlDiv.align = `center`;
    // rntDiv.align = `center`;

    avlDiv.style.backgroundColor = `lightPink`;
    rntDiv.style.backgroundColor = `lightGreen`;

    document.body.appendChild(avlDiv);
    document.body.appendChild(rntDiv);

};

movieRental.createHeadingElem = (headingText, headingSize, headingID) => {

    if (parseInt(headingSize) >= 1 && parseInt(headingSize) <= 5)
        headingSize = parseInt(headingSize);
    else
        headingSize = 5;

    let heading = document.createElement(`h` + headingSize);

    if (headingText != undefined)
        heading.innerText = headingText;

    else
        heading.innerText = `>>> No text parameter was passed, check code <<<`;

    if (headingID != undefined && document.getElementById(headingID) == null)
        heading.id = headingID;

    else if (headingID != undefined && document.getElementById(headingID) != null)
        console.log(`Heading '${headingText}': '${headingID}' already exists`)

    else
        console.log(`>>> Heading '${headingText}': id was not defined <<<`);

    return heading

};

movieRental.createParagraphElem = (paragraphText, paragraphID) => {

    let paragraph = document.createElement(`p`);

    if (paragraphID != undefined && document.getElementById(paragraphID) == null)
        paragraph.id = paragraphID;

    else if (paragraphID != undefined && document.getElementById(paragraphID) != null)
        console.log(`Duplicate id '${paragraphID}'`);

    if (paragraphText != undefined)
        paragraph.innerHTML = paragraphText;

    else
        console.log(`No text for paragraphID '${paragraphID}'`);

    return paragraph

};

// if isOrdered is true, make an ordered list; otherwise create an unordered list
movieRental.createListElem = (isOrdered, listData, listID) => {

    let list = isOrdered === true ? document.createElement(`ol`) : document.createElement(`ul`);
    //^ ternary operator ' ? : ' to shorten the below code

    // if (isOrdered === true)
    //     list = document.createElement(`ol`);
    // else
    //     list = document.createElement(`ul`);

    if (listID != undefined && document.getElementById(listID) == null)
        list.id = listID;

    for (let a = 0; a < listData.length; a++) {

        let listElm = document.createElement(`li`);

        listElm.innerText = listData[a].title;

        list.appendChild(listElm);

    }

    return list

};

movieRental.createHrefElem = (ref, display) => {

    let href = document.createElement(`a`);
    href.href = ref;
    href.innerHTML = display;

    return href;

};

movieRental.createSelectElem = (selectID, defaultOption) => {

    let select = document.createElement(`select`);
    select.id = selectID;
    let defaultOp = document.createElement(`option`);
    defaultOp.innerText = defaultOption;
    select.appendChild(defaultOp);

    return select;

};

movieRental.title();
movieRental.createMainContainers();
movieRental.displayAvailable();
movieRental.displayRented();
movieRental.movieLookUp();
movieRental.selectMovies();