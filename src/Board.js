import React from 'react';
import Tile from './Tile';

class MonopolyBoard extends React.Component {

  render() {
    let tiles = []; // _top = []; let tiles_right = []; let tiles_bottom = []; let tiles_left = [];
    for(let i=0; i<this.props.G.streets.length; i++){
        let tile = {};
        tile = <Tile key={i} street={this.props.G.streets[i]} playerColour='#fff'/>
        console.log(this.props.G);
        for(let j = 0; j<Object.keys(this.props.G.players).length; j++){
          if(this.props.G.players[j].activeTile === i){
              tile = <Tile key={i} street={this.props.G.streets[i]} playerColour={this.props.G.players[j].colour}/>
          }
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

        </div>
      </div>
    )
  }
}

export default MonopolyBoard;
