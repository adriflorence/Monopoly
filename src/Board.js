import React from 'react';
import './Board.css';

class MonopolyBoard extends React.Component {
  isTrue = (i) => this.props.G[i]
  render() {
    const tileStyle = {
      border: '1px solid #555',
      width: '50px',
      height: '50px',
      lineHeight: '50px',
      textAlign: 'center',
    };


    let tiles = [];
    for(let i=0; i<5; i++){
      tiles.push(
        <div key={i} style={tileStyle} className={this.isTrue(i) ? 'blue' : ''}></div>
      )
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
