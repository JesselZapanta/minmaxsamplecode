function minMax(depth, nodeIndex, isMaximizingPlayer, scores, height) {
            // p tag 
            const traceParagraph = document.getElementById('tracing');
            
            // show the output of the current stati
            traceParagraph.innerHTML += `Depth: ${depth}, NodeIndex: ${nodeIndex}, isMaximizingPlayer: ${isMaximizingPlayer}<br>`;

            // Return the terminal node value 
            if (depth === height) {
                traceParagraph.innerHTML += `Returning terminal node value: ${scores[nodeIndex]}<br>`;
                return scores[nodeIndex];
            }

            // Maximizing
            if (isMaximizingPlayer) {
                const left = minMax(depth + 1, nodeIndex * 2, false, scores, height);
                const right = minMax(depth + 1, nodeIndex * 2 + 1, false, scores, height);
                const result = Math.max(left, right);
                traceParagraph.innerHTML += `Maximizing at Depth: ${depth}, NodeIndex: ${nodeIndex}, Result: ${result}<br>`;
                return result;
            }
            // Minimizing
            else {
                const left = minMax(depth + 1, nodeIndex * 2, true, scores, height);
                const right = minMax(depth + 1, nodeIndex * 2 + 1, true, scores, height);
                const result = Math.min(left, right);
                traceParagraph.innerHTML += `Minimizing at Depth: ${depth}, NodeIndex: ${nodeIndex}, Result: ${result}<br>`;
                return result;
            }
        }

        // Scores at the terminal nodes
        const scores = [-1, 3, 5, 1, -6, -4, 0, 9];

        // Height of the tree (log base 2 of number of leaf nodes)
        const height = Math.log2(scores.length);

        // Start the min-max algorithm at depth 0, node index 0, with the maximizing player
        const optimalValue = minMax(0, 0, true, scores, height);

        // Output the final optimal value
        document.getElementById('tracing').innerHTML += `The optimal value is: ${optimalValue}`;