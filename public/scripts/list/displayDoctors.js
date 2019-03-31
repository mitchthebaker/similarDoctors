//Import statement for the doctorData variable that contains all of the doctor information
import doctorData from "../data/doctorData.js";

//Initialization of the doctorData array set equal to the variable 'data'
let data = doctorData;

/* 'element' object literal will contain all the query's to DOM elements
 *
 *      'listDoctors' is the name given to the DOM <section> element of class name 'listDoctors'
 */
let element = {
    listDoctors: document.querySelector('.listDoctors')
};

/* The following for loop will iterate over the 'data' Array. A new 'doctorDiv' <div>
 * tag will be created on each iteration.
 *
 *      Line 26: innerHTML is set to a <h3> tag along with the name of the doctor
 *      Line 27: .setAttribute method is used to set "doctorDiv's" class to 'doctorDiv'
 *      Line 28: the current doctorDiv element is appended to the <section> 'listDoctors'
 */
for(let i = 0; i < data.length; i++) {

    let doctorDiv = document.createElement('div');

    doctorDiv.innerHTML = "<h3 class='doctorDiv-innerh3'>" + data[i].name + "</h3>";
    doctorDiv.setAttribute('class', 'doctorDiv');
    element.listDoctors.appendChild(doctorDiv);
}

export default element;



