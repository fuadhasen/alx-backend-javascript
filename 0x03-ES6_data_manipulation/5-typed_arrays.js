export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const intArr = new Int8Array(buffer);

  if (position < 0 || position >= intArr.length) {
    throw new Error('Position outside range');
  }

  intArr[position] = value;

  return intArr;
}
