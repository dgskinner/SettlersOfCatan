function fillNumbers () {
	var numbers = [2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12];
	var hexMiddles = document.getElementsByClassName("middle");
	for (var i = 0; i < hexMiddles.length; i++) {
		var number = numbers[Math.floor(Math.random() * numbers.length)];
		hexMiddles[i].innerHTML = number;
		var numberIndex = numbers.indexOf(number);
		numbers.splice(numberIndex, 1);
	}
};

fillNumbers();

document.getElementById("numbers").addEventListener("click", function () {
	fillNumbers();
});