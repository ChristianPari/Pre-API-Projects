let movieRental = {

    allMovies: [

        {
            title: `The Avengers`,
            release: 2012,
            img: `images/ta.jpg`,
            desc: `When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's "dream team" are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).`,
            rentID: `TAG12`,
            genre: `action`,
            ref: `https://www.imdb.com/title/tt0848228/?ref_=fn_al_tt_1`,
            available: true
        },
        {
            title: `Guardians of the Galaxy`,
            release: 2014,
            img: `images/gotg.jpg`,
            desc: `Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.`,
            rentID: `GOG14`,
            genre: `action`,
            ref: `https://www.imdb.com/title/tt2015381/?ref_=fn_al_tt_1`,
            available: false
        },
        {
            title: `Spider-Man: Homecoming`,
            release: 2017,
            img: `images/smh.jpg`,
            desc: `Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May. Under the watchful eye of mentor Tony Stark, Parker starts to embrace his newfound identity as Spider-Man. He also tries to return to his normal daily routine -- distracted by thoughts of proving himself to be more than just a friendly neighborhood superhero. Peter must soon put his powers to the test when the evil Vulture emerges to threaten everything that he holds dear.`,
            rentID: `SMH17`,
            genre: `action`,
            ref: `https://www.imdb.com/title/tt2250912/?ref_=nv_sr_srsg_6`,
            available: true
        },
        {
            title: `Iron Man`,
            release: 2008,
            img: `images/im.jpg`,
            desc: `A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.`,
            rentID: `IMN08`,
            genre: `action`,
            ref: `https://www.imdb.com/title/tt0371746/?ref_=fn_al_tt_1`,
            available: true
        },
        {
            title: `Black Panther`,
            release: 2017,
            img: `images/bp.jpg`,
            desc: `After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.`,
            rentID: `BPN17`,
            genre: `action`,
            ref: `https://www.imdb.com/title/tt1825683/?ref_=fn_al_tt_1`,
            available: false
        },
        {
            title: `Doctor Strange`,
            release: 2016,
            img: `images/ds.jpg`,
            desc: `Dr. Stephen Strange's (Benedict Cumberbatch) life changes after a car accident robs him of the use of his hands. When traditional medicine fails him, he looks for healing, and hope, in a mysterious enclave. He quickly learns that the enclave is at the front line of a battle against unseen dark forces bent on destroying reality. Before long, Strange is forced to choose between his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.`,
            rentID: `DST16`,
            genre: `action`,
            ref: `https://www.imdb.com/title/tt1211837/?ref_=fn_al_tt_1`,
            available: true
        },
        {
            title: `Thor: Ragnarok`,
            release: 2017,
            img: `images/tr.jpg`,
            desc: `Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization`,
            rentID: `TRN17`,
            genre: `action`,
            ref: `https://www.imdb.com/title/tt3501632/?ref_=fn_al_tt_1`,
            available: false
        },
        {
            title: `Captian America: Civil War`,
            release: 2016,
            img: `images/cacw.jpg`,
            desc: `Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The new status quo deeply divides members of the team. Captain America (Chris Evans) believes superheroes should remain free to defend humanity without government interference. Iron Man (Robert Downey Jr.) sharply disagrees and supports oversight. As the debate escalates into an all-out feud, Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner) must pick a side.`,
            rentID: `CACW16`,
            genre: `action`,
            ref: `https://www.imdb.com/title/tt3498820/?ref_=fn_al_tt_1`,
            available: false
        },
        {
            title: `The Emperor's New Grove`,
            release: 2000,
            img: `images/teng.jpg`,
            desc: `Arrogant young Emperor Kuzco is transformed into a llama by his power-hungry advisor -- the devious diva Yzma. Stranded in the jungle, Kuzco's only chance to get back home and reclaim the high life rests with a good-hearted peasant named Pacha. Together, they must return Kuzco to the throne before Yzma tracks them down and finishes him off.`,
            rentID: `ENG00`,
            genre: `family`,
            ref: `https://www.imdb.com/title/tt0120917/`,
            available: false
        },
        {
            title: `Meet the Robinsons`,
            release: 2007,
            img: `images/mtr.jpg`,
            desc: `Boy genius Lewis gives up hope of retrieving his latest invention, which was stolen by Bowler Hat Guy, then a young time-traveler named Wilbur Robinson arrives on the scene to whisk Lewis away in his time machine. The boys spend a day in the future with Wilbur's eccentric family and uncover an amazing secret at the same time.`,
            rentID: `MRB07`,
            genre: `family`,
            ref: `https://www.imdb.com/title/tt0396555/?ref_=fn_al_tt_1`,
            available: false
        },
        {
            title: `Zootopia`,
            release: 2016,
            img: `images/zoo.jpg`,
            desc: `From the largest elephant to the smallest shrew, the city of Zootopia is a mammal metropolis where various animals live and thrive. When Judy Hopps (Ginnifer Goodwin) becomes the first rabbit to join the police force, she quickly learns how tough it is to enforce the law. Determined to prove herself, Judy jumps at the opportunity to solve a mysterious case. Unfortunately, that means working with Nick Wilde (Jason Bateman), a wily fox who makes her job even harder.`,
            rentID: `ZOO16`,
            genre: `family`,
            ref: `https://www.imdb.com/title/tt2948356/`,
            available: true
        },
        {
            title: `The Road to El Dorado`,
            release: 2000,
            img: `images/trted.jpg`,
            desc: `Two con-men (Kevin Kline, Kenneth Branagh) get hold of a map to the lost City of Gold, El Dorado. After stowing away onto one of the ships of the Spanish explorer Cortez, the pair escapes and eventually do find the city. There, a priest (Armand Assante) proclaims them to be gods in a scheme to win control of the city for himself. Meanwhile, they meet a beautiful girl (Rosie Perez) who helps them in their ruse.`,
            rentID: `TRED00`,
            genre: `family`,
            ref: `https://www.imdb.com/title/tt0138749/`,
            available: false
        },
        {
            title: `Lilo & Stitch`,
            release: 2002,
            img: `images/las.jpg`,
            desc: `A tale of a young girl's close encounter with the galaxy's most wanted extraterrestrial. Lilo is a lonely Hawaiian girl who adopts a small ugly "dog," whom she names Stitch. Stitch would be the perfect pet if he weren't in reality a genetic experiment who has escaped from an alien planet and crash-landed on Earth. Through her love, faith and unwavering belief in ohana, the Hawaiian concept of family, Lilo helps unlock Stitch's heart and gives him the ability to care for someone else.`,
            rentID: `LAS02`,
            genre: `family`,
            ref: `https://www.imdb.com/title/tt0275847/`,
            available: true
        },
        {
            title: `Star Wars III: Revenge of the Sith`,
            release: 2005,
            img: `images/sw3.jpg`,
            desc: `It has been three years since the Clone Wars began. Jedi Master Obi-Wan Kenobi (Ewan McGregor) and Jedi Knight Anakin Skywalker (Hayden Christensen) rescue Chancellor Palpatine (Ian McDiarmid) from General Grievous, the commander of the droid armies, but Grievous escapes. Suspicions are raised within the Jedi Council concerning Chancellor Palpatine, with whom Anakin has formed a bond. Asked to spy on the chancellor, and full of bitterness toward the Jedi Council, Anakin embraces the Dark Side.`,
            rentID: `SWIII05`,
            genre: `sci-fi`,
            ref: `https://www.imdb.com/title/tt0121766/`,
            available: true
        },
        {
            title: `Star Wars VI: Return of the Jedi`,
            release: 1983,
            img: `images/sw6.jpg`,
            desc: `Luke Skywalker (Mark Hamill) battles horrible Jabba the Hut and cruel Darth Vader to save his comrades in the Rebel Alliance and triumph over the Galactic Empire. Han Solo (Harrison Ford) and Princess Leia (Carrie Fisher) reaffirm their love and team with Chewbacca, Lando Calrissian (Billy Dee Williams), the Ewoks and the androids C-3PO and R2-D2 to aid in the disruption of the Dark Side and the defeat of the evil emperor.`,
            rentID: `SWVI83`,
            genre: `sci-fi`,
            ref: `https://www.imdb.com/title/tt0086190/?ref_=nv_sr_srsg_6`,
            available: false
        },
        {
            title: `Avatar`,
            release: 2009,
            img: `images/avt.jpg`,
            desc: `On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.`,
            rentID: `AVT09`,
            genre: `sci-fi`,
            ref: `https://www.imdb.com/title/tt0499549/`,
            available: true
        },
        {
            title: `Star Trek II: The Wrath of Khan`,
            release: 1982,
            img: `images/st2.jpg`,
            desc: `As Adm. James T. Kirk (William Shatner) and Capt. Spock (Leonard Nimoy) monitor trainees at Starfleet Academy, another vessel from the United Federation of Planets is about to try out the planet-creating Genesis Device in a seemingly deserted portion of space. In the process, two of Kirk's officers are captured by Khan (Ricardo Montalban), an enemy Kirk thought he'd never see again. Once more, Kirk takes the Enterprise's helm, where he meets Khan's ship in an intergalactic showdown.`,
            rentID: `STWK82`,
            genre: `sci-fi`,
            ref: `https://www.imdb.com/title/tt0084726/`,
            available: false
        },
        {
            title: `Back to the Future`,
            release: 1985,
            img: `images/bttf.jpg`,
            desc: `In this 1980s sci-fi classic, small-town California teen Marty McFly (Michael J. Fox) is thrown back into the '50s when an experiment by his eccentric scientist friend Doc Brown (Christopher Lloyd) goes awry. Traveling through time in a modified DeLorean car, Marty encounters young versions of his parents (Crispin Glover, Lea Thompson), and must make sure that they fall in love or he'll cease to exist. Even more dauntingly, Marty has to return to his own time and save the life of Doc Brown.`,
            rentID: `BTF85`,
            genre: `sci-fi`,
            ref: `https://www.imdb.com/title/tt0088763/`,
            available: true
        }

    ],

    mainHeading() {

        let title = createHeading({ text: `Pari's Movie Rentals`, id: `mainHeading`, size: 1 });

        document.body.appendChild(title);

    },

    displayAllMovies() {

        let aDiv = document.getElementById(`aDiv`),
            rDiv = document.getElementById(`rDiv`);

        let aHeading = createHeading({
            text: `Avaiable Movies`,
            size: 1,
            id: `aHeading`
        });

        let aMovies = createDiv({ id: `allAvailable`, class: `movieDivs` });

        aDiv.appendChild(aHeading);
        aDiv.appendChild(aMovies);

        movieRental.allMovies.filter(object => { return object.available == true }).sort((a, b) => { if (a.title > b.title) { return 1 } else { return -1 } }).forEach(movieObj => {

            let mDiv = createDiv({ id: `${movieObj.title.substr(0,3)}Div`, class: `singleMovieDiv` });
            let movieTitle = createHeading({ text: `${movieObj.title}`, size: 2, id: `${movieObj.title.substr(0,3)}Title` });
            let releaseDate = createHeading({ text: `Realease Year: ${movieObj.release.toString()}`, size: 4, id: `${movieObj.title.substr(0,3)}Release` });
            let movieImages = createImage({ src: movieObj.img, alt: `${movieObj.title}.img`, id: `${movieObj.title.substr(0,3)}Img`, class: `movieImg` });
            movieImages.ondblclick = movieRental.transferMovies;
            movieImages.value = movieObj.rentID;

            let movieImgDiv = createDiv({ id: `${movieObj.title.substr(0,3)}Info`, class: `imgDiv` });
            let rentMe = createParagraph({ text: `Double Click to Rent!` });
            rentMe.className = `rentMe`;
            rentMe.ondblclick = movieRental.transferMovies;
            rentMe.value = movieObj.rentID;

            let movieRef = createHREF({ id: `${movieObj.title.substr(0,3)}Ref`, ref: movieObj.ref, display: `Click Here for More Info!`, newTab: true });
            let description = createParagraph({ text: movieObj.desc });
            description.className = `description`;

            aMovies.appendChild(mDiv);
            mDiv.appendChild(movieTitle);
            mDiv.appendChild(releaseDate);

            mDiv.appendChild(movieImgDiv);
            movieImgDiv.appendChild(movieImages);
            movieImgDiv.appendChild(rentMe);
            movieImgDiv.appendChild(movieRef);
            movieImgDiv.appendChild(description);

        })

        let rHeading = createHeading({
            text: `Unavailable Movies`,
            size: 1,
            id: `rHeading`
        });

        let rMovies = createDiv({ id: `allRented`, class: `movieDivs` });

        rDiv.appendChild(rHeading);
        rDiv.appendChild(rMovies);

        movieRental.allMovies.filter(object => { return object.available == false }).sort((a, b) => { if (a.title > b.title) { return 1 } else { return -1 } }).forEach(movieObj => {

            let mDiv = createDiv({ id: `${movieObj.title.substr(0,3)}Div`, class: `singleMovieDiv` });
            let movieTitle = createHeading({ text: movieObj.title, size: 2, id: `${movieObj.title.substr(0,3)}Title` });
            let releaseDate = createHeading({ text: `Realease Year: ${movieObj.release.toString()}`, size: 4, id: `${movieObj.title.substr(0,3)}Release` });
            let movieImages = createImage({ src: movieObj.img, alt: `${movieObj.title}.img`, id: `${movieObj.title.substr(0,3)}Img`, class: `movieImg` });
            movieImages.ondblclick = movieRental.transferMovies;
            movieImages.value = movieObj.rentID;

            let movieImgDiv = createDiv({ id: `${movieObj.title.substr(0,3)}Info`, class: `imgDiv` });
            let returnMe = createParagraph({ text: `Double Click to Return!` });
            returnMe.className = `returnMe`;
            returnMe.ondblclick = movieRental.transferMovies;
            returnMe.value = movieObj.rentID;

            let movieRef = createHREF({ id: `${movieObj.title.substr(0,3)}Ref`, ref: movieObj.ref, display: `Click Here for More Info!`, newTab: true });
            let description = createParagraph({ text: movieObj.desc });
            description.className = `description`;

            rMovies.appendChild(mDiv);
            mDiv.appendChild(movieTitle);
            mDiv.appendChild(releaseDate);

            mDiv.appendChild(movieImgDiv);
            movieImgDiv.appendChild(movieImages);
            movieImgDiv.appendChild(returnMe);
            movieImgDiv.appendChild(movieRef);
            movieImgDiv.appendChild(description);

        })

    },

    createMovieSelects() {

        let availableMovies = movieRental.allMovies.filter(object => { return object.available == true }).sort((a, b) => { if (a.title > b.title) { return 1 } else { return -1 } });
        let aSelect = createSelect({ id: `aSelect`, class: `movieSelects`, defOp: `Select A Movie`, defOpID: `defaultOption`, data: availableMovies, onchange: movieRental.transferMovies });
        let aSelectHeading = createHeading({ text: `Select to rent!`, size: 4, id: `aSelectHeading` });

        let rentedMovies = movieRental.allMovies.filter(object => { return object.available == false }).sort((a, b) => { if (a.title > b.title) { return 1 } else { return -1 } });
        let rSelect = createSelect({ id: `rSelect`, class: `movieSelects`, defOp: `Select A Movie`, defOpID: `defaultOption`, data: rentedMovies, onchange: movieRental.transferMovies });
        let rSelectHeading = createHeading({ text: `Select to return!`, size: 4, id: `rSelectHeading` });

        let sidebar = document.getElementById(`sidebar`);
        sidebar.appendChild(aSelectHeading);
        sidebar.appendChild(aSelect);
        sidebar.appendChild(rSelectHeading);
        sidebar.appendChild(rSelect);

    },

    // for transferring with selects
    transferMovies() {

        let selectElm = this;
        // when `this` is used with a select element onChange Event, it takes
        // ... the data from the select itself (USE WITH SOME OTHERS AND TEST OUT),
        // ... to get the value of the selected item, this.value
        let choosenMovie = selectElm.value;
        let movies = movieRental.allMovies;

        //* first way
        //^ longest but easier to understand
        // for (let a = 0; a < movies.length; a++) {

        //     if (choosenMovie == movies[a].rentID) {

        //         if (movies[a].available == true) {

        //             movies[a].available = false;

        //              //! created a method specifcally for refreshing front end
        //              //* can reuse this to update front end
        //             document.getElementById(`aDiv`).innerHTML = ``;
        //             document.getElementById(`rDiv`).innerHTML = ``;
        //             movieRental.displayAllMovies();
        //             document.getElementById(`sidebar`).innerHTML = ``;
        //             movieRental.createMovieSelects();

        //              movieRental.refreshFrontEnd();

        //         } else {

        //             movies[a].available = true;

        //              //! created a method specifcally for refreshing front end
        //              //* can reuse this to update front end
        //             document.getElementById(`aDiv`).innerHTML = ``;
        //             document.getElementById(`rDiv`).innerHTML = ``;
        //             movieRental.displayAllMovies();
        //             document.getElementById(`sidebar`).innerHTML = ``;
        //             movieRental.createMovieSelects();

        //              movieRental.refreshFrontEnd();

        //         }

        //     }

        // }

        //* second way
        //^ defintely shorter and easy to understand
        movies.forEach(obj => {

            if (choosenMovie == obj.rentID) {

                obj.available = obj.available ? false : true;

                //! created a method specifcally for refreshing front end
                //* can reuse this to update front end
                // document.getElementById(`aDiv`).innerHTML = ``;
                // document.getElementById(`rDiv`).innerHTML = ``;
                // movieRental.displayAllMovies();
                // document.getElementById(`sidebar`).innerHTML = ``;
                // movieRental.createMovieSelects();

                movieRental.refreshFrontEnd();

            }

            //* third way, also within a forEach()
            //^ shortest, but may need more thought to order the ternary operator correctly
            // obj.available = obj.rentID === choosenMovie ? !obj.available : obj.available;

            //! created a method specifcally for refreshing front end
            //* can reuse this to update front end
            // document.getElementById(`aDiv`).innerHTML = ``;
            // document.getElementById(`rDiv`).innerHTML = ``;
            // movieRental.displayAllMovies();
            // document.getElementById(`sidebar`).innerHTML = ``;
            // movieRental.createMovieSelects();

            //  movieRental.refreshFrontEnd();

        })


    },

    refreshFrontEnd() {

        document.getElementById(`aDiv`).innerHTML = ``;
        document.getElementById(`rDiv`).innerHTML = ``;
        document.getElementById(`sidebar`).innerHTML = ``;
        movieRental.displayAllMovies();
        movieRental.createMovieSelects();

    }

}

