export default function hasValuesFromArray(set, arr) {
  const val = arr.every((item) => set.has(item));
  return val;
}
