axios.get('http://localhost:5000/employees')
    .then(response => {
        const data = response.data[8]; 
        document.getElementById('EmployeeFullName').innerText = `Driver\n${data.employeeFullName}`;
        document.getElementById('employeeAddress').innerText = data.employeeAddress;
        document.getElementById('employeeEmail').innerText = data.employeeEmail;
    })
    .catch(error => {
        console.error('Error fetching employee data:', error);
    });
