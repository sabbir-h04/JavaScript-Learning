function validate(n) {
	let numArr = String(n).split("").map(Number);
	function genNum(num) {
		let num2 = num * 2;
		if (num2 > 9) {
			num2 -= 9;
		}
		return num2;
	}

	function validateNum() {
		let sum = 0;
		numArr.forEach((value) => {
			sum += value;
		});
		if (sum % 10 === 0) {
			return true;
		} else {
			return false;
		}
	}

	if (numArr.length % 2 === 0) {
		for (let index = 0; index < numArr.length; index += 2) {
			numArr[index] = genNum(numArr[index]);
		}
		return validateNum();
	} else {
		for (let index = 1; index < numArr.length; index += 2) {
			numArr[index] = genNum(numArr[index]);
		}
		return validateNum();
	}
}
let number = 121;
console.log(validate(number));
