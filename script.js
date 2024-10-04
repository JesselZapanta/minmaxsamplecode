// Min-Max function
function minMax(depth, nodeIndex, isMaximizingPlayer, scores, height) {
    // return the terminal node value 
    if (depth === height) {
        return scores[nodeIndex];
    }

    // Maximizing player's turn
    if (isMaximizingPlayer) {
        return Math.max(
            minMax(depth + 1, nodeIndex * 2, false, scores, height),
            minMax(depth + 1, nodeIndex * 2 + 1, false, scores, height)
        );
    }
    // Minimizing player's turn
    else {
        return Math.min(
            minMax(depth + 1, nodeIndex * 2, true, scores, height),
            minMax(depth + 1, nodeIndex * 2 + 1, true, scores, height)
        );
    }
}

// Scores at the terminal nodes
const scores = [-1, 3, 5, 1, -6, -4, 0, 9];

// Height of the tree (log base 2 of number of leaf nodes)
const height = Math.log2(scores.length);

// Starting the min-max algorithm at depth 0, node index 0, with the maximizing player
const optimalValue = minMax(0, 0, true, scores, height);

console.log("The optimal value is: " + optimalValue);
