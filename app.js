var numberOne = '';
var numberTwo = '';
var onSecondNumber = false;
var operator;


function storeNumber(number) {
	if (onSecondNumber) {
		numberTwo += `${number}`;
		updateScreen(numberTwo);
	} else {
		numberOne += `${number}`;
		updateScreen(numberOne);
	}
	console.log({
		numberOne: numberOne,
		numberTwo: numberTwo,
	});
}

function operatorPressed(operatorIn) {
	operator = operatorIn;
	onSecondNumber = true;
}

function clearFunction() {
	numberOne = '';
	numberTwo = '';
	onSecondNumber = false;
	operator = undefined;
	updateScreen("0");
}

function equalsPressed () {
	switch(operator) {
		case '+':
			updateScreen(Number(numberOne) + Number(numberTwo));
			break;
		case '-':
			updateScreen(Number(numberOne) - Number(numberTwo));
			break;
		case '*':
			updateScreen(Number(numberOne) * Number(numberTwo));
			break;
		case '%':
			updateScreen(Number(numberOne) / Number(numberTwo));
			break;
	}

}

function updateScreen(string) {
	var ourScreen = document.getElementById('screen');
	ourScreen.innerText = string;
}

clearFunction();