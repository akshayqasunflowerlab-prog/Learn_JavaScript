const employeeId = Symbol("employeeId");

const employee = {
    name: "Rahul",
    department: "IT",
    [employeeId]: 1001
};

console.log(employee.name);          // Rahul
console.log(employee.department);    // IT
console.log(employee[employeeId]);   // 1001

employee.employeeId = 9999;

console.log(employee.employeeId);    // 9999 (normal property)
console.log(employee[employeeId]);   // 1001 (symbol property)