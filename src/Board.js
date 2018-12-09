import React from 'react';
import Tile from './Tile';

class MonopolyBoard extends React.Component {

  render() {
    let tiles = []; // _top = []; let tiles_right = []; let tiles_bottom = []; let tiles_left = [];
    for(let i=0; i<this.props.G.streets.length; i++){
        let tile = {};
        tile = <Tile key={i} street={this.props.G.streets[i]} players={players}/>
        let players = [];
        for(let j = 0; j<Object.keys(this.props.G.players).length; j++){
          if(this.props.G.players[j].activeTile === i){
              players.push(this.props.G.players[j]);
          }
          tile = <Tile key={i} street={this.props.G.streets[i]} players={players}/>
        }
        tiles.push(tile);
    }

    const generateNumber = () => {
      const random = Math.floor(Math.random()*10)+2;
      this.props.moves.moveToTile(random);
    }
    const button = <button onClick={generateNumber}>click!</button>

    return (
      <div>
        {button}
        <div className="grid-container">
          {tiles}
        </div>
        <div className="info-box">
            <p>Player 1: <img className="piece" src={this.props.G.players[0].piece}/> {this.props.G.players[0].budget}</p>
            <p>Player 2: <img className="piece" src={this.props.G.players[1].piece}/> {this.props.G.players[1].budget}</p>
        </div>
      </div>
    )
  }
}

export default MonopolyBoard;
