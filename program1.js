const getTotalIsles = function (grid) {
  // if (!grid || grid.length === 0) return 0;

  // let to;tal_island = 0;

  // const row = grid.length;
  // const col = grid[0].length;

  // const dfs = (i, j) => {
  //   if (i < 0 || j < 0 || i >= numRows || j >= numCols || grid[i][j] === "W")
  //     return;

  //   grid[i][j] = "W"; // Mark this cell as visited

  //   // Visit all adjacent cells (up, down, left, right)
  //   dfs(i - 1, j); // Up
  //   dfs(i + 1, j); // Down
  //   dfs(i, j - 1); // Left
  //   dfs(i, j + 1); // Right
  // };

  // for (let i = 0; i < numRows; i++) {
  //   for (let j = 0; j < numCols; j++) {
  //     if (grid[i][j] === "L") {
  //       totalIsles++;
  //       dfs(i, j); // Start a DFS to mark all parts of this island
  //     }
  //   }
  // }

  // return totalIsles

  let islands = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(i, j) {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === "W") {
      return;
    }

    grid[i][j] = "W";

    return dfs(i + 1, j) || dfs(i - 1, j) || dfs(i, j + 1) || dfs(i, j - 1);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "L") {
        islands += 1;
        dfs(i, j);
      }
    }
  }

  return islands;
};

module.exports = getTotalIsles;
