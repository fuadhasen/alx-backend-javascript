export default function updateStudentGradeByCity(students, city, newGrades) {
  const stud = students.filter((item) => item.location === city);
  const res = stud.map((item) => {
    const updatedStu = { ...item };
    const found = newGrades.find((sub) => sub.studentId === item.id);

    if (found) {
      updatedStu.grade = found.grade;
    } else {
      updatedStu.grade = 'N/A';
    }

    return updatedStu;
  });

  return res;
}
