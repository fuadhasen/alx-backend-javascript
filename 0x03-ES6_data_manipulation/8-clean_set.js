export default function cleanSet(set, startString) {
  let str = '';

  if (startString === '') {
    return str;
  }

  set.forEach((item) => {
    if (item.startsWith(startString)) {
      str += `${item.slice(startString.length)}-`;
    }
  });
  return str ? str.slice(0, -1) : str;
}
