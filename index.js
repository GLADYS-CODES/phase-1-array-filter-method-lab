// Code your solution here
function findMatching(list, select) {
    return list.filter(
        (probableMatch) => probableMatch.toLowerCase() === select.toLowerCase()

    );
}function matchName(list, selectName) {
  return list.filter((record) => record.name === selectName);
}


function fuzzyMatch(root, checkString) {
    return root.filter(
      (probableMatch) =>
        probableMatch.toLowerCase().indexOf(checkString.toLowerCase()) === 0
    );
  }