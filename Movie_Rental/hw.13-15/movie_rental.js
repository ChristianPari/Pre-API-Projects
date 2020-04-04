// Create movie rental object

//* A constructor will always have capital letters, coming further down the line

//! Add mouseover effect to display description of movie

let movieRental = {

    createHeadingElem(size, text, id) {

        let headingSize = `h` + size;
        let head = document.createElement(headingSize);
        head.innerText = text;
        if (id != undefined) {
            head.id = id;
        }
        return head

    },

    createImageElem(source, alt, parentVar, imageID) {

        let image = document.createElement(`img`);
        image.src = source;
        image.id = imageID;
        image.alt = alt;
        image.height = `350`;
        image.width = `275`;

        parentVar.appendChild(image);

    },

    //! ADD 10 OR MORE MOVIES ^

    availableMovies: [`The Avengers`, `Guardians of the Galaxy`, `Spider-Man: Homecoming`, `Thor: The Dark World`, `Iron Man`, `Captian America: The First Avenger`, `Black Panther`, `Doctor Strange`],

    availableMovies2: [{ title: `The Avengers`, img: `images/The_Avengers.jpg` }, { title: `Guardians of the Galaxy`, img: `images/Guardians_of_the_Galaxy.jpg` }, { title: `Spider-Man: Homecoming`, img: `images/Spider-Man_Homecoming.jpg` }, { title: `Thor: The Dark World`, img: `images/Thor_The_Dark_World.jpg` }, { title: `Iron Man`, img: `images/Iron_Man.jpg` }, { title: `Captian America: The First Avenger`, img: `images/Captain_America_The_First_Avenger.jpg` }, { title: `Black Panther`, img: `images/Black_Panther.jpg` }, { title: `Doctor Strange`, img: `images/Doctor_Strange.jpg` }],

    rentedMovies: [`Thor: Ragnarok`, `Spider-Man: Far From Home`, `Captain America: The Winter Soldier`, `Captain America: Civil War`, `Guardians of the Galaxy Vol. 2`],

    rentedMovies2: [{ title: `Thor: Ragnarok`, img: `images/Thor_Ragnarok.jpg` }, { title: `Spider-Man: Far From Home`, img: `images/Spider-Man_Far_From_Home.jpg` }, { title: `Captain America: The Winter Soldier`, img: `images/Captain_America_The_Winter_Soldier.jpg` }, { title: `Captian America: Civil War`, img: `images/Captain_America_Civil_War.jpg` }, { title: `Guardians of the Galaxy Vol. 2`, img: `images/Guardians_of_the_Galaxy_Vol2.jpg` }],

    // Display available movies using a method
    //! Update this method to create an unordered list `ul` and append it to the display
    //! ... div so that it appears on screen
    //* Used with commented out button
    displayAvailable() {

        movieRental.availableMovies.sort();

        let heading = document.createElement(`h3`);
        heading.id = `availableHead`;
        heading.innerHTML = `Available Movies`;
        document.getElementById(`displayDiv`).appendChild(heading);

        let availableList = document.createElement(`ul`);
        availableList.id = `availableMoviesList`;
        availableList.style.listStyleType = `none`;
        availableList.style.padding = `0`;
        document.getElementById(`displayDiv`).appendChild(availableList);

        movieRental.availableMovies.forEach(movie => {

            let movieItem = document.createElement(`li`);
            document.getElementById(`availableMoviesList`).appendChild(movieItem);
            movieItem.innerHTML = movie;

        });

        // so that the order of heading and data flows logically
        displayDiv.insertBefore(availableList, rentedButton);
        displayDiv.insertBefore(heading, availableList);
        availableButton.style.display = `none`;

    },

    //! Make a mehtod that displays the rented movies ^
    //! Update this method to create an unordered list `ul` and append it to the display
    //! ... div so that it appears on screen
    //* Used with commented out button
    displayRented() {

        movieRental.rentedMovies.sort();

        let heading = document.createElement(`h3`);
        heading.id = `rentedHead`;
        heading.innerHTML = `Rented Movies`;
        document.getElementById(`displayDiv`).appendChild(heading);

        let rentedList = document.createElement(`ul`);
        rentedList.id = `rentedMoviesList`;
        rentedList.style.listStyleType = `none`;
        rentedList.style.padding = `0`;
        document.getElementById(`displayDiv`).appendChild(rentedList);

        movieRental.rentedMovies.forEach(movie => {

            let movieItem = document.createElement(`li`);
            document.getElementById(`rentedMoviesList`).appendChild(movieItem);
            movieItem.innerHTML = movie;

        });

        displayDiv.insertBefore(rentedList, dataDisplay);
        displayDiv.insertBefore(heading, rentedList);
        rentedButton.style.display = `none`;

    },

    //! Create a method that will remove from available movies and then push it into the rented array ^
    //! Moves a random index (movie) into rented movies ^
    //* CONVERTED TO BE USED IN A DOM ELEMENT
    rentARandomMovie() {

        if (movieRental.availableMovies.length == 0) {

            alert(`There are no movies left!`);

        } else {

            let ranIndex = Math.floor(Math.random() * movieRental.availableMovies.length);
            movieRental.rentedMovies.push(movieRental.availableMovies[ranIndex]);
            movieRental.availableMovies.splice(ranIndex, 1);
            movieRental.availableMovies.sort();
            movieRental.rentedMovies.sort();
            movieRental.strings();

            //* BELOW USED TO UPDATE MOVIES LIST
            // let ranIndex2 = Math.floor(Math.random() * movieRental.availableMovies2.length);
            movieRental.rentedMovies2.push(movieRental.availableMovies2[ranIndex]);
            movieRental.availableMovies2.splice(ranIndex, 1);
            newDataDisplay.innerHTML = ``;
            movieRental.newDisplay();

        }

    },

    //! Create a similar method for returnAMovie() like rentAMovie() ^
    returnARandomMovie() {

        let ranIndex = Math.floor(Math.random() * this.rentedMovies.length);
        this.availableMovies.push(this.rentedMovies[ranIndex]);
        this.rentedMovies.splice(ranIndex, 1);
        this.availableMovies.sort();
        this.rentedMovies.sort();

        console.log(this.availableMovies, this.rentedMovies);

    },

    //! Create a method that takes in a parameter (name of a movie) and rents that movie if it's available ^
    rentMultipleMovies(...movies) {

        //! use the .toLowerCase() within a conditional instead of creating variables
        //! also convert to for loops to use .forEach() instead ^ used in newDisplay()

        this.availableMovies.sort();
        this.rentedMovies.sort();

        for (let a = 0; a < movies.length; a++) {

            let movie = movies[a].toLowerCase();
            let lowerCaseAvailable = [];

            for (let b = 0; b < this.availableMovies.length; b++) {

                lowerCaseAvailable.push(this.availableMovies[b].toLowerCase());

            }

            if (lowerCaseAvailable.includes(movie)) {

                let movieIdx = lowerCaseAvailable.indexOf(movie);
                console.log(`\nThank you for renting ${this.availableMovies[movieIdx]}!`);
                this.rentedMovies.push(this.availableMovies[movieIdx]);
                this.rentedMovies.sort();
                this.availableMovies.splice(movieIdx, 1);

            } else {

                console.log(`\nUnfortunaetly we don't have ${movie} available for rent, or the spelling of ${movie} is incorrect, please check again.`);

            }

        }


        this.displayAvailable();
        this.displayRented();

    },

    returnMultipleMovies(...movies) {

        for (let a = 0; a < movies.length; a++) {

            let movie = movies[a].toLowerCase();
            let lowerCaseRented = [];

            for (let b = 0; b < this.rentedMovies.length; b++) {

                lowerCaseRented.push(this.rentedMovies[b].toLowerCase());

            }

            if (lowerCaseRented.includes(movie)) {

                let movieIdx = lowerCaseRented.indexOf(movie);
                console.log(`\nThank you for returning ${this.rentedMovies[movieIdx]}!`);
                this.availableMovies.push(this.rentedMovies[movieIdx]);
                this.availableMovies.sort();
                this.rentedMovies.splice(movieIdx, 1);

            } else {

                console.log(`\nThere seems to be an error with ${movie}, please make sure your spelling is correct.`);

            }

        }


        this.displayAvailable();
        this.displayRented();

    },

    strings() {

        // AVAILABLE MOVIES STRING
        let availStr = ``;
        let sortedAvail = movieRental.availableMovies.sort();

        for (let a = 0; a < sortedAvail.length; a++) {

            availStr += sortedAvail[a] + `, `;

        }
        let availableMoviesStr = availStr.substring(0, availStr.length - 2);

        // RENTED MOVIES STRING
        let rentedStr = ``;
        let sortedRented = movieRental.rentedMovies.sort();

        for (let a = 0; a < sortedRented.length; a++) {

            rentedStr += sortedRented[a] + `, `;

        }
        let rentedMoviesStr = rentedStr.substring(0, rentedStr.length - 2);

        dataDisplay.innerHTML = `<strong>Available Movies: </strong>${availableMoviesStr} <br> <br> <strong>Rented Movies: </strong>${rentedMoviesStr}`;

    },

    newDisplay() {

        movieRental.availableMovies2.sort((a, b) => {
            if (a.title > b.title) {
                return 1
            } else {
                return -1
            }
        });

        // let availHead = document.createElement(`h2`);
        // availHead.innerHTML = `Available Movies`;
        // availHead.id = `availableMoviesHead`;
        // newDataDisplay.appendChild(availHead);

        //^ using a function that creates an element instead of making the whole element each time
        let heading = movieRental.createHeadingElem(2, `Available Movies`, `availableMoviesHead`);
        newDataDisplay.appendChild(heading);

        // how to loop version 1: FOR LOOP
        for (let a = 0; a < movieRental.availableMovies2.length; a++) {

            let availableMovie = `<strong>${movieRental.availableMovies2[a].title}</strong>`;

            // let availableMovieImg = document.createElement(`img`);
            // availableMovieImg.id = `img${a + 1}`;
            // availableMovieImg.src = movieRental.availableMovies2[a].img;
            // availableMovieImg.height = `350`;
            // availableMovieImg.width = `275`;
            //^ created all this within the createImageElem()

            movieRental.createImageElem(movieRental.availableMovies2[a].img, movieRental.availableMovies2[a].title, newDataDisplay, `img${a + 1}`);

            // newDataDisplay.appendChild(availableMovieImg);

            newDataDisplay.innerHTML += `<br> ${availableMovie} <br> <br>`;

        }

        // newDataDisplay.innerHTML += `<br>`;

        let rentHead = document.createElement(`h2`);
        rentHead.innerHTML = `Rented Movies`;
        rentHead.id = `rentedMoviesHead`;
        newDataDisplay.appendChild(rentHead);

        movieRental.rentedMovies2.sort((a, b) => {
            if (a.title > b.title) {
                return 1
            } else {
                return -1
            }

        });

        // how to loop version 2: FOR EACH method
        movieRental.rentedMovies2.forEach(a => {

            let idx = movieRental.rentedMovies2.indexOf(a) + 1;
            let rentedMovie = `<strong>${a.title}</strong>`;
            let rentedMovieImg = document.createElement(`img`);
            rentedMovieImg.id = `img${idx}`;
            rentedMovieImg.src = a.img;
            rentedMovieImg.height = `350`;
            rentedMovieImg.width = `275`;

            newDataDisplay.appendChild(rentedMovieImg);
            newDataDisplay.innerHTML += `<br> ${rentedMovie} <br> <br>`;

        })

    }

}

