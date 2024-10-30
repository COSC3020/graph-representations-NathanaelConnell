function convertToAdjList(adjMatrix) {

    if (adjMatrix == []) {
        return [];
    }

    var adjList = [];
    for (var i = 0; i < adjMatrix.length; i++) {
        
        adjNodes = [];
        for (var j = 0; j < adjMatrix[i].length; j++) {
            if (adjMatrix[i][j] == 1) { //checks if there is an edge between i and j
                adjNodes.push(j);
            }
        }
        adjList.push(adjNodes);
    }

    return adjList;
}
