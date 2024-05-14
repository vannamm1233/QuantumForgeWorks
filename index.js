function flattenArray(arr) {
  return arr.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr),
    [],
  );
}