//^ IF GOING TO REUSE ANY OF THESE FUNCTIONS, EDIT WHERE NEEDED
//^ IF GOING TO REUSE ANY OF THESE FUNCTIONS, EDIT WHERE NEEDED
//^ IF GOING TO REUSE ANY OF THESE FUNCTIONS, EDIT WHERE NEEDED

function createInitialDivs() {

    let mainDiv = createDiv({ id: `mainContainer` }),
        internalsDiv = createDiv({ id: `internalsDiv` }),
        moviesDiv = createDiv({ id: `movieContainers` }),
        sidebar = createDiv({ id: `sidebar` }),
        availableDiv = createDiv({ id: `aDiv` }),
        rentedDiv = createDiv({ id: `rDiv` });

    document.body.appendChild(mainDiv);
    mainDiv.appendChild(internalsDiv);
    internalsDiv.appendChild(moviesDiv);
    internalsDiv.appendChild(sidebar);
    moviesDiv.appendChild(availableDiv);
    moviesDiv.appendChild(rentedDiv);

}


function createDiv(divObj) {

    let div = document.createElement(`div`);

    div.id = divObj.id != undefined && document.getElementById(divObj.id) == null ? divObj.id : `>> No ID <<`;

    div.className = divObj.class != undefined ? divObj.class : ``;

    return div

};

