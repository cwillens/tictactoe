var nicl = require ("nicl");

 
function main() {

  var board = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];

  var displayBoard = function(board) {
    var display = '' + board[0] + ' ' + board[1] + ' ' + board[2] + '\n' + 
    board[3] + ' ' + board[4] + ' ' + board[5] + '\n' + 
    board[6] + ' ' + board[7] + ' ' + board[8];
    console.log(display);
  }

  var move = function(character) {
    displayBoard(board);
    nicl.printLine('Hi ' + character + ', what\'s your move?');
    //0 - 8
    var move = nicl.readLine();
    var moveNum = Number(move);
    board[moveNum] = character;
  }

  move('x');

}
 
nicl.run(main);