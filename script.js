$(document).ready(hereWeGo);

// fucntion that starts the whole thing
// hereWeGo function
function hereWeGo() {
    console.log('In hereWeGo function!');
    inputSubmissionClickHandler();
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
// const firstNameInputValue = $('#first-name').val();
// const lastNameInputValue = $('#last-name').val();
// const iDInputValue = Number($('#id').val());
// const titleInputValue = $('#title').val();
// const annualSalaryInputValue = Number($('#annual-salary').val());
// Input submit button variable:
// const inputSubmissionButton = $('#submit-btn');
// End of jQuery global variables ================================
//
// Straight JavaScript variables =================================
// Array where employee objects will be stored
const addedEmployeeArray = [];
// End of JavaScript global variables ============================
//
// End of GLOBAL VARIABLES ---------------------------------------


// JAVSCRIPT FUNCTIONS! ----------------------------------------------------------------------
//
// ~ addingEmployeesIntoArray function ~
// - Straight JavaScript takes 5 parameters and creates an object then pushes object to global array
function addingEmployeesIntoArray(firstName, lastName, iD, title, annualSalary) {
    console.log('In addingEmployeesIntoArray function!', firstName, lastName, iD, title, annualSalary);
    const employeeNew = {
        first: firstName,
        last: lastName,
        id: iD,
        title: title,
        salary: annualSalary
    };
    addedEmployeeArray.push(employeeNew);
    return true;
}
// ~ End of addingEmployeesIntoArray function ~
//
// End of JAVSCRIPT FUNCTIONS -----------------------------------------------------------------


// JQUERY FUNCTIONS! --------------------------------------------------------------------------
//
// ~ addInputsIntoArray function ~
// - jQuery variables from DOM inputs that are placed in as parameters into addingEmployeesIntoArray function
function addInputsIntoArray() {
    console.log('In addInputsIntoArray function!');
    const firstNameInputValue = $('#first-name').val();
    const lastNameInputValue = $('#last-name').val();
    const iDInputValue = Number($('#id').val());
    const titleInputValue = $('#title').val();
    const annualSalaryInputValue = Number($('#annual-salary').val());
    addingEmployeesIntoArray(
        firstNameInputValue,
        lastNameInputValue,
        iDInputValue,
        titleInputValue,
        annualSalaryInputValue
    );
    // Empty inputs:
    // firstNameInputValue.val(' ');

}
// ~ End of addInputsIntoArray function ~
//
// ~ inputSubmissionClickHandler ~
// - on click this function will run addInputsIntoArray function so inputs will be added to array
function inputSubmissionClickHandler() {
    console.log('In inputSubmissionClickHandler function!');
    const inputSubmissionButton = $('#submit-btn');
    inputSubmissionButton.click(addInputsIntoArray);
    // alert('You Clicked Me!');
}