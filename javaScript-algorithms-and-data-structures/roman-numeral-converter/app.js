// // Question :

// Roman Numeral Converter
// Convert the given number into a roman numeral.

// Roman numerals	Arabic numerals
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// All roman numerals answers should be provided in upper-case.

// // Conditions :

// convertToRoman(2) should return the string II.

// convertToRoman(3) should return the string III.

// convertToRoman(4) should return the string IV.

// convertToRoman(5) should return the string V.

// convertToRoman(9) should return the string IX.

// convertToRoman(12) should return the string XII.

// convertToRoman(16) should return the string XVI.

// convertToRoman(29) should return the string XXIX.

// convertToRoman(44) should return the string XLIV.

// convertToRoman(45) should return the string XLV.

// convertToRoman(68) should return the string LXVIII

// convertToRoman(83) should return the string LXXXIII

// convertToRoman(97) should return the string XCVII

// convertToRoman(99) should return the string XCIX

// convertToRoman(400) should return the string CD

// convertToRoman(500) should return the string D

// convertToRoman(501) should return the string DI

// convertToRoman(649) should return the string DCXLIX

// convertToRoman(798) should return the string DCCXCVIII

// convertToRoman(891) should return the string DCCCXCI

// convertToRoman(1000) should return the string M

// convertToRoman(1004) should return the string MIV

// convertToRoman(1006) should return the string MVI

// convertToRoman(1023) should return the string MXXIII

// convertToRoman(2014) should return the string MMXIV

// convertToRoman(3999) should return the string MMMCMXCIX

// // Base Code :

// function convertToRoman(num) {
// 	return num;
// }

// convertToRoman(36);

// // My Answer :

const romanNums = {
	0: ["", "", "", ""],
	1: ["I", "X", "C", "M"],
	2: ["II", "XX", "CC", "MM"],
	3: ["III", "XXX", "CCC", "MMM"],
	4: ["IV", "XL", "CD", "MMMM"],
	5: ["V", "L", "D", ""],
	6: ["VI", "LX", "DC", ""],
	7: ["VII", "LXX", "DCC", ""],
	8: ["VIII", "LXXX", "DCCC", ""],
	9: ["IX", "XC", "CM", ""],
};
function convertToRoman(num) {
	let answerArr = [];
	let numString = num.toString();
	let numLength = numString.length;
	console.log(num);
	for (let i = 0; i < numLength; i++) {
		answerArr.unshift(romanNums[numString[numLength - i - 1]][i]);
	}
	return answerArr.join("");
}

console.log(convertToRoman(2)); // II
console.log(convertToRoman(3)); // II
console.log(convertToRoman(4)); // IV
console.log(convertToRoman(5)); // V
console.log(convertToRoman(9)); // IX
console.log(convertToRoman(12)); // XII
console.log(convertToRoman(16)); // XVI
console.log(convertToRoman(29)); // XXIX
console.log(convertToRoman(44)); // XLIV
console.log(convertToRoman(45)); // XLV
console.log(convertToRoman(68)); // LXVIII
console.log(convertToRoman(83)); // LXXXIII
console.log(convertToRoman(97)); // XCVII
console.log(convertToRoman(99)); // XCIX
console.log(convertToRoman(400)); // CD
console.log(convertToRoman(500)); // D
console.log(convertToRoman(501)); // DI
console.log(convertToRoman(649)); // DCXLIX
console.log(convertToRoman(798)); // DCCXCVIII
console.log(convertToRoman(891)); // DCCCXCI
console.log(convertToRoman(1000)); // M
console.log(convertToRoman(1004)); // MIV
console.log(convertToRoman(1006)); // MVI
console.log(convertToRoman(1023)); // MXXIII
console.log(convertToRoman(2014)); // MMXIV
console.log(convertToRoman(3999)); // MMMCMXCIX
