$(document).ready(hereWeGo);

// fucntion that starts the whole thing
// hereWeGo function
function hereWeGo() {
    console.log('In hereWeGo function!');
}

// What do I need to do?
// My todo list
// - define variables
// - split up functionality into functions
// - create a function that takes inputs and pushes an object to an array

// GLOBAL VARIABLES! ----------------------------------------------
//
// From the DOM in jQuery =========================================
// Input variables with values:
const firstNameInputValue = $('#first-name').val();
const lastNameInputValue = $('#last-name').val();
const iDInputValue = $('#id').val();
const titleInputValue = $('#title').val();
const annualSalaryInputValue = $('#annual-salary').val();
// Input submit button variable:
const inputSubitionButton = $('#submit-btn');
// End of jQuery global variables ================================
//
// Straight JavaScript variables =================================
// Array where employee objects will be stored
const addedEmployeeArray = [];
// End of JavaScript global variables ============================
//
// End of GLOBAL VARIABLES ---------------------------------------


// JAVSCRIPT FUNCTIONS! ----------------------------------------------------------------------
// ~ addingEmployeesIntoArray function ~
// - Straight JavaScript takes 5 parameters and creates an object then pushes object to global array
function addingEmployeesIntoArray(firstName, lastName, iD, title, annualSalary) {
    console.log('In addingEmployeesIntoArray function!');
    const employeeNew = {
        first: firstName,
        last: lastName,
        id: iD,
        title: title,
        salary: annualSalary
    };
    addedEmployeeArray.push(employeeNew);
}
// ~ End of addingEmployeesIntoArray function ~