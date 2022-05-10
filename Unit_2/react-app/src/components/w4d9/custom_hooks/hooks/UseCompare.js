const UseCompare = (arrayA, arrayB) => {
  if (JSON.stringify(arrayA) === JSON.stringify(arrayB)) return true;
  else return false;
};

export default UseCompare;