function createHeading(headingObj) {

    let heading = headingObj.size >= 1 && headingObj.size <= 5 ? document.createElement(`h` + headingObj.size) : document.createElement(`h5`);

    heading.innerHTML = typeof headingObj.text == `string` ? headingObj.text : `>> No text <<`;

    heading.id = headingObj.id != undefined && document.getElementById(headingObj.id) == null ? headingObj.id : `>> No ID <<`;

    return heading

};

function createParagraph(paraObj) {

    let paragraph = document.createElement(`p`);

    paragraph.innerHTML = paraObj.text != undefined ? paraObj.text : `>> No Text <<`;

    return paragraph

}

function createImage(imageObj) {

    let image = document.createElement(`img`);

    image.src = imageObj.src != undefined ? imageObj.src : `images/default.jpg`;

    image.alt = imageObj.alt != undefined ? imageObj.alt : `image couldn't load; broke`;

    image.id = imageObj.id != undefined && document.getElementById(imageObj.id) == null ? imageObj.id : `>> No ID <<`;

    image.className = imageObj.class != undefined ? imageObj.class : ``;

    return image

};

function createButton(buttonObj) {

    let button = document.createElement(`button`);

    button.id = buttonObj.id != undefined && document.getElementById(buttonObj.id) == null ? buttonObj.id : `>> No ID <<`;

    button.className = buttonObj.class != undefined ? buttonObj.class : ``;

    button.innerHTML = typeof buttonObj.text == `string` ? buttonObj.text : `>> No Text <<`;

    button.onclick = buttonObj.method != undefined && typeof buttonObj.method == `function` ? buttonObj.method : `>> No function <<`;

    return button

};

function createHREF(hrefObj) {

    let href = document.createElement(`a`);

    href.id = hrefObj.id != undefined && document.getElementById(hrefObj.id) == null ? hrefObj.id : `>> No ID <<`;

    href.target = hrefObj.newTab === true ? href.target = `_blank` : ``;

    href.href = hrefObj.ref != undefined ? hrefObj.ref : `>> No Referenece <<`;

    href.innerHTML = hrefObj.display != undefined ? hrefObj.display : `>> No Display <<`;

    return href
};

function createSelect(selectObj) {

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

movieRental.mainHeading();
createInitialDivs();
movieRental.displayAllMovies();
movieRental.createMovieSelects();