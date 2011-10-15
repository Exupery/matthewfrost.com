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

function Field(fieldArray) {
	this.numRows = fieldArray.length;
	this.numCols = fieldArray[0].length;
	this.edges = new Array();
//	this.right = 0;
//	this.left = this.numCols;
//	this.lower = 0;
//	this.upper = this.numRows;
//	for (var i in fieldArray) {
//		var s = fieldArray[i];
//		if (s.indexOf('@') != -1) {
//			if (i < this.upper) this.upper = i;
//			if (i > this.lower) this.lower = i;
//			if (i < this.left) this.left = s.indexOf('@');
//		}
//		if (i > this.right && s.lastIndexOf('@') != -1) this.right = s.lastIndexOf('@');
//	}
	for (var i in fieldArray) {
		var line = fieldArray[i];
		var prevLine = (i > 0) ? fieldArray[i] : '.';
		for (var j=0; j < line.length; j++) {
			if (line.charAt(j) == '@' &&
				(line.charAt(j-1) == '.' || line.charAt(j+1) == '.' || j==0 || j==this.numCols-1) &&
				(prevLine.charAt(j) == '.' || fieldArray[i+1].charAt(j) == '.' || i==0 || i==this.numRows-1)
				) {
				console.log(j);
			}
		}
	}
}

function Edge(x, y) {
	this.x = x;
	this.y = y;
}

function Rectangle(ul, br) {
	this.upperLeft = ul;
	this.bottomRight = br;
}

function mapFields() {
    	var fld = new Field(testField);
    	//console.log(fld.upper+' '+fld.lower+' '+fld.left+' '+fld.right);
}