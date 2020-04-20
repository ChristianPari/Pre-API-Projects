This is my first attempt at making a functioning date selector via BUTTON manipulation by the user. All the HTML ELEMENTS are created within JS.

<a href="#demo">Click here to view demo</a>

First step was to create the GLOBAL VARIABLES that I'd be using for this program, which became my first time using the DATE OBJECT which proved to be an amazing feature. Created the new instance of the DATE OBJECT, then within my calnedar OBJECT I created VARIABLES for the current day, month (which I realized later that the month is displayed via 0-11 so I added 1 to this var to give me the correct current month) and year.

First function was created to display the neccessary ELEMENTS to the DOM; date HEADING and manipulating BUTTON. Then had to created the ONCLICK function, which since I made all the BUTTONs run off the same ONCLICK function then I created seperate functions for each BUTTON but within this main function I used a SWITCH that depending on the CASE it would run the function that corresponded to each BUTTON. Within this function I implemented a few IF STATEMENTs that will modify the date info within my GLOBAL calendar OBJECT if a 'false date' is created; for example, if the user tries to go to Feb 29 and it isnt a leap year then the days will only go up to 28. Then follows code to update the FRONT END just before the function ends.

The DAY functions needed the most code and logic to run properly. Had to check what month it was which would access an array with the amount of days each month had as indexes; if end of month continue to next month and reset day to 1; if the month is Dec and the day is 31st then increase the year, change month to Jan and day to 1st; ect.

The MONTH functions had less coding and logic; just had to ensure that if was Dec or Jan that the following month would either restart from Jan or go back to Dec as well as increase or decrease the YEAR.

The YEAR functions were the simpliest; these just included logic ensuring that the years couldn't go negative and otherwise just increase.

<div id="demo">
https://user-images.githubusercontent.com/62902638/78824152-e36a8980-79ab-11ea-94c6-132f7a0b9816.gif
</div>
