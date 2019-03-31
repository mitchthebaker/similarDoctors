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

//Import statement for the doctorData variable that contains all of the doctor information
import doctorData from "../data/doctorData.js";

//Initialization of the doctorData array set equal to the variable 'data'
let data = doctorData;

/* 'element' object literal will contain all the query's to DOM elements
 *
 *      'listDoctors' is the name given to the DOM <section> element of class name 'listDoctors'
 *      'drop1_choice1' are the dropdown menu choices available for the user to narrow down the
 *      selection of doctors they are currently looking at.
 */
let element = {
    listDoctors: document.querySelector('.listDoctors'),
    drop1_choice1: document.querySelector('#drop1-choice1'),
    drop1_choice2: document.querySelector('#drop1-choice2'),
    drop2_choice1: document.querySelector('#drop2-choice1'),
    drop2_choice2: document.querySelector('#drop2-choice2'),
    drop3_choice1: document.querySelector('#drop3-choice1'),
    drop3_choice2: document.querySelector('#drop3-choice2'),
    drop3_choice3: document.querySelector('#drop3-choice3'),
    drop3_choice4: document.querySelector('#drop3-choice4'),
    drop3_choice5: document.querySelector('#drop3-choice5'),
    drop4_choice1: document.querySelector('#drop4-choice1'),
    drop4_choice2: document.querySelector('#drop4-choice2'),
    drop4_choice3: document.querySelector('#drop4-choice3'),
    drop4_choice4: document.querySelector('#drop4-choice4'),
    drop4_choice5: document.querySelector('#drop4-choice5')
};

/* Each of the .addEventListener methods below correspond to each of the dropdown menu choices that were
 * query selected from above.
 *
 * When a dropdown menu choice is clicked, the list of doctors in the 'listDoctors' <section>
 * element will be updated according to the dropdown menu choice selected.
 */

//.addEventListener() method for Psychiatrist
element.drop1_choice1.addEventListener('click', function() {
    while(element.listDoctors.firstChild) {
        element.listDoctors.removeChild(element.listDoctors.firstChild);
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].profession === 'Psychiatrist') {
            let doctorDiv = document.createElement('div');

            doctorDiv.innerHTML = "<h3 class='doctorDiv-innerh3'>" + data[i].name + "</h3>";
            doctorDiv.setAttribute('class', 'doctorDiv');
            element.listDoctors.appendChild(doctorDiv);
        }
    }
}, false);

//.addEventListener() method for Psychologist
element.drop1_choice2.addEventListener('click', function() {
    while(element.listDoctors.firstChild) {
        element.listDoctors.removeChild(element.listDoctors.firstChild);
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].profession === 'Psychologist') {
            let doctorDiv = document.createElement('div');

            doctorDiv.innerHTML = "<h3 class='doctorDiv-innerh3'>" + data[i].name + "</h3>";
            doctorDiv.setAttribute('class', 'doctorDiv');
            element.listDoctors.appendChild(doctorDiv);
        }
    }
}, false);

//.addEventListener() method for San Francisco
element.drop2_choice1.addEventListener('click', function() {
    while(element.listDoctors.firstChild) {
        element.listDoctors.removeChild(element.listDoctors.firstChild);
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].area === 'San Francisco') {
            let doctorDiv = document.createElement('div');

            doctorDiv.innerHTML = "<h3 class='doctorDiv-innerh3'>" + data[i].name + "</h3>";
            doctorDiv.setAttribute('class', 'doctorDiv');
            element.listDoctors.appendChild(doctorDiv);
        }
    }
}, false);

//.addEventListener() method for Seattle
element.drop2_choice2.addEventListener('click', function() {
    while(element.listDoctors.firstChild) {
        element.listDoctors.removeChild(element.listDoctors.firstChild);
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].area === 'Seattle') {
            let doctorDiv = document.createElement('div');

            doctorDiv.innerHTML = "<h3 class='doctorDiv-innerh3'>" + data[i].name + "</h3>";
            doctorDiv.setAttribute('class', 'doctorDiv');
            element.listDoctors.appendChild(doctorDiv);
        }
    }
}, false);

//.addEventListener() method for a score of 5
element.drop3_choice1.addEventListener('click', function() {
    while(element.listDoctors.firstChild) {
        element.listDoctors.removeChild(element.listDoctors.firstChild);
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].score === 5) {
            let doctorDiv = document.createElement('div');

            doctorDiv.innerHTML = "<h3 class='doctorDiv-innerh3'>" + data[i].name + "</h3>";
            doctorDiv.setAttribute('class', 'doctorDiv');
            element.listDoctors.appendChild(doctorDiv);
        }
    }
}, false);

