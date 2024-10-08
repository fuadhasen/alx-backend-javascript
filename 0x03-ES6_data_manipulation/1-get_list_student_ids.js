export default function getListStudentIds(arg) {
  if (Array.isArray(arg) !== true) {
    return [];
  }

  const res = arg.map((item) => item.id);

  return res;
}
