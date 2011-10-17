var testMax = 4;
var testField = [
                '..@@@@@...............',
                '..@@@@@@........@@@...',
                '.....@@@@@......@@@...',
                '.......@@@@@@@@@@@@...',
                '.........@@@@@........',
                '.........@@@@@........'
                ];

function start() {
        for (var i in testField) {
                var html = testField[i]+"<br />";
                document.getElementById('output').innerHTML += html;
        }
        mapFields();
}

function mapFields() {
	var fullField = getField(testField);
	//TODO: if max==1 || bestcost return fullField;
	console.log(fullField.cost);
	for (var i=fullField.northWest.row; i<=fullField.southEast.row; i++) {
		for (var j=fullField.northWest.col; j<=fullField.southEast.col; j++) {
			console.log(i+' '+j);
			var left = getField(testField);
			var right = getField(testField);
			console.log(left.cost+' '+right.cost);
		}
	}
}

function isValid() {
	var valid = false;
	
	
	return valid;
}

function getField(fieldArray, w, e, n, s) {
	var numRows = fieldArray.length;
	var numCols = fieldArray[0].length;
	var numPlants = 0;

	var westLimit = (w) ? w : 0;
	var eastLimit = (e) ? e : numCols;
	var northLimit = (n) ? n : 0;
	var southLimit = (s) ? s : numRows;
	var farthestWest = eastLimit;
	var farthestEast = westLimit;
	var farthestNorth = southLimit;
	var farthestSouth = northLimit;
	
	for (var i in fieldArray) {
		var line = fieldArray[i];
		for (var j=0; j < line.length; j++) {
			if (line.charAt(j) == '@') { 
				numPlants++;
				if (j < farthestWest && j >= westLimit) farthestWest = j;
				if (j > farthestEast && j <= eastLimit) farthestEast = j;
				if (i < farthestNorth && i >= northLimit) farthestNorth = i;
				if (i > farthestSouth && i <= southLimit) farthestSouth = i;
			}
		}
	}

	return new Greenhouse(new Edge(farthestNorth, farthestWest), new Edge(farthestSouth, farthestEast));
}

function Edge(r, c) {
	this.row = r;
	this.col = c;
}

function Greenhouse(nw, se) {
	var area = (se.col - nw.col + 1) * (se.row - nw.row + 1);
	this.cost = 10 + area;
	this.northWest = nw;
	this.southEast = se;
}

function Matrix(greenhouses) {
	this.greenhouses = greenhouses;
	this.totalCost = 0;
	for (var i in greenhouses) {
		this.totalCost += greenhouses[i].cost;
	}
}

