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
	var field = new Field(testField);
	var optimalLayout = findOptimal(field);
	console.log('subroutine returned: $'+optimalLayout.totalCost);
}

function findOptimal(field) {
	var greenhouses = new Array();
	var region = field.fullStrawberryRegion;
	//var bestCost = region.cost;
	var unbeatableCost = 10 + field.numPlants;
	if (region.cost == unbeatableCost) {
		greenhouses.push(region);
		return new Matrix(greenhouses);
	}
	console.log('Full region cost: $'+region.cost);
	//******************
	var gh = new Array();
	for (var i in field.leftEdges) {
		var nw = field.leftEdges[i];
		for (var j in field.rightEdges) {
			var se = field.rightEdges[j];
			if (nw.row <= se.row && nw.col <= se.col) {
				gh.push(new Greenhouse(nw, se));
			}
		}
	}
	console.log(gh.length);
	for (var i in gh) {
		//console.log(gh[i].cost);
		
	}
	
	//******************
	return new Matrix(greenhouses);
}

function Field(fieldArray) {
	this.numRows = fieldArray.length;
	this.numCols = fieldArray[0].length;
	this.leftEdges = new Array();
	this.rightEdges = new Array();
	this.numPlants = 0;

	var farthestWest = this.numCols;
	var farthestEast = 0;
	var farthestNorth = this.numRows;
	var farthestSouth = 0;
	
	
	for (var i in fieldArray) {
		var line = fieldArray[i];
		for (var j=0; j < line.length; j++) {
			if (line.charAt(j) == '@') { 
				this.numPlants++;
				if (line.charAt(j-1) == '.' || j==0) this.leftEdges.push(new Edge(i, j));
				if (line.charAt(j+1) == '.' || j==this.numCols-1) this.rightEdges.push(new Edge(i, j));
				if (j < farthestWest) farthestWest = j;
				if (j > farthestEast) farthestEast = j;
				if (i < farthestNorth) farthestNorth = i;
				if (i > farthestSouth) farthestSouth = i;
			}
		}
	}
	this.fullStrawberryRegion = new Greenhouse(new Edge(farthestNorth, farthestWest), new Edge(farthestSouth, farthestEast));
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
	this.totalCost = 0;
	for (var i in greenhouses) {
		this.totalCost += greenhouses[i].cost;
	}
}

