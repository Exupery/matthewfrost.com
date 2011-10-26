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
        var bestGHs = new Array();
        bestGHs[0] = mapFields(getField(testField));
        for (var i=1; i<testMax; i++) { 
        	//bestGHs[i] = mapFields(getField(testField));
        	var gh = bestGHs[i-1].greenhouses;
        	
        	for (var j in gh) {
        		bestGHs[i] = mapFields(getField(testField, gh[j].northWest, gh[j].southEast));
        	}
        	//bestGHs[i].merge(gh);
        	console.log(i+': '+bestGHs[i].greenhouses.length);
        }
        for (var g in bestGHs) {
        	console.log('Amount: '+bestGHs[g].amount+' Cost: '+bestGHs[g].totalCost);
        	
        }
}

function mapFields(field) {
        //var field = getField(rawField);
        var bestCost = field.cost+99;
        //TODO: if max==1 || bestcost return fullField;
        //console.log(field.cost);
        var cost = null;
        var greenhouses = new Array();
        
        for (var i=field.northWest.row; i<=field.southEast.row; i++) {
            //console.log('Row: '+i);
            var upper = getField(testField, field.northWest, new Edge(i, field.southEast.col));
            var lower =  getField(testField, new Edge(i+1, field.northWest.col), field.southEast);
            cost = upper.cost+lower.cost;
            if (cost < bestCost) {
            	greenhouses.splice(0, greenhouses.length, upper, lower);
                bestCost = cost;
            }
            //console.log(upper.cost+' '+lower.cost+' '+cost);
        }
        for (var j=field.northWest.col; j<=field.southEast.col; j++) {
            //console.log('Col: '+j);
            var left = getField(testField, field.northWest, new Edge(field.southEast.row, j));
            var right = getField(testField, new Edge(field.northWest.row, j+1), field.southEast);
            cost = left.cost+right.cost;
            //console.log(left.cost+' '+right.cost+' '+cost);
            if (cost < bestCost) {
            	greenhouses.splice(0, greenhouses.length, left, right);
                bestCost = cost;
            }
        }
        //console.log("***GH LENGTH***"+greenhouses.length);
        return new Matrix(greenhouses);
}

function getField(fieldArray, nw, se) {
        var numRows = fieldArray.length;
        var numCols = fieldArray[0].length;
        var numPlants = 0;

        var westLimit = (nw) ? nw.col : 0;
        var eastLimit = (se) ? se.col : numCols;
        var northLimit = (nw) ? nw.row : 0;
        var southLimit = (se) ? se.row : numRows;
        
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

function Matrix(gh) {
        this.greenhouses = new Array();
        this.totalCost = 0;
        this.amount = 0;
        for (var i in gh) {
        	//console.log("***COST***"+gh[i].cost);
                this.totalCost += gh[i].cost;
                if (gh[i].cost > 0) {
                	this.amount++;
                	this.greenhouses.push(gh[i]);
                }
        }
        //this.merge = function(g){return this.greenhouses.concat(g);};
}