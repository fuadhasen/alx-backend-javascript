export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  let str = '';
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      str += `${item.slice(startString.length)}-`;
    }
  });
  return str ? str.slice(0, -1) : str;
}
