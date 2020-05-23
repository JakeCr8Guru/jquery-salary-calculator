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

// Input variables with values:
const firstNameInputValue = $('#first-name').val();
const lastNameInputValue = $('#last-name').val();
const iDInputValue = $('#id').val();
const titleInputValue = $('#title').val();
const annualSalaryInputValue = $('#annual-salary').val();
// Input submit button variable:
const inputSubitionButton = $('#submit-btn');
// Array where employee objects will be stored
const addedEmployeeArray = [];

function addingEmployeesIntoArray(firstName, lastName, iD, title, annualSalary) {
    const employeeNew = {
        first: firstName,
        last: lastName,
        id: iD,
        title: title,
        salary: annualSalary
    };
    addedEmployeeArray.push(employeeNew);
}
