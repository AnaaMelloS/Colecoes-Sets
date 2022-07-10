function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique];
}

const arr = [65, 45, 65, 8, 541, 3546, 34, 45];

console.log(uniqueElements(arr));