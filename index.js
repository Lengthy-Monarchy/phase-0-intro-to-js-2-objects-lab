// Write your solution in this file!
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St',
};

// Function to update an employee with a new key-value pair (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
    ...employee,
    [key]: value,
};
}

// Function to update an employee with a new key-value pair (destructive)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

//Function to delete a key
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to delete a key  (destructive)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}


