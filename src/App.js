import {Client} from 'boardgame.io/react';
import {Game} from 'boardgame.io/core';
import MonopolyBoard from './Board.js';
import './style.css';

const game = Game({
  setup: (ctx) => {
    const G = {
      streets: [
        {name: 'GO', cost:'M200'},
        {name: 'OLD KENT ROAD', cost: '60', type: 'street', cssClass: 'brown'},
        {name: 'COMMUNITY CHEST', cssClass: ''},
        {name: 'WHITECHAPEL ROAD', cost: '60', type: 'street', cssClass: 'brown'},
        {name: 'INCOME TAX', cost: '200'},
        {name: 'KINGS CROSS STATION', cost: '200', cssClass: 'station'},
        {name: 'THE ANGEL, ISLINGTON', cost: '100', type: 'street', cssClass: 'lightblue'},
        {name: 'Chance', cssClass: ''},
        {name: 'EUSTON ROAD', cost: '100', type: 'street', cssClass: 'lightblue'},
        {name: 'PENTONVILLE ROAD', cost: '120', type: 'street', cssClass: 'lightblue'},
        {name: 'JAIL', cssClass: ''},
        {name: 'PALL MALL', cost: '140', type: 'street', cssClass: 'pink'},
        {name: 'Eletricity', cost: '150', cssClass: 'utility'},
        {name: 'WHITEHALL', cost: '140', type: 'street', cssClass: 'pink'},
        {name: "NORTHUM -BERLAND AVE", cost: '160', type: 'street', cssClass: 'pink'},
        {name: 'MARYLEBONE STATION', cost: '200', cssClass: 'station'},
        {name: 'BOW STREET', cost: '180', type: 'street', cssClass: 'orange'},
        {name: 'COMMUNITY CHEST'},
        {name: 'MARLBOROUGH STREET', cost: '180', type: 'street', cssClass: 'orange'},
        {name: 'VINE STREET', cost: '200', type: 'street', cssClass: 'orange'},
        {name: 'FREE PARKING'},
        {name: 'STRAND', cost: '220', type: 'street', cssClass: 'red'},
        {name: 'Chance'},
        {name: 'FLEET STREET', cost: '240', type: 'street', cssClass: 'red'},
        {name: 'TRAFALGAR SQUARE', cost: '240', type: 'street', cssClass: 'red'},
        {name: 'FENCHURCH ST. STATION', cost: '200', cssClass: 'station'},
        {name: 'LEICESTER SQUARE', cost: '260', type: 'street', cssClass: 'yellow'},
        {name: 'COVENTRY STREET', cost: '260', type: 'street', cssClass: 'yellow'},
        {name: 'Water Works', cost: '150', cssClass: 'utility'},
        {name: 'PICCADILLY', cost: '280', type: 'street', cssClass: 'yellow'},
        {name: 'GO TO JAIL'},
        {name: 'REGENT STREET', cost: '300', type: 'street', cssClass: 'green'},
        {name: 'OXFORD STREET', cost: '300', type: 'street', cssClass: 'green'},
        {name: 'COMMUNITY CHEST'},
        {name: 'BOND STREET', cost: '320', type: 'street', cssClass: 'green'},
        {name: 'LIVERPOOL ST. STATION', cost: '200', cssClass: 'station'},
        {name: 'Chance'},
        {name: 'PARK LANE', cost: '350', type: 'street', cssClass: 'blue'},
        {name: 'SUPER TAX', cost: '100'},
        {name: 'MAYFAIR', cost: '400', type: 'street', cssClass: 'blue'},
      ],
      players: {
        0: {
          colour: '#ea2323',
          activeTile: 0,
          budget: 1000,
        },
        1: {
          colour: '#6eb749',
          activeTile: 0,
          budget: 1000,
        }
      }
    };
    return G;
  },
  moves: {
    moveToTile (G, ctx, index) {
      let nextTile = G.players[ctx.currentPlayer].activeTile + index;
      if(nextTile < G.streets.length-1){
        G.players[ctx.currentPlayer].activeTile = nextTile;
        if ('cost' in G.streets[nextTile] && G.players[ctx.currentPlayer].budget >= parseInt(G.streets[nextTile].cost)) {
          G.players[ctx.currentPlayer].budget -= parseInt(G.streets[nextTile].cost);
        }
      }else{
        G.players[ctx.currentPlayer].activeTile = nextTile % G.streets.length;
        G.players[ctx.currentPlayer].budget += 200;
        if ('cost' in G.streets[nextTile % G.streets.length] && G.players[ctx.currentPlayer].budge >= parseInt(G.streets[nextTile % G.streets.length].cost)) {
          G.players[ctx.currentPlayer].budget -= parseInt(G.streets[nextTile].cost);
        }
      }
    }
  },
  flow: {
    movesPerTurn: 1
  }
})

const App = Client( {
  game: game,
  board: MonopolyBoard,
  numPlayers: 2,
  debug: false
});

export default App;
