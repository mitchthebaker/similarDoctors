//Import statement for the doctorData variable that contains all of the doctor information
import doctorData from "../data/doctorData.js";

//Initialization of the doctorData array set equal to the variable 'data'
let data = doctorData;

/* 'element' object literal will contain all the query's to DOM elements
 *
 *      'listDoctors' is the name given to the DOM <section> element of class name 'listDoctors'
 *      'doctorDivs' is a list of all the DOM elements with class 'doctorDiv'
 *      'doctorDivsArray()' is the same as 'doctorDivs' but as an Array
 *      'overlay' is the <section> element with the corresponding class name
 *      'overlay_inner' is the <div> within the 'overlay' <section> element
 *      'closeOverlay' is the <button> element that closes the 'overlay element
 */
let element = {
    listDoctors: document.querySelector('.listDoctors'),
    doctorDivs: document.querySelectorAll('.doctorDiv'),
    doctorDivsArray: function() {
        return Array.prototype.slice.call(this.doctorDivs);
    },
    overlay: document.querySelector('.overlay'),
    overlay_inner: document.querySelector('.overlay-inner'),
    closeOverlay: document.querySelector('.closeOverlay')
};

//The openEvent() function adds the showOverlay class for
// each one of the 'doctorDiv' elements when clicked
const openEvent = function() {
    element.doctorDivs.forEach(() => element.overlay.classList.add('showOverlay'));
};

/* The updateDoctorInfo() function uses the 'doctorDivsArray' Array,
 * and then applies the .forEach() method to all of it's contents.
 */
const updateDoctorInfo = function() {

    element.doctorDivsArray().forEach(function(el) {

        //An .addEventListener() method is applied to the 'el' element clicked
        el.addEventListener('click', function() {

            //The while loop removes any elements that were in the 'overlay_inner'
            //tag previously
            while(element.overlay_inner.firstChild) {
                element.overlay_inner.removeChild(element.overlay_inner.firstChild);
            }

            //Variable 'doctor' is the 'doctorDiv' tag that the user clicked on
            let doctor = data[element.doctorDivsArray().indexOf(el)];

            //Variable 'doctorDiv' is a new <div> element
            let doctorDiv = document.createElement('div');

            //Create the inner element for displaying related doctors
            //Array relatedDoctors holds the doctor's that have a score of 5
            let relatedDoctors = [];
            data.forEach(function(element) {
                if(element.score === 5) {
                    relatedDoctors.push(element);
                }
            });

            //The elements below will be added to the inside of the new 'doctorDiv' element
            doctorDiv.innerHTML = "<div class='currentDoctor'>" +
                                    "<h3 class='doctorDiv-innerh3'>" + doctor.name + "</h3>" +
                                    "<h4 class='doctorDiv-innerh4'>" + "Profession: " + doctor.profession + "</h4>" +
                                    "<h4 class='doctorDiv-innerh4'>" + "Area: " + doctor.area + "</h4>" +
                                    "<h4 class='doctorDiv-innerh4'>" + "Experience: " + doctor.experience + "</h4>" +
                                    "<h4 class='doctorDiv-innerh4'>" + "Score: " + doctor.score + "</h4>" +
                                  "</div>" +
                                  "<div class='relatedDoctors'>" +
                                    "<h3 class='doctorDiv-innerh3'>" + relatedDoctors[0].name + "</h3>" +
                                    "<h4 class='doctorDiv-innerh4'>" + "Score: " + relatedDoctors[0].score + "</h4>" +
                                    "<h3 class='doctorDiv-innerh3'>" + relatedDoctors[1].name + "</h3>" +
                                    "<h4 class='doctorDiv-innerh4'>" + "Score: " + relatedDoctors[1].score + "</h4>" +
                                    "<h3 class='doctorDiv-innerh3'>" + relatedDoctors[2].name + "</h3>" +
                                    "<h4 class='doctorDiv-innerh4'>" + "Score: " + relatedDoctors[2].score + "</h4>" +
                                    "<h3 class='doctorDiv-innerh3'>" + relatedDoctors[3].name + "</h3>" +
                                    "<h4 class='doctorDiv-innerh4'>" + "Score: " + relatedDoctors[3].score + "</h4>" +
                                  "</div>";

            //'doctorDiv' is given the class name 'doctorDiv-overlay'
            doctorDiv.setAttribute('class', 'doctorDiv-overlay');

            //'doctorDiv' is appended within the 'overlay_inner' tag
            element.overlay_inner.appendChild(doctorDiv);
        });
    });
}

//.addEventListener() methods that correspond to the functions above
element.listDoctors.addEventListener('click', openEvent, false);
element.listDoctors.addEventListener('click', updateDoctorInfo, false);

//When the user clicks the 'closeOverlay' <button> tag, the overlay will close
element.closeOverlay.addEventListener('click', function() {
    element.overlay.classList.remove('showOverlay');
}, false);