//! Create DOM elements and display the data to the screen

document.body.id = `bodyID`;
let body = document.getElementById(`bodyID`);
body.style.backgroundColor = `lightBlue`;

let mainHead = document.createElement(`h1`);
mainHead.id = `mainHead`;
mainHead.innerHTML = `Movie Rental JS`;
mainHead.align = `center`;
document.getElementById(`bodyID`).appendChild(mainHead);

let displayDiv = document.createElement(`div`);
displayDiv.id = `displayDiv`;
displayDiv.align = `center`;
document.getElementById(`bodyID`).appendChild(displayDiv);

// let availableButton = document.createElement(`button`);
// availableButton.id = `availableDisplayButton`;
// availableButton.innerHTML = `<strong>Display Available Movies</strong>`;
// availableButton.onclick = movieRental.displayAvailable;
// document.getElementById(`displayDiv`).appendChild(availableButton);

// let rentedButton = document.createElement(`button`);
// rentedButton.id = `rentedDisplayButton`;
// rentedButton.innerHTML = `<strong>Display Rented Movies</strong>`;
// rentedButton.onclick = movieRental.displayRented;
// document.getElementById(`displayDiv`).appendChild(rentedButton);

// let dataDisplay = document.createElement(`p`);
// dataDisplay.id = `display`;
// dataDisplay.onload = movieRental.strings();
// document.getElementById(`displayDiv`).appendChild(dataDisplay);

let randomRentButton = document.createElement(`button`);
randomRentButton.id = `randomRentButton`;
randomRentButton.innerHTML = `<strong>Click to rent a random movie!</strong>`;
randomRentButton.onclick = movieRental.rentARandomMovie;
document.getElementById(`displayDiv`).appendChild(randomRentButton);

let newDisplayDiv = document.createElement(`div`);
newDisplayDiv.id = `newDisplayDiv`;
newDisplayDiv.align = `center`;
document.getElementById(`bodyID`).appendChild(newDisplayDiv);

let newDataDisplay = document.createElement(`p`);
newDataDisplay.id = `newDisplayP`;
newDataDisplay.onload = movieRental.newDisplay();
document.getElementById(`newDisplayDiv`).appendChild(newDataDisplay);