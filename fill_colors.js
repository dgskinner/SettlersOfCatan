function fillColors () {
	var landTypes = ["wood", "ore", "sheep", "wheat", "brick"];
	var landCounts = {};
	landTypes.forEach( function (type) {
		landCounts[type] = 0;
	});
	
	var hexes = document.getElementsByClassName("hex");
	for (var i = 0; i < hexes.length; i++) {
		var landType = landTypes[Math.floor(Math.random() * landTypes.length)];
		hexes[i].classList.add(landType);		
		landCounts[landType]++;
		if (landCounts[landType] === 4) {
			var landIndex = landTypes.indexOf(landType);
			landTypes.splice(landIndex, 1);
		}
	}
};

fillColors();


