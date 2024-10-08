export default function cleanSet(set, startString) {
  let str = '';

  if (startString === '' || typeof (startString) !== 'string') {
    return str;
  }
  for (const element of set) {
    if (typeof (element) === 'string' && element.startsWith(startString)) {
      if (str === '') {
        str = str.concat(element.slice(startString.length));
      } else {
        str = str.concat(`-${element.slice(startString.length)}`);
      }
    }
  }
  return str;
}
