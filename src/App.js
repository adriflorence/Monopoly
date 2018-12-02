import {Client} from 'boardgame.io/react';
import {Game} from 'boardgame.io/core';
import MonopolyBoard from './Board.js';

const game = Game({
  setup: (ctx) => {
    const G = {
      1: false,
      2: false,
      3: false
    };
    return G;
  },
  moves: {
    selectCell (G, ctx, id) {
        G[id] = !G[id]
    }
  }
})

const App = Client( {
  game: game,
  board: MonopolyBoard
});

export default App;
