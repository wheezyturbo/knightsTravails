function knightMoves(start,end){
  const moves = [
    [1,2],[-1,2],[-1,-2],[1,-2],
    [2,1],[-2,1],[-2,-1],[2,-1]
  ]

  const q = [[start[0],[start[1]]]]

}
//check if the moves are valid
function isValid([a,b]){
  return (a>0 && b>0 && a<8 && b<8)
}


console.log(isValid([1,1]))
