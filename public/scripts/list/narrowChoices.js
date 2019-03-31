/* The purpose of narrowChoices.js is to display a new set of choices to the user
 * when they select a choice from the dropdown menus available.
 *
 * The current options are currently available:
 *      1. Specialty
 *      2. Area
 *      3. Score
 *      4. Experience
 *
 *  According to the user's choice, the names of doctors will be updated for the user to see
 */

/* 'element' object literal will contain all the query's to DOM elements
 *
 *      'listDoctors' is the name given to the DOM <section> element of class name 'listDoctors'
 */
let element = {
    listDoctors: document.querySelector('.listDoctors'),

};

