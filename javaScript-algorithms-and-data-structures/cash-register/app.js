// // Question :

// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

// // Conditions :

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

// // Base Code :

// function checkCashRegister(price, cash, cid) {
// 	let change;
// 	return change;
// }

// checkCashRegister(19.5, 20, [
// 	["PENNY", 1.01],
// 	["NICKEL", 2.05],
// 	["DIME", 3.1],
// 	["QUARTER", 4.25],
// 	["ONE", 90],
// 	["FIVE", 55],
// 	["TEN", 20],
// 	["TWENTY", 60],
// 	["ONE HUNDRED", 100],
// ]);

// My Answer :

function checkCashRegister(price, cash, cid) {
	// FIRST CHECK FOR CLOSED
	let sum = 0;
	let firstPay = cash - price;
	for (let i = 0; i < cid.length; i++) {
		sum += cid[i][1];
	}
	if (sum == firstPay) {
		return { status: "CLOSED", change: cid };
	}
	// FIRST CHECK FOR CLOSED
	// SECOND PART - VARIABLES (TIMES 100 BECAUSE FLOAT)
	cid.forEach((ele) => {
		return (ele[1] = ele[1] * 100);
	});
	let change = { status: "OPEN", change: [] };
	price = price * 100;
	cash = cash * 100;
	let pay = cash - price;
	let paid = {
		penny: 0,
		nickel: 0,
		dime: 0,
		quarter: 0,
		one: 0,
		five: 0,
		ten: 0,
		twenty: 0,
		one_hundred: 0,
	};
	// PAYING FROM MOST TO LEAST AMOUNT THEN ADDING
	// 100 DOLLARS
	while (pay >= 10000) {
		if (cid[8][1] >= 10000) {
			pay -= 10000;
			cid[8][1] -= 10000;
			paid.one_hundred += 10000;
		} else {
			break;
		}
	}
	if (paid.one_hundred >= 10000) {
		change.change.push(["ONE HUNDRED", paid.one_hundred / 100]);
	}
	// 20 DOLLARS
	while (pay >= 2000) {
		if (cid[7][1] >= 2000) {
			pay -= 2000;
			cid[7][1] -= 2000;
			paid.twenty += 2000;
		} else {
			break;
		}
	}
	if (paid.twenty >= 2000) {
		change.change.push(["TWENTY", paid.twenty / 100]);
	}
	// 10 DOLLARS
	while (pay >= 1000) {
		if (cid[6][1] >= 1000) {
			pay -= 1000;
			cid[6][1] -= 1000;
			paid.ten += 1000;
		} else {
			break;
		}
	}
	if (paid.ten >= 1000) {
		change.change.push(["TEN", paid.ten / 100]);
	}
	// 5 DOLLARS
	while (pay >= 500) {
		if (cid[5][1] >= 500) {
			pay -= 500;
			cid[5][1] -= 500;
			paid.five += 500;
		} else {
			break;
		}
	}
	if (paid.five >= 500) {
		change.change.push(["FIVE", paid.five / 100]);
	}
	// A DOLLAR
	while (pay >= 100) {
		if (cid[4][1] >= 100) {
			pay -= 100;
			cid[4][1] -= 100;
			paid.one += 100;
		} else {
			break;
		}
	}
	if (paid.one >= 100) {
		change.change.push(["ONE", paid.one / 100]);
	}
	// A QUARTER
	while (pay >= 25) {
		if (cid[3][1] >= 25) {
			pay -= 25;
			cid[3][1] -= 25;
			paid.quarter += 25;
		} else {
			break;
		}
	}
	if (paid.quarter >= 25) {
		change.change.push(["QUARTER", paid.quarter / 100]);
	}
	// A DIME
	while (pay >= 10) {
		if (cid[2][1] >= 10) {
			pay -= 10;
			cid[2][1] -= 10;
			paid.dime += 10;
		} else {
			break;
		}
	}
	if (paid.dime >= 10) {
		change.change.push(["DIME", paid.dime / 100]);
	}
	// A NICKEL
	while (pay >= 5) {
		if (cid[1][1] >= 5) {
			pay -= 5;
			cid[1][1] -= 5;
			paid.nickel += 5;
		} else {
			break;
		}
	}
	if (paid.nickel >= 5) {
		change.change.push(["NICKEL", paid.nickel / 100]);
	}
	// A PENNY
	while (pay >= 1) {
		if (cid[0][1] >= 1) {
			pay -= 1;
			cid[0][1] -= 1;
			paid.penny += 1;
		} else {
			break;
		}
	}
	if (paid.penny >= 1) {
		change.change.push(["PENNY", paid.penny / 100]);
	}
	// END OF PAYING AND ADDING
	// IF WE CAN'T PAY
	if (pay > 0) {
		change.status = "INSUFFICIENT_FUNDS";
		change.change = [];
	}
	// FINALLY
	return change;
}

console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.1],
		["QUARTER", 4.25],
		["ONE", 90],
		["FIVE", 55],
		["TEN", 20],
		["TWENTY", 60],
		["ONE HUNDRED", 100],
	])
); // {status: "OPEN", change: [["QUARTER", 0.5]]}

console.log(
	checkCashRegister(3.26, 100, [
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.1],
		["QUARTER", 4.25],
		["ONE", 90],
		["FIVE", 55],
		["TEN", 20],
		["TWENTY", 60],
		["ONE HUNDRED", 100],
	])
); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 0.01],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 0],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0],
	])
); // {status: "INSUFFICIENT_FUNDS", change: []}

console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 0.01],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 1],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0],
	])
); // {status: "INSUFFICIENT_FUNDS", change: []}

console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 0.5],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 0],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0],
	])
); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
