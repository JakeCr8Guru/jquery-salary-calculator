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

    // Creates variables to pass in as parameters:
    const firstNameInputValue = $('#first-name').val();
    const lastNameInputValue = $('#last-name').val();
    const iDInputValue = Number($('#id').val());
    const titleInputValue = $('#title').val();
    const annualSalaryInputValue = Number($('#annual-salary').val());

    if (
        firstNameInputValue !== undefined && firstNameInputValue !== null && firstNameInputValue !== '' &&
        lastNameInputValue !== undefined && lastNameInputValue !== null && lastNameInputValue !== '' &&
        titleInputValue !== undefined && titleInputValue !== null && titleInputValue !== '' &&
        iDInputValue !== undefined && iDInputValue !== null && iDInputValue !== '' && !isNaN(iDInputValue) && iDInputValue !== 0 &&
        annualSalaryInputValue !== undefined && annualSalaryInputValue !== null && annualSalaryInputValue !== '' && !isNaN(annualSalaryInputValue) && annualSalaryInputValue !== 0
        ) {
        // Pass in variables of inputs in:
        addingEmployeesIntoArray(
        	firstNameInputValue,
        	lastNameInputValue,
        	iDInputValue,
        	titleInputValue,
        	annualSalaryInputValue
        );
    }
    else {
    	alert('You forgot something or made a mistake!')
    	return false;
    }

    // Empty inputs:
    $('#first-name').val(' ');
    $('#last-name').val(' ');
    $('#id').val(' ');
    $('#title').val(' ');
    $('#annual-salary').val(' ');

    // Fun this after:
    appendEmployeeToDOMTable();

}
// ~ End of addInputsIntoArray function ~
//
// ~ inputSubmissionClickHandler function ~
// - on click this function will run addInputsIntoArray function so inputs will be added to array
function inputSubmissionClickHandler() {
    console.log('In inputSubmissionClickHandler function!');
    const inputSubmissionButton = $('#submit-btn');
    inputSubmissionButton.click(addInputsIntoArray);
    // alert('You Clicked Me!');
}
// End of inputSubmissionClickHandler function
//
// ~ appendEmployeeToDOMTable function ~
// - after employee is added to array it is then displayed on the DOM in the table
function appendEmployeeToDOMTable() {
    console.log('In appendEmployeeToDOMTable function!');
    
    // Create area to append to:
    // $('#employees-table tbody').append(`<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>`);
    // const tableRowIs = $(`<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>`);
    // loop through array take the keys of the objects and display those keys in the correct children of the table rows
    for (let i = 0; i < addedEmployeeArray.length; i++) {
        const employee = addedEmployeeArray[i];
        // Variables for key values:
        const employeeFirstName = employee.first;
        const employeeLastName = employee.last;
        const employeeID = employee.id;
        const employeeTitle = employee.title;
        const employeeAnnualSalary = employee.salary;
        // Variables for table locations
        const tableRowIs = $(`<tr></tr>`);
        $(tableRowIs).addClass(employeeFirstName);
        const firstNameArea = $(`.${employeeFirstName} td:last-child`);
        firstNameArea.append(employeeFirstName);
        const lastNameArea = $(`.${employeeFirstName} td:last-child`);
        lastNameArea.append(employeeLastName);
        const iDArea = $(`.${employeeFirstName} td:last-child`);
        iDArea.append(employeeID);
        const titleArea = $(`.${employeeFirstName} td:last-child`);
        titleArea.append(employeeTitle);
        const salaryArea = $(`.${employeeFirstName} td:last-child`);
        salaryArea.append(`\$${employeeAnnualSalary}`).digits();
        const buttonArea = $(`.${employeeFirstName} td:last-child`);
        buttonArea.append('<button class="delete-employee">Clear</button>');
        $('.table-body').append(tableRowIs);
    }
}


// Not sure how this works but...
// https://stackoverflow.com/questions/1990512/add-comma-to-numbers-every-three-digits
$.fn.digits = function () {
	return this.each(function () {
		$(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	})
}