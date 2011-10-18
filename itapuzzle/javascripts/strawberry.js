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
        mapFields(testField);
}

function mapFields(rawField) {
        var field = getField(rawField);
        var bestCost = field.cost;
        //TODO: if max==1 || bestcost return fullField;
        console.log(field.cost);
        var cost = null;
        
        for (var i=field.northWest.row; i<=field.southEast.row; i++) {
        	console.log('Row: '+i);
        	var greenhouses = new Array();
            var upper = getField(testField, null, null, null, i);
            var lower =  getField(testField, null, null, i+1, null);
            cost = upper.cost+lower.cost;
            if (cost < bestCost) {
            	greenhouses.push(upper, lower);
            	bestCost = cost;
            }
            console.log(upper.cost+' '+lower.cost+' '+cost);
        }
        for (var j=field.northWest.col; j<=field.southEast.col; j++) {
            console.log('Col: '+j);
            var left = getField(testField, null, j, null, null);
            if (j < field.southEast.col) {
            	var right = getField(testField, j+1, null, null, null);
            	cost = left.cost+right.cost;
            } else {
            	cost = left.cost;
            }
            console.log(left.cost+' '+right.cost+' '+cost);
            if (cost < bestCost) {
            	bestCost = cost;
            }
        }
        
        console.log('Best: '+bestCost);
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
                        if (line.charAt(j) == '@' && j >= westLimit && j <= eastLimit && i >= northLimit && i <= southLimit) { 
                                numPlants++;
                                if (j < farthestWest) farthestWest = j;
                                if (j > farthestEast) farthestEast = j;
                                if (i < farthestNorth) farthestNorth = i;
                                if (i > farthestSouth) farthestSouth = i;
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
        this.cost = (area > 0) ? 10 + area : 0;
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