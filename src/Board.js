import React from 'react';
import './Board.css';
import Tile from './Tile';

class MonopolyBoard extends React.Component {
  render() {

    let tiles = [];
    for(let i=0; i<this.props.G.streets.length; i++){
      let tile = {};
      if(this.props.G.activeTile === i){
          tile = <Tile key={i} street={this.props.G.streets[i]} isActive={true}/>
      } else {
          tile = <Tile key={i} street={this.props.G.streets[i]} isActive={false}/>
      }
      tiles.push(tile);
    }
    const generateNumber = () => {
      this.props.moves.selectCell(
        Math.floor(Math.random() * Math.floor(tiles.length))
      )
    }
    const button = <button onClick={generateNumber}>click!</button>

    return (
      <div>
        {button}
        {tiles}
      </div>
    )
  }
}

export default MonopolyBoard;
