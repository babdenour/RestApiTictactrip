const moment = require("moment");
const dateRef = parseInt(moment().format("DD"));

// return 402 payement required if RM > 80 000 char
const verify = (rateMax, allMessage, date) => {
	if (allMessage.length < rateMax) {
		if (date == dateRef) {
			// Rate max per day
			console.log(`rate Limite not reach day : ${date}`);
			return true;
		}
	} else console.log(`rate Limite reach day: ${date}`);
	return false;
};

//To check and split message from the post and wrap it as 80 char
const justifyLine = (text, justifyLineLength) => {
	arrLength = text.length;
	arr = text.trim().split("");

	let i = 0;
	let c = 0;
	let part = "";
	let final;
	while (arrLength > justifyLineLength) {
		i = 0;
		while (i < justifyLineLength) {
			part = part + arr[i];
			i++;
		}
		part = part + "\n";

		arr = arr.slice(justifyLineLength);
		arrLength = arrLength - justifyLineLength;
	}
	while (c != arrLength) {
		part = part + arr[c];
		c++;
	}
	final = part.toString();
	return final;
};

module.exports = { justifyLine, verify };
