This folder contains versions of this project that I completed on my own.

Short summary of each versions capabilities:
* Version 1:
    - Functions through BUTTON ELEMENTS that have ONCLICK methods attributed to them that allow the user to cycle through dates. Implemented a solution to ensure that a user cannot come across any `fake dates` such as Febuary 30th or 31st and so on

* Version 2:
    - Functions by way of SELECT ELEMENTS that allow the user to have a drop down and select dates in order of YEAR then MONTH then DAY. Implemented a solution to ensure that a user cannot come across any `fake dates` such as Febuary 30th or 31st and so on

* Version 3:
    - JavaScript is the same as v2, this version was my first attempts at implementing some CSS to the program

* Version 4:
    - I wanted to make the UI feel more like a widget for now until I really get to the point of making an actual calendar. This program allows the user to change dates via SELECT ELEMENTS, make notes for the selected date via BUTTON ELEMENTS and if the note section becomes larger than the display box it becomes a SCROLLABLE DIV, and then the user can choose to hide (DISPLAY for DIV has OPACITY OF 0, and the display box shrinks back down) or show (DISPLAY for DIV TRANSITIONS to 1, display box expands) the notes section, which has some CSS TRANSITIONS to make it feel more smooth.

* Version 5:
    - This version I managed to merge together code from other versions and get there to be 3 main BUTTON ELEMENTS that are the main part of the UI. The user can click a BUTTON to change the date via SELECT ELEMENTS (YEAR then MONTH then DAY, each disappears before the next appears) or via BUTTONs to go forward or backwards for MONTH DAY or YEAR, and the user can choose to go back to the main UI whenever via a red 'X' BUTTON which acts as a close BUTTON. The user then can make notes for the selected date via BUTTON ELEMENTS and if the note section becomes larger than the display box it becomes a SCROLLABLE DIV. The user can choose to hide (DISPLAY for DIV has OPACITY OF 0, and the display box shrinks back down) or show (DISPLAY for DIV TRANSITIONS to 1, display box expands) the notes section (this section is hidden by default), which has some CSS TRANSITIONS to make it feel more smooth.