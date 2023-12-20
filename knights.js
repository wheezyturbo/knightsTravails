function knightMoves(start, end) {
  // Validate starting and ending squares
  if (!isValid(start[0], start[1]) || !isValid(end[0], end[1])) return null;

  // Define valid knight moves
  const moves = [[1, 2], [-1, 2], [-1, -2], [1, -2], [2, 1], [-2, 1], [-2, -1], [2, -1]];

  // Initialize visited set and queue
  const visited = new Set();
  const queue = [[start, 0]]; // [square, distance]

  // Breadth-first search
  while (queue.length) {
    const [current, distance] = queue.shift();
    if (current[0] === end[0] && current[1] === end[1]) {
      // Reconstruct path from distance and queue
      console.log({current,queue: queue.slice(0,distance)})
      return [current].concat(queue.slice(0, distance).map(([square]) => square));
    }

    // Explore valid moves
    for (const move of moves) {
      const newX = current[0] + move[0];
      const newY = current[1] + move[1];
      if (isValid(newX, newY) && !visited.has(`${newX}-${newY}`)) {
        visited.add(`${newX}-${newY}`);
        queue.push([[newX, newY], distance + 1]);
      }
    }
  }

  return null;
}

function isValid(x, y) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

const start = [3, 3];
const end = [4, 3];
const path = knightMoves(start, end);


console.log(path);

if (path) {
  console.log(`Shortest path from in ${path.length-1} moves : ${start} to ${end}: ${path.join(" -> ")}`);
} else {
  console.log(`No path found from ${start} to ${end}`);
}
