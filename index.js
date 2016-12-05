var nicl = require ("nicl");

 
function main() {

  var board = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']];

  var displayBoard = function(board) {
    var display = '' + board[0][0] + ' ' + board[0][1] + ' ' + board[0][2] + '\n' + 
    board[1][0] + ' ' + board[1][1] + ' ' + board[1][2] + '\n' + 
    board[2][0] + ' ' + board[2][1] + ' ' + board[2][2];
    console.log(display);
  }

  var move = function(character) {
    displayBoard(board);
    nicl.printLine('Hi ' + character + ', what\'s your move?');
    //0 - 8
    var move = nicl.readLine();
    var moveRow = Number(move[0]);
    var moveCol = Number(move[2]);
    board[moveRow][moveCol] = character;
    displayBoard(board);
    return [moveRow, moveCol];
  }

  var hasWon = function(row, col, character) {
    //check row
    if (board[row][0] === character && board[row][1] === character && board[row][2] === character) {
      return true;
    } 

    if (board[0][col] === character && board[1][col] === character && board[2][col] === character) {
      return true;
    } 

    // if (board[][col] === character && board[1][col] === character && board[2][col] === character) {
    //   return true;
    // } 
    return false;
  }

  for (var i = 0; i < 9; i ++) {
    var char = i%2 === 0 ? 'x' : 'o';
    var playerMove = move(char);
    if (hasWon(playerMove[0], playerMove[1], char)) {
      console.log('Player ', char, ' has won!');
      break;
    }
  }

}
 
nicl.run(main);