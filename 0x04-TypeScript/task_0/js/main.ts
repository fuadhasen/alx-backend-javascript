interface Student {
  firstName: string
  lastName: string
  age: number
  location: string
}

  const stud1: Student = {firstName: 'fuad',
    lastName: 'Hassen', age: 21, location: 'morroco'}

  const stud2: Student = {firstName: 'Badr',
    lastName: 'Ziani', age: 30, location: 'Addis, Ethiopia'}

  const studentsList: Student[] = [stud1, stud2]

  const table = document.createElement('table'); // Create the table element
  const tbody = document.createElement('tbody'); // Create the table body

  studentsList.forEach((student) => {
    const row = document.createElement('tr'); // Create a table row
    
    // Create a cell for the first name
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName; // Set the text to the student's first name
    
    // Create a cell for the location
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location; // Set the text to the student's location
    
    // Append the cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    
    // Append the row to the table body
    tbody.appendChild(row);
  });

  table.appendChild(tbody);

// Append the table to the document body to render it on the webpage
  document.body.appendChild(table);


