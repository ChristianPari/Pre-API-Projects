Third attempt at a date selector; functionallity via SELECT ELEMENTS. All the HTML ELEMENTS are created within JS.
`FUNCTIONALLITY IS IDENTICAL TO VERSION 2 BUT I ADDED CSS TO THIS VERSION`

<a href="#demo">Click here to view demo</a>

First step was to create the GLOBAL VARIABLES that I'd be using for this program which I created a single OBJECT and placed them within via KEY/VALUE pairs. This one I did not use the DATE OBJECT but instead I set a years limit by setting it to 2020 and a months limit to 12. I then created a variable that was an ARRAY of KEY/VALUE pairs of each month via a number and it's length of days; [{1:31},{2:28}...]. Then an array that I would store the day month and year data in before converting to a STRING to display onto the DOM.

Next I created the DOM ELEMENTS in a function thats called first to get those displayed. ELEMENTS include:
* HEADING for the date which has it's display set to 'none' until the user selects a date
* a begin BUTTON that via ONCLICK CREATES and APPENDS the SELECT ELEMENT for the year to the DOM.
Later on in my code I create a 'restart BUTTON' which when clicked resets the DOM to its initial look with just the begin BUTTON. So within thi function to create these first ELEMENTS there's a IF STATEMENT that checks to see if the restart BUTTON exists which if it does then it resets the DOM first.

Next function is to show the SELECTS which starts with YEAR, this function also runs another that actually creates options for the ELEMENT. (This is the same process for the MONTH and DAY SELECTS as well). Only difference would be the code logic for what needs to be checked, which for month it just checks if the year selected is a leap year and if it is then it sets the VALUE of the KEY 2 inside the ARRAY of my GLOBAL VARIABLE to 29.

The last function is where the most of coding takes place. This is where the OPTIONS that were selected modify the data within my GLOBAL OBJECT, used within the SELECT OPTIONS functions so that they are filled with the correct data. But also to then create the date heading at the end of the program. I used IF ELSE STATEMENTS to distinguish between which SELECT ELEMENT was the one being changed which would then set that ELEMENT to a display of 'none' and the following SELECT to a display of 'initial'. Then lastly on the day SELECT, once that option is made the date HEADING reappears with the selected date being displayed. The date is created via a function that extracts the data inside the array that I created and push each option and converts it into a string.

<div id="demo">
https://user-images.githubusercontent.com/62902638/79369410-e7a02500-7f1e-11ea-9670-f55048e4fddb.gif
</div>