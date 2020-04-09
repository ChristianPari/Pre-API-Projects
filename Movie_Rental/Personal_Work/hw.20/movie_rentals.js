let movieRental = {

    allMovies: [

        { title: `The Avengers`, release: 2012, img: `images/The_Avengers.jpg`, desc: `Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.`, rentID: `TA12`, ref: `https://www.imdb.com/title/tt0848228/?ref_=fn_al_tt_1`, available: true },
        { title: `Guardians of the Galaxy`, release: 2014, img: `images/Guardians_of_the_Galaxy.jpg`, desc: `A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.`, rentID: `GG14`, ref: `https://www.imdb.com/title/tt2015381/?ref_=fn_al_tt_1`, available: true },
        { title: `Spider-Man: Homecoming`, release: 2017, img: `images/Spider-Man_Homecoming.jpg`, desc: `Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.`, rentID: `SMH17`, ref: `https://www.imdb.com/title/tt2250912/?ref_=nv_sr_srsg_6`, available: true },
        { title: `Iron Man`, release: 2008, img: `images/Iron_Man.jpg`, desc: `After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.`, rentID: `IM08`, ref: `https://www.imdb.com/title/tt0371746/?ref_=fn_al_tt_1`, available: true },
        { title: `Black Panther`, release: 2017, img: `images/Black_Panther.jpg`, desc: `T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.`, rentID: `BP17`, ref: `https://www.imdb.com/title/tt1825683/?ref_=fn_al_tt_1`, available: true },
        { title: `Doctor Strange`, release: 2016, img: `images/Doctor_Strange.jpg`, desc: `While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.`, rentID: `DS16`, ref: `https://www.imdb.com/title/tt1211837/?ref_=fn_al_tt_1`, available: true },
        { title: `Thor: Ragnarok`, release: 2017, img: `images/Thor_Ragnarok.jpg`, desc: `Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.`, rentID: `TR17`, ref: `https://www.imdb.com/title/tt3501632/?ref_=fn_al_tt_1`, available: false },
        { title: `Captian America: Civil War`, release: 2016, img: `images/Captain_America_Civil_War.jpg`, desc: `Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.`, rentID: `CACW16`, ref: `https://www.imdb.com/title/tt3498820/?ref_=fn_al_tt_1`, available: false }

    ],

    bodyDiv() {

        let bodyDiv = movieRental.createDiv({ id: `bodyDiv` });

        document.body.appendChild(bodyDiv);

    },

    mainDiv() {

        let mainDiv = movieRental.createDiv({ id: `mainDiv` });

        document.getElementById(`bodyDiv`).appendChild(mainDiv);

    },

    mainHeading() {

        let mainHeadingDiv = movieRental.createDiv({ id: `mainHeadingDiv` });

        document.getElementById(`bodyDiv`).appendChild(mainHeadingDiv);

        let mainHeading = movieRental.createHeading({ text: `'Everything Marvel' Movie Rentals`, size: 1, id: `mainHeading` });

        document.getElementById(`mainHeadingDiv`).appendChild(mainHeading);

    },

    mainContainers() {

        let availableDiv = movieRental.createDiv({ id: `availableDiv`, class: `movieContainers` });

        document.getElementById(`mainDiv`).appendChild(availableDiv);

        let rentedDiv = movieRental.createDiv({ id: `rentedDiv`, class: `movieContainers` });

        document.getElementById(`mainDiv`).appendChild(rentedDiv);

    },

    displaySideBar() {

        let sidebarDiv = movieRental.createDiv({ id: `sidebar` });

        document.getElementById(`mainDiv`).appendChild(sidebarDiv);

    },

    displayButtons() {

        let rentRandomButton = movieRental.createButton({ id: `rentRandomButton`, text: `Rent A Random Movie!`, method: movieRental.rentRandomMovie });
        let returnRandomButton = movieRental.createButton({ id: `returnRandomButton`, text: `Return A Random Movie!`, method: movieRental.returnRandomMovie });
        let buttonDiv = movieRental.createDiv({ id: `buttonDiv` });

        document.getElementById(`sidebar`).appendChild(buttonDiv);
        buttonDiv.appendChild(rentRandomButton);
        buttonDiv.appendChild(returnRandomButton);

    },

    displayAvailable() {

        let availableHeading = movieRental.createHeading({ text: `Avaiable Movies`, size: 1, id: `availableHeading` });
        let allAvailableMovies = movieRental.createDiv({ id: `allAvailable` });

        availableDiv.appendChild(availableHeading);
        availableDiv.appendChild(allAvailableMovies);


        // .filter() creates a new array of data that it filters
        // `object` in the filter takes on each index from within the array being filtered
        // to actually assign it to the filter() array you MUST `return`
        //* let rentedArray = movieRental.allMovies.filter(object => { return object.available == true });
        //^ can actually skip this step and place directly before the forEach()

        movieRental.allMovies.filter(object => { return object.available == true }).sort((a, b) => { if (a.title > b.title) { return 1 } else { return -1 } }).forEach(movieObj => {

            let movieDiv = movieRental.createDiv({ id: `${movieObj.title.substr(0,3)}Div`, class: `movieDiv` });
            let movieTitle = movieRental.createHeading({ text: `${movieObj.title}`, size: 2, id: `${movieObj.title.substr(0,3)}Title` });
            let releaseDate = movieRental.createHeading({ text: `Realease Year: ${movieObj.release.toString()}`, size: 4, id: `${movieObj.title.substr(0,3)}Release` });
            let movieImages = movieRental.createImage({ src: movieObj.img, alt: `${movieObj.title}.img`, id: `${movieObj.title.substr(0,3)}Img`, class: `marvel` });
            let descriptionDiv = movieRental.createDiv({ id: `${movieObj.title.substr(0,3)}Desc`, class: `description` });
            let description = movieRental.createParagraph({ text: movieObj.desc });
            let movieRef = movieRental.createHREF({ id: `${movieObj.title.substr(0,3)}Ref`, ref: movieObj.ref, display: `Clcik Here for More Info!`, newTab: true });
            let rentMe = movieRental.createButton({ id: movieObj.rentID, class: `rentChoiceButton`, text: `Rent Me`, method: movieRental.rentChoice(this.id) });

            allAvailableMovies.appendChild(movieDiv);
            movieDiv.appendChild(movieTitle);
            movieDiv.appendChild(releaseDate);
            movieDiv.appendChild(descriptionDiv);
            descriptionDiv.appendChild(movieImages);
            descriptionDiv.appendChild(description);
            descriptionDiv.appendChild(movieRef);
            descriptionDiv.appendChild(rentMe);

        })

    },

    displayRented() {

        let rentedHeading = movieRental.createHeading({ text: `Unavailable Movies`, size: 1, id: `rentedHeading` });
        let allRentedMovies = movieRental.createDiv({ id: `allRented` });

        rentedDiv.appendChild(rentedHeading);
        rentedDiv.appendChild(allRentedMovies);

        movieRental.allMovies.filter(object => { return object.available == false }).sort((a, b) => { if (a.title > b.title) { return 1 } else { return -1 } }).forEach(movieObj => {

            let movieDiv = movieRental.createDiv({ id: `${movieObj.title.substr(0,3)}Div`, class: `movieDiv` });
            let movieTitle = movieRental.createHeading({ text: movieObj.title, size: 2, id: `${movieObj.title.substr(0,3)}Title` });
            let releaseDate = movieRental.createHeading({ text: `Realease Year: ${movieObj.release.toString()}`, size: 4, id: `${movieObj.title.substr(0,3)}Release` });
            let movieImages = movieRental.createImage({ src: movieObj.img, alt: `${movieObj.title}.img`, id: `${movieObj.title.substr(0,3)}Img`, class: `marvel` });
            let descriptionDiv = movieRental.createDiv({ id: `${movieObj.title.substr(0,3)}Desc`, class: `description` });
            let description = movieRental.createParagraph({ text: movieObj.desc });

            allRentedMovies.appendChild(movieDiv);
            movieDiv.appendChild(movieTitle);
            movieDiv.appendChild(releaseDate);
            movieDiv.appendChild(descriptionDiv);
            descriptionDiv.appendChild(movieImages);
            descriptionDiv.appendChild(description);

        });

    },

    displaySelects() {

        let availableMovies = movieRental.allMovies.filter(object => { return object.available == true }).sort((a, b) => { if (a.title > b.title) { return 1 } else { return -1 } });

        let availableSelect = movieRental.createSelect({ id: `availableSelect`, class: `movieSelects`, defOp: `Select A Movie`, defOpID: `defaultOption`, data: availableMovies, onchange: movieRental.rentableSelect });

        let availableSelectHeading = movieRental.createHeading({ text: `Select a movie to rent!`, id: `sidebarAvailable` });

        document.getElementById(`sidebar`).appendChild(availableSelectHeading);
        document.getElementById(`sidebar`).appendChild(availableSelect);

        let rentedMovies = movieRental.allMovies.filter(object => { return object.available == false }).sort((a, b) => { if (a.title > b.title) { return 1 } else { return -1 } });

        let unavailableSelect = movieRental.createSelect({ id: `unavailableSelect`, class: `movieSelects`, defOp: `Select A Movie`, defOpID: `defaultOption`, data: rentedMovies, onchange: movieRental.returnSelect });

        let unavailableSelectHeading = movieRental.createHeading({ text: `Select a movie to return!`, id: `sidebarUnavailable` });

        document.getElementById(`sidebar`).appendChild(unavailableSelectHeading);
        document.getElementById(`sidebar`).appendChild(unavailableSelect);

    },

    rentRandomMovie() {

        let availableArray = movieRental.allMovies.filter(object => { return object.available == true });
        let ranNum = Math.floor(Math.random() * availableArray.length);

        if (availableArray[ranNum] != undefined) {

            movieRental.allMovies.filter(object => { return object.available == true })[ranNum].available = false

            document.getElementById(`availableDiv`).innerHTML = ``;
            document.getElementById(`rentedDiv`).innerHTML = ``;
            movieRental.displayAvailable();
            movieRental.displayRented();

        } else { alert(`No movies left`); }

    },

    returnRandomMovie() {

        let rentedArray = movieRental.allMovies.filter(object => { return object.available == false });
        let ranNum = Math.floor(Math.random() * rentedArray.length);

        if (rentedArray[ranNum] != undefined) {

            movieRental.allMovies.filter(object => { return object.available == false })[ranNum].available = true;

            document.getElementById(`availableDiv`).innerHTML = ``;
            document.getElementById(`rentedDiv`).innerHTML = ``;
            movieRental.displayAvailable();
            movieRental.displayRented();

        } else { alert(`No movies left to return`); }

    },

    rentableSelect() {

        let selectBox = document.getElementById(`availableSelect`);
        let input = selectBox.options[selectBox.selectedIndex].value;

        for (let a = 0; a < movieRental.allMovies.length; a++) {
            if (input == movieRental.allMovies[a].rentID) {

                movieRental.allMovies[a].available = false;

                document.getElementById(`availableDiv`).innerHTML = ``;
                document.getElementById(`rentedDiv`).innerHTML = ``;
                movieRental.displayAvailable();
                movieRental.displayRented();

            }
        }

    },

    returnSelect() {

        let selectBox = document.getElementById(`unavailableSelect`);
        let input = selectBox.options[selectBox.selectedIndex].value;

        for (let a = 0; a < movieRental.allMovies.length; a++) {
            if (input == movieRental.allMovies[a].rentID) {

                movieRental.allMovies[a].available = true;

                document.getElementById(`availableDiv`).innerHTML = ``;
                document.getElementById(`rentedDiv`).innerHTML = ``;
                movieRental.displayAvailable();
                movieRental.displayRented();

            }
        }

    },

    rentChoice(input) {

        // let buttons = document.getElementsByTagName(`button`);

    }

}

