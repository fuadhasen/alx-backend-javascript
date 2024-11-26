const fs = require('fs');
const csv = require('csv-parser');

let count = 0;
const cs = [];
const se = [];

function createStudents(path) {
  fs.createReadStream(`${path}`)
    .on('error', () => {
      throw new Error('Cannot load the database');
    })
    .pipe(csv())
    .on('data', (row) => {
      if (row.field === 'CS') {
        cs.push(row.firstname);
      } else {
        se.push(row.firstname);
      }
      count += 1;
    })
    .on('end', () => {
      console.log(`Number of students: ${count}`);
      console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
      console.log(`Number of students in SWE: ${se.length}. List: ${se.join(', ')}`);
    });
    console.log("Is this printed first mean its Async")
}

module.exports = createStudents;
