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
	
}