movieRental.createDiv = function(divObj) {

    let div = document.createElement(`div`);

    div.id = divObj.id != undefined && document.getElementById(divObj.id) == null ? divObj.id : `>> No ID <<`;

    div.className = divObj.class != undefined ? divObj.class : ``;

    return div

};

movieRental.createHeading = function(headingObj) {

    let heading = headingObj.size >= 1 && headingObj.size <= 5 ? document.createElement(`h` + headingObj.size) : document.createElement(`h5`);

    heading.innerHTML = typeof headingObj.text == `string` ? headingObj.text : `>> No text <<`;

    heading.id = headingObj.id != undefined && document.getElementById(headingObj.id) == null ? headingObj.id : `>> No ID <<`;

    return heading

};

movieRental.createParagraph = function(paraObj) {

    let paragraph = document.createElement(`p`);

    paragraph.innerHTML = paraObj.text != undefined ? paraObj.text : `>> No Text <<`;

    return paragraph

}

movieRental.createImage = function(imageObj) {

    let image = document.createElement(`img`);

    image.src = imageObj.src != undefined ? imageObj.src : `images/default.jpg`;

    image.alt = imageObj.alt != undefined ? imageObj.alt : `image couldn't load; broke`;

    image.id = imageObj.id != undefined && document.getElementById(imageObj.id) == null ? imageObj.id : `>> No ID <<`;

    image.className = imageObj.class != undefined ? imageObj.class : ``;

    return image

};

movieRental.createButton = function(buttonObj) {

    let button = document.createElement(`button`);

    button.id = buttonObj.id != undefined && document.getElementById(buttonObj.id) == null ? buttonObj.id : `>> No ID <<`;

    button.className = buttonObj.class != undefined ? buttonObj.class : ``;

    button.innerHTML = typeof buttonObj.text == `string` ? buttonObj.text : `>> No Text <<`;

    button.onclick = buttonObj.method != undefined && typeof buttonObj.method == `function` ? buttonObj.method : `>> No function <<`;

    return button

};

movieRental.createHREF = function(hrefObj) {

    let href = document.createElement(`a`);

    href.id = hrefObj.id != undefined && document.getElementById(hrefObj.id) == null ? hrefObj.id : `>> No ID <<`;

    href.target = hrefObj.newTab === true ? href.target = `_blank` : ``;

    href.href = hrefObj.ref != undefined ? hrefObj.ref : `>> No Referenece <<`;

    href.innerHTML = hrefObj.display != undefined ? hrefObj.display : `>> No Display <<`;

    return href
};

movieRental.createSelect = function(selectObj) {

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

movieRental.bodyDiv();
movieRental.mainHeading();
movieRental.mainDiv();
movieRental.mainContainers();
movieRental.displayAvailable();
movieRental.displayRented();
movieRental.displaySideBar();
movieRental.displayButtons();
movieRental.displaySelects();