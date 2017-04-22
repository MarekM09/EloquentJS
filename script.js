function range(start, end, step) {
	var jump = step || 1;
	var arr =[];
	if (step < 0)	{
		for (var i = start; i >= end; i += jump)
		{
			arr.push(i);
		}
	} else {
		for (var i = start; i <= end; i += jump)
		{
			arr.push(i);
		}
	}
	return arr;
}

function sum(arr) {
	var result = 0;
	for (var i = 0; i < arr.length; i++)
	{
		result += arr[i];
	}
	return result;
}

console.log(range(5, 2, -1));