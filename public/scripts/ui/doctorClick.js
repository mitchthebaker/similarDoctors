//Import statement for the doctorData variable that contains all of the doctor information
import doctorData from "../data/doctorData.js";

//Initialization of the doctorData array set equal to the variable 'data'
let data = doctorData;

/* 'element' object literal will contain all the query's to DOM elements
 *
 *      'listDoctors' is the name given to the DOM <section> element of class name 'listDoctors'
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

const openEvent = function() {
    element.doctorDivs.forEach(() => element.overlay.classList.add('showOverlay'));
};

const updateDoctorInfo = function() {
    element.doctorDivsArray().forEach(function(el) {
        el.addEventListener('click', function() {
            while(element.overlay_inner.firstChild) {
                element.overlay_inner.removeChild(element.overlay_inner.firstChild);
            }

            let doctor = data[element.doctorDivsArray().indexOf(el)]
            let doctorDiv = document.createElement('div');

            //Create the inner element for displaying related doctors
            let relatedDoctors = [];
            data.forEach(function(element) {
                if(element.score === 5) {
                    relatedDoctors.push(element);
                }
            });

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
            doctorDiv.setAttribute('class', 'doctorDiv-overlay');
            element.overlay_inner.appendChild(doctorDiv);
        });
    });
}

element.listDoctors.addEventListener('click', openEvent, false);
element.listDoctors.addEventListener('click', updateDoctorInfo, false);

element.closeOverlay.addEventListener('click', function() {
    element.overlay.classList.remove('showOverlay');
}, false);
