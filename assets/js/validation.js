const nameField = document.querySelector("#name");
const descriptionField = document.querySelector("#description");
const itemField = document.querySelector("#item-1");
const assignField = document.querySelector("#assign");
const dateField = document.querySelector("#deadline");

// Query Selector ID's subject to change
const nameError = document.querySelector("#name-error");
const descriptionError = document.querySelector("#description-error");
const itemError = document.querySelector("#new-item-error");
const assignError = document.querySelector("#assign-error");
const dateError = document.querySelector("#deadline-error");

// Min and max values for validation
const _NAME_MAX = 40;
const _DESCRIPTION_MAX = 175;
const _ITEM_MAX = 82;
const _ASSIGN_MAX = 70;

// Date values for validation
let currentYear;
let currentMonth;
let currentDay;
let inputYear;
let inputMonth;
let inputDay;

// This resets all the error messages so only new errors will populate
const resetErrors = () => {
    nameError.innerText = '';
    descriptionError.innerText = '';
    itemError.innerText = '';
    assignError.innerText = '';
    dateError.innerText = '';
}

// Generates the current date
const getCurrentDate = () => {
    const currentDate = new Date();

    currentYear = currentDate.getFullYear();
    currentMonth = currentDate.getMonth() + 1;
    currentDay = currentDate.getDate();
}

const parseDateFromValue = date => {
    inputYear = parseInt(date);
    inputMonth = parseInt((date[5] + date[6]));
    inputDay = parseInt((date[8] + date[9]));
}

// Prevents user from inputing date before current date
const noTimeTravel = () => {
    if (inputYear > currentYear) { 
        return true; 
    }
    
    if (inputMonth > currentMonth 
        && inputYear == currentYear) { 

        return true; 
    }
    if (inputDay >= currentDay 
        && inputMonth == currentMonth 
        && inputYear == currentYear) {
        return true; 
    }


    return false;
}

export const validate = () => {
    let isValid = true;

    resetErrors();
    getCurrentDate();

    // Required valdiation for name field
    if (nameField.value.length == 0) {
        nameError.innerHTML = "Required Field";
        isValid = false;
    }

    // Max character length valdiation for name field
    if (nameField.value.length > _NAME_MAX) {
        nameError.innerHTML = `Too long. Max character length is ${_NAME_MAX}`;
        isValid = false;
    }

    // Max character length valdiation for description field
    if (descriptionField.value.length > _DESCRIPTION_MAX) {
        descriptionError.innerHTML = `Too long. Max character length is ${_DESCRIPTION_MAX}`;
        isValid = false;
    }

    // Required validation for checkbox field
    if (itemField.value.length == 0) {
        itemError.innerHTML = "Required Field";
        isValid = false;
    }

    // Max character length validation for item field
    if (itemField.value.length > _ITEM_MAX) {
        itemField.innerHTML = `Too long. Max character length is ${_ITEM_MAX}`;
        isValid = false;
    }

    // Required valdiation for assign field
    if (assignField.value.length == 0) {
        assignError.innerHTML = `Required Field`;
        isValid = false;
    }

    // Max character length validation for assign field
    if (assignField.value.length > _ASSIGN_MAX) {
        assignError.innerHTML = `Too long. Max character length is ${_ASSIGN_MAX}`;
        isValid = false;
    } 

    parseDateFromValue(dateField.value);

    if (!noTimeTravel()) {
        dateError.innerHTML = "Date cannot be set to the past";
        isValid = false;
    }

    // Required and valid input length validation for date
    if (dateField.value.length == 0) {
        dateError.innerHTML = 'Required Field';
        isValid = false;
    } else if (dateField.value.length != 10) {
        dateError.innerHTML = 'Please enter valid date';
        isValid = false;
    }

    return isValid;
}