const nameField = document.querySelector("#name");
const descriptionField = document.querySelector("#description");
const itemField = document.querySelector("#new-item");
const assignField = document.querySelector("#assign");
const dateField = document.querySelector("#deadline");

// Query Selector ID's subject to change
const nameError = document.querySelector("#name-error");
const descriptionError = document.querySelector("#description-error");
const itemError = document.querySelector("#new-item-error");
const assignError = document.querySelector("#assign-error");
const dateError = document.querySelector("#deadline-error");

// Min and max values for validation
const _NAME_MAX;
const _DESCRIPTION_MAX;
const _ITEM_MAX;

// This resets all the error messages so only new errors will populate
const resetErrors = () => {
    nameError.innerText = '';
    descriptionError.innerText = '';
    itemError.innerText = '';
    assignError.innerText = '';
    dateError.innerText = '';
}

export const validate = () => {
    let isValid = true;

    resetErrors();

    // Required valdiation for name field
    if (nameField.innerText.length == 0) {
        nameError.innerHTML = "Required Field";
        isValid = false;
    }

    // Max character length valdiation for name field
    if (nameField.innerText.length > _NAME_MAX) {
        nameError.innerHTML = `Too long. Max character length is ${_NAME_MAX}`;
        isValid = false;
    }

    // Max character length valdiation for description field
    if (descriptionField.innerText.length > _DESCRIPTION_MAX) {
        descriptionError.innerHTML = `Too long. Max character length is ${_DESCRIPTION_MAX}`;
        isValid = false;
    }

    // Required validation for checkbox field
    if (itemField.innerText.length == 0) {
        itemError.innerHTML = "Required Field";
        isValid = false;
    }

    // Max character length validation for item field
    if (itemField.innerText.length > _ITEM_MAX) {
        itemField.innerHTML = `Too long. Max character length is ${_ITEM_MAX}`;
        isValid = false;
    }

    
    return isValid;
}