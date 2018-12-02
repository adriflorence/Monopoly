import {Client} from 'boardgame.io/react';
import {Game} from 'boardgame.io/core';
import MonopolyBoard from './Board.js';

const game = Game({
  setup: (ctx) => {
    const G = {
      streets: ['OLD KENT ROAD', 'WHITECHAPEL ROAD',
      'THE ANGEL, ISLINGTON', 'EUSTON ROAD', 'PENTONVILLE ROAD',
      'PALL MALL', '	WHITEHALL', 'NORTHUMBERLAND AVENUE',
      'BOW STREET', 'MARLBOROUGH STREET', 'VINE STREET'
    ],
      activeTile : -1
    };
    return G;
  },
  moves: {
    selectCell (G, ctx, index) {
        G.activeTile = index;
    }
  }
})

const App = Client( {
  game: game,
  board: MonopolyBoard
});

export default App;
