function arrayToList(arr) {
  var list = null;
  for (var i = arr.length - 1; i >= 0; i--) {
  	list = { value: arr[i], rest: list };
  }
  return list;
}

function listToArray(list) {
	var arr = [];
	for (var node = list; node; node = node.rest) {
		arr.push(node.value);
	}
	return arr
}

function prepend(value, list) {
	return {value: value, rest: list};
}

function nth(list, number) {
	//var arr = listToArray(list);

  if(!list) {
  	return undefined;
  }
  return listToArray(list)[number];
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 0));