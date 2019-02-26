
export function mapPopulation(arr) {
	return arr.map(({ females, males, age }) => {
		return { females, males, age }
	})
}

export function filterByAge(arr) {
	return arr.filter(item => item.age >= 20 && item.age <= 40)
}

export function removeDuplicates(arr) {
	return arr.filter((item, idx, array) => array.indexOf(item) === idx);
}

export function concatenate(arr) {
	return arr.reduce((total, nextArr) => total.concat(nextArr))
}
