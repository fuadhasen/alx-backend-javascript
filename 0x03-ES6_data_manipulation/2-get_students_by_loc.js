export default function getStudentsByLocation(students, city) {
  const stud = students.filter((item) => item.location === city);
  return stud;
}
