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
	var fld = new Field(testField);
	findOptimal(fld);
}

function findOptimal(field) {
	var greenhouses = new Array();
	for (var i in field.edges) {
		var topLeft = field.edges[i];
		//console.log(field.edges[i].row+' '+field.edges[i].col);
		for (var j=i; j < field.edges.length; j++) {
			var bottomRight = field.edges[j];
			var grnhs = new Greenhouse(topLeft, bottomRight);
			console.log(grnhs.cost);
		}
	}
	console.log(greenhouses.length);
}

function Field(fieldArray) {
	this.numRows = fieldArray.length;
	this.numCols = fieldArray[0].length;
	this.edges = new Array();
	
	for (var i in fieldArray) {
		var line = fieldArray[i];
		for (var j=0; j < line.length; j++) {
			if (line.charAt(j) == '@' && (line.charAt(j-1) == '.' || line.charAt(j+1) == '.' || j==0 || j==this.numCols-1)) {
				this.edges.push(new Edge(i, j));
			}
		}
	}
}

function Edge(r, c) {
	this.row = r;
	this.col = c;
}

function Greenhouse(ul, br) {
//	this.upperLeft = ul;
//	this.upperRight = ur;
//	this.bottomLeft = bl;
//	this.bottomRight = br;
//	var width = br.col - ul.col;
//	var height = br.row - ul.row;
	var area = (br.col - ul.col) * (br.row - ul.row);
	this.cost = (area > 1) ? 10 + area : 11;

}