//.addEventListener() method for a score of 4
element.drop3_choice2.addEventListener('click', function() {
    while(element.listDoctors.firstChild) {
        element.listDoctors.removeChild(element.listDoctors.firstChild);
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].score === 4) {
            let doctorDiv = document.createElement('div');

            doctorDiv.innerHTML = "<h3 class='doctorDiv-innerh3'>" + data[i].name + "</h3>";
            doctorDiv.setAttribute('class', 'doctorDiv');
            element.listDoctors.appendChild(doctorDiv);
        }
    }
}, false);

//.addEventListener() method for a score of 3
element.drop3_choice3.addEventListener('click', function() {
    while(element.listDoctors.firstChild) {
        element.listDoctors.removeChild(element.listDoctors.firstChild);
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].score === 3) {
            let doctorDiv = document.createElement('div');

            doctorDiv.innerHTML = "<h3 class='doctorDiv-innerh3'>" + data[i].name + "</h3>";
            doctorDiv.setAttribute('class', 'doctorDiv');
            element.listDoctors.appendChild(doctorDiv);
        }
    }
}, false);

//.addEventListener() method for a score of 2
element.drop3_choice4.addEventListener('click', function() {
    while(element.listDoctors.firstChild) {
        element.listDoctors.removeChild(element.listDoctors.firstChild);
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].score === 2) {
            let doctorDiv = document.createElement('div');

            doctorDiv.innerHTML = "<h3 class='doctorDiv-innerh3'>" + data[i].name + "</h3>";
            doctorDiv.setAttribute('class', 'doctorDiv');
            element.listDoctors.appendChild(doctorDiv);
        }
    }
}, false);

//.addEventListener() method for a score of 1
element.drop3_choice5.addEventListener('click', function() {
    while(element.listDoctors.firstChild) {
        element.listDoctors.removeChild(element.listDoctors.firstChild);
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].score === 1) {
            let doctorDiv = document.createElement('div');

            doctorDiv.innerHTML = "<h3 class='doctorDiv-innerh3'>" + data[i].name + "</h3>";
            doctorDiv.setAttribute('class', 'doctorDiv');
            element.listDoctors.appendChild(doctorDiv);
        }
    }
}, false);

//.addEventListener() method for an experience of less than 5 years
element.drop4_choice1.addEventListener('click', function() {
    while(element.listDoctors.firstChild) {
        element.listDoctors.removeChild(element.listDoctors.firstChild);
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].experience < 5) {
            let doctorDiv = document.createElement('div');

            doctorDiv.innerHTML = "<h3 class='doctorDiv-innerh3'>" + data[i].name + "</h3>";
            doctorDiv.setAttribute('class', 'doctorDiv');
            element.listDoctors.appendChild(doctorDiv);
        }
    }
}, false);

//.addEventListener() method for an experience between 5-10 years
element.drop4_choice2.addEventListener('click', function() {
    while(element.listDoctors.firstChild) {
        element.listDoctors.removeChild(element.listDoctors.firstChild);
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].experience >= 5 && data[i].experience <= 10) {
            let doctorDiv = document.createElement('div');

            doctorDiv.innerHTML = "<h3 class='doctorDiv-innerh3'>" + data[i].name + "</h3>";
            doctorDiv.setAttribute('class', 'doctorDiv');
            element.listDoctors.appendChild(doctorDiv);
        }
    }
}, false);

//.addEventListener() method for an experience between 10-15 years
element.drop4_choice3.addEventListener('click', function() {
    while(element.listDoctors.firstChild) {
        element.listDoctors.removeChild(element.listDoctors.firstChild);
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].experience >= 10 && data[i].experience <= 15) {
            let doctorDiv = document.createElement('div');

            doctorDiv.innerHTML = "<h3 class='doctorDiv-innerh3'>" + data[i].name + "</h3>";
            doctorDiv.setAttribute('class', 'doctorDiv');
            element.listDoctors.appendChild(doctorDiv);
        }
    }
}, false);

//.addEventListener() method for an experience between 15-20 years
element.drop4_choice4.addEventListener('click', function() {
    while(element.listDoctors.firstChild) {
        element.listDoctors.removeChild(element.listDoctors.firstChild);
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].experience >= 15 && data[i].experience <= 20) {
            let doctorDiv = document.createElement('div');

            doctorDiv.innerHTML = "<h3 class='doctorDiv-innerh3'>" + data[i].name + "</h3>";
            doctorDiv.setAttribute('class', 'doctorDiv');
            element.listDoctors.appendChild(doctorDiv);
        }
    }
}, false);

//.addEventListener() method for an experience between 20+ years
element.drop4_choice5.addEventListener('click', function() {
    while(element.listDoctors.firstChild) {
        element.listDoctors.removeChild(element.listDoctors.firstChild);
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].experience >= 20) {
            let doctorDiv = document.createElement('div');

            doctorDiv.innerHTML = "<h3 class='doctorDiv-innerh3'>" + data[i].name + "</h3>";
            doctorDiv.setAttribute('class', 'doctorDiv');
            element.listDoctors.appendChild(doctorDiv);
        }
    }
}, false);


