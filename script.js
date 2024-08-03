let employees = [];

let nextId = 1;


function addUser() {
    const nameInput = document.getElementById('name');
    const professionInput = document.getElementById('profession');
    const ageInput = document.getElementById('age');
    const message = document.getElementById('message');

    const name = nameInput.value.trim();
    const profession = professionInput.value.trim();
    const age = parseInt(ageInput.value.trim());

    //clear previous message
    message.textContent = '';


    if (!name || !profession || isNaN(age)) {
        message.textContent = 'Error: Please Make sure All fields are filled before adding in an employee !';
        message.className = 'error';
        return;
    } else {
        const emplyremove = document.getElementById('emply');
        emplyremove.style.display = "none";
    }

    const employee = {
        id: nextId++,
        name,
        profession,
        age
    };

    employees.push(employee);

    displayEmployees();
    nameInput.value = '';
    professionInput.value = '';
    ageInput.value = '';
    message.textContent = 'Success: Employee Added!';
    message.className = 'success';

}


function displayEmployees() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';

    employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee-item';
        employeeDiv.innerHTML = `<span class="employee-info">
        ${employee.id}. Name:${employee.name}<span class="info-spacing"></span> Profession:${employee.profession}<span class="info-spacing"></span> Age:${employee.age}
        <span class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete User</span>
    </span>`

        employeeList.appendChild(employeeDiv);
    })
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id)
    displayEmployees()
}