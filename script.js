function countChar(str, chr) {
	var counter = 0;

	for(var i = 0; i < str.length; i++)
	{
		if (str.charAt(i) === chr) {
			counter++
		}
	}
	return counter;
}

function countBs(str) {
	return countChar(str, "B")
}

console.log(countChar("kakkerlak", "k"));
console.log(countBs("BBC"));