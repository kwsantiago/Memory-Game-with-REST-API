'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /game
 */
module.exports = {
    /**
     * summary: Retrieves the current state of the game
     * description: Returns an array of card objects, where position in
     *  the array indicates card ID and the "cleared" property indicates
     *  if its match has already been found. The value of cleared cards is also
     *  reported.
     * 
     * parameters: (none)
     * produces: application/json, text/json
     * responses: 200
     * operationId: game_get
     */
    get: {
        200: function (req, res, callback) {
            // Only reveal cleared card values
            var currentBoardState = [];
            var board = global.board;

            for (var i=0; i < board.length; i++){
                var card = {};
                card.cleared = board[i].cleared;
                if ("true" == card.cleared) {  // To debug the board, comment this line
                    card.value = board[i].value;
                }                              // And this line
                currentBoardState.push(card);
            }
            return currentBoardState;
        }
    }
};