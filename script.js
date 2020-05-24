$(document).ready(hereWeGo);

// fucntion that starts the whole thing
// hereWeGo function
function hereWeGo() {
    console.log('In hereWeGo function!');
    inputSubmissionClickHandler();
    deleteEmployeeClickHandler();
    monthlyTotalCalDOM();
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
    $('#first-name').val('');
    $('#last-name').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annual-salary').val('');

    // Fun this after:
    // appendEmployeeToDOMTable();
    let tableRowIs = $(`<tr class="delete-me"></tr>`);
    $('.table-body').append(tableRowIs);
    tableRowIs.append(`<td>${firstNameInputValue}</td>`);
    tableRowIs.append(`<td>${lastNameInputValue}</td>`);
    tableRowIs.append(`<td>${iDInputValue}</td>`);
    tableRowIs.append(`<td>${titleInputValue}</td>`);
    tableRowIs.append(`<td class="annSal">${annualSalaryInputValue}</td>`);
    tableRowIs.append('<td><button class="delete-employee">Clear</button></td>');

    monthlyTotalCalDOM();
    deleteEmployeeClickHandler();
    

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

function deleteEmployeeClickHandler() {
    console.log('In deleteEmployeeClickHandler function!');
    let deleteBtn = $('.delete-employee')
    // https://stackoverflow.com/questions/6831394/jquery-basic-how-can-i-remove-a-table-row-when-a-button-of-this-row-is-clicked
    deleteBtn.on('click', deleteBtn, function (event) {
        for (let i = 0; i < monthlyTotal.length; i++) {
            const iterator = monthlyTotal[i];
            console.log('In for of loop');
            $('.table-body tr').children('.annSal').each(function () {
                let element = Number($(this).text());
                element = element / 12;
                if (iterator === element) {
                    console.log('In if conditional');
                    monthlyTotal.splice(i, 1);
                }
            });
        }
        $(this).closest('tr').remove();
    });
    // monthlyTotalCalDOM();
}

// ~ appendEmployeeToDOMTable function ~
// - after employee is added to array it is then displayed on the DOM in the table
// function appendEmployeeToDOMTable() {
//     console.log('In appendEmployeeToDOMTable function!');
    
//     // Create area to append to:
//     // $('#employees-table tbody').append(`<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>`);
//     let tableRowIs = $(`<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>`);
//     // loop through array take the keys of the objects and display those keys in the correct children of the table rows
//     for (let i = 0; i < addedEmployeeArray.length; i++) {
//         const employee = addedEmployeeArray[i];
//         // Variables for key values:
//         const employeeFirstName = employee.first;
//         const employeeLastName = employee.last;
//         const employeeID = employee.id;
//         const employeeTitle = employee.title;
//         const employeeAnnualSalary = employee.salary;
//         // Variables for table locations
//         // const tableRowIs = $(`<tr></tr>`);
//         $('.table-body').prepend(tableRowIs);
//         $(tableRowIs).addClass(employeeFirstName);
//         const firstNameArea = $(`.${employeeFirstName} td:nth-child(1)`);
//         firstNameArea.addClass(employeeLastName);
//         firstNameArea.append(employeeFirstName);
//         const lastNameArea = $(`.${employeeFirstName} td:nth-child(2)`);
//         lastNameArea.addClass(employeeLastName);
//         lastNameArea.append(employeeLastName);
//         const iDArea = $(`.${employeeFirstName} td:nth-child(3)`);
//         iDArea.addClass(employeeLastName);
//         iDArea.append(employeeID);
//         const titleArea = $(`.${employeeFirstName} td:nth-child(4)`);
//         titleArea.addClass(employeeLastName);
//         titleArea.append(employeeTitle);
//         const salaryArea = $(`.${employeeFirstName} td:nth-child(5)`);
//         salaryArea.addClass(employeeLastName);
//         salaryArea.append(`\$${employeeAnnualSalary}`).digits();
//         const buttonArea = $(`.${employeeFirstName} td:nth-child(6)`);
//         buttonArea.addClass(employeeLastName);
//         buttonArea.append('<button class="delete-employee">Clear</button>');
        
//     }
// }


let monthlyTotal = [];
let sumOfArray = 0;
let totalIs = 0;
let number = 0;

function annSalCal(salary) {
    let monthlySal = Number(salary) / 12;
    return monthlySal; 
}

function monthlyTotalCal(monthlySals) {
    let element2 = $('#total-salary');
    element2.empty();
    element2.append(new Intl.NumberFormat().format(monthlySals));
}

function monthlyTotalCalDOM() {

    $('.table-body tr').children('.annSal').each(function () {
        let element1 = $(this).text();
        // http://jsfiddle.net/jinglesthula/hdzTy
        number = Number(element1.replace(/[^0-9\.-]+/g, ""));
        // console.log(annSalCal(number));
        // monthlyTotal.push(annSalCal(number));
        return number;
    })
    console.log(annSalCal(number));
    monthlyTotal.push(annSalCal(number));
    // https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
    totalIs = monthlyTotal.reduce((a, b) => a + b, 0)
    console.log(totalIs);
    
    // let element2 = $('#total-salary');
    // // element2.digits();
    // element2.append(monthlyTotal.reduce((a, b) => a + b, 0));

    // console.log(sumOfArray);

    monthlyTotalCal(totalIs);
    
}

// Not sure how this works but...
// https://stackoverflow.com/questions/1990512/add-comma-to-numbers-every-three-digits
$.fn.digits = function () {
	return this.each(function () {
		$(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	})
}