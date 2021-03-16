// Rate max per day
// return 402 payement required if RM > 80 000 char
const rateMax = 80000;

const justifyLineLength = 80;

const justifyLine1 = (text) => {
	let partFinal;
	text = text.trim().split("");
	let tLength = text.length;

	while (tLength > 80) {
		let part = text.slice(0, justifyLineLength);
		part.push("\n");
		console.log(part);
		tLength = tLength - 80;

		let part1 = part.splice("\n");
		console.log(part1);

		let part2 = text.slice(justifyLineLength, justifyLineLength + 80);
		part2.push("\n");
		console.log(part2);

		partFinal = part1 + part2;
		partFinal = partFinal;
		// console.log(partFinal);
	}

	// console.log(text);
	console.log(text.length);
	return partFinal;
};

const justifyLine = (text) => {
	arrLength = text.length;
	arr = text.trim().split("");

	let i = 0;
	let c = 0;
	let part = "";
	let final;
	while (arrLength > 80) {
		i = 0;
		while (i < 80) {
			part = part + arr[i];
			i++;
		}
		part = part + "\n";

		arr = arr.slice(80);
		arrLength = arrLength - 80;
	}
	while (c != arrLength) {
		part = part + arr[c];
		c++;
	}
	final = part.toString();
	console.log("final :\n", final);
	return final;
};
module.exports = { justifyLine };
