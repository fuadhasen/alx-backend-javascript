const fs = require('fs');
const csv = require('csv-parser');

const cs = [];
const se = [];

function createStudents(path) {
  try {
    const data = fs.readFileSync(`${path}`, "utf-8");
    const rows = data.split('\n')
    rows.forEach((item) => {
      const column = item.split(',')
      if (item.includes('CS')) {
        cs.push(column[0])
      } else if(item.includes('SWE')) {
        se.push(column[0])
      }
    })
    console.log(`Number of students: ${rows.length - 2}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${se.length}. List: ${se.join(', ')}`);
  }
  catch {
    throw new Error("Cannot load the database")
  }

}

module.exports = createStudents;
