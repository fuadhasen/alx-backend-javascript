export default function getStudentIdsSum(arr) {
  const sum = arr.reduce((res, item) => res + item.id, 0);

  return sum;
}
