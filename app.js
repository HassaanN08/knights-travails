const Node = (node, parentNode = null) => {
    return { node: node, parentNode: parentNode };
}

const Queue = () => {
    let queue = {};
    let headCount = 0;
    let tailCount = 0;

    const enque = (node) => {
        queue[tailCount] = node;
        tailCount++;
    }

    const dequeu = () => {
        const node = queue[headCount];
        delete queue[headCount];
        headCount++;
        return node;
    }

    const getTailCount = () => {
        return tailCount;
    }

    const getHeadCount = () => {
        return headCount;
    }

    const getQueue = () => {
        return queue;
    }

    return {enque, dequeu, getTailCount, getHeadCount, getQueue};
}

/*
Function: getShortedtPath
Purpose: Get shortest path between vertex A and B
Base Case: If the New Start Position is equal to the final position, return the Node;
Recursive Call Returns: End Node
*/

const getShortestPath = (startPos, endPos, visited = new Set(), queue = Queue()) => {

    if (queue.getTailCount() === 0) {
        const startNode = Node(startPos);
        visited.add(`${startNode.node[0]},${startNode.node[1]}`)
        queue.enque(startNode);
    }

    let newStartPos = queue.dequeu();

    if (newStartPos.node[0] === endPos[0] && newStartPos.node[1] === endPos[1]) {
        return newStartPos;
    }

    let x = newStartPos.node[0];
    let y = newStartPos.node[1];

    let nextPos = {
        1: [x + 1, y + 2],
        2: [x + 2, y + 1],
        3: [x + 1, y - 2],
        4: [x + 2, y - 1],
        5: [x - 1, y + 2],
        6: [x - 2, y + 1],
        7: [x - 1, y - 2],
        8: [x - 2, y - 1],
    };

    for (let i = 1; i <= 8; i++) {
        if (nextPos[i][0] <= 7 && nextPos[i][0] >= 0 && nextPos[i][1] <= 7 && nextPos[i][1] >= 0) {
            let nextNode = nextPos[i];
            if (!visited.has(`${nextNode[0]},${nextNode[1]}`)) {
                visited.add(`${nextNode[0]},${nextNode[1]}`);
                queue.enque(Node(nextNode, newStartPos));
            }
            else continue;
        }
    }

    return getShortestPath(startPos, endPos, visited, queue);
}

const knightMoves = (startPos, endPos) => {
    if (startPos[0] > 7 || startPos[0] < 0 || startPos[1] > 7 || startPos[1] < 0) return 'Each Vertex must be between 0 and 7';
    if (endPos[0] > 7 || endPos[0] < 0 || endPos[1] > 7 || endPos[1] < 0) return 'Each Vertex must be between 0 and 7';

    let shortestPath = getShortestPath(startPos, endPos);

    let path = [];

    while(shortestPath) {
        path.unshift(shortestPath.node);
        shortestPath = shortestPath.parentNode;
    }

    return path;
}

export default knightMoves;