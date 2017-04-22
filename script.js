function reverseArray(arr) {
	var result =[];

	for (i = 0; i < arr.length; i++) {
		result.unshift(arr[i]);
	}
	return result;
}

function reverseArrayInPlace(arr) {
	var old = 0;

	for (var i = 0; i < Math.floor(arr.length / 2); i++) {
		old = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = old;
	}
	return arr;
}

var stringArray = ["A", "B", "C"]
console.log(stringArray);
console.log(reverseArray(stringArray));

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);