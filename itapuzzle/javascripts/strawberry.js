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
        var gh = getField(testField);
        console.log(gh.cost);
        gh.setChildren(mapFields(gh));
        
        createChildren(gh);
       
}

function createChildren(gh) {
	var greenhouses = gh.children;
    for (var i in greenhouses) {
    	greenhouses[i].setParent(gh);
    	greenhouses[i].setChildren(mapFields(greenhouses[i]));
    	console.log("Parent: "+greenhouses[i].cost+" Children: "+greenhouses[i].childCost);//delme
    	if (greenhouses[i].children.length > 0 && greenhouses[i].childCost != greenhouses[i].cost) createChildren(greenhouses[i]);
    }
}

function mapFields(field) {
        var bestCost = field.cost+999;
        //TODO: if max==1 || bestcost return fullField;
        var cost = null;
        var greenhouses = new Array();
        
        for (var i=field.northWest.row; i<=field.southEast.row; i++) {
            var upper = getField(testField, field.northWest, new Edge(i, field.southEast.col));
            var lower =  getField(testField, new Edge(i+1, field.northWest.col), field.southEast);
            cost = upper.cost+lower.cost;
            if (cost < bestCost) {
            	greenhouses.splice(0, greenhouses.length, upper, lower);
                bestCost = cost;
            }
        }
        for (var j=field.northWest.col; j<=field.southEast.col; j++) {
            var left = getField(testField, field.northWest, new Edge(field.southEast.row, j));
            var right = getField(testField, new Edge(field.northWest.row, j+1), field.southEast);
            cost = left.cost+right.cost;
            if (cost < bestCost) {
            	greenhouses.splice(0, greenhouses.length, left, right);
                bestCost = cost;
            }
        }
        
        return greenhouses;
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
		this.area = (se.col - nw.col + 1) * (se.row - nw.row + 1);
        this.cost = (this.area > 0) ? 10 + this.area : 0;
        this.childCost = 0;
        this.northWest = nw;
        this.southEast = se;
        this.parent = null;
        this.children = new Array();
        this.setParent = function(p) {this.parent = p;};
        this.setChildren = function(c) {
        		this.children = c;
        		for (var i in c) {
        			this.childCost += c[i].cost;
        		}
        		//console.log(this.parent);
        		//if (this.childCost <= c[0].parent.cost) this.children = c;
        	};
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