import React from 'react';

class Tile extends React.Component {

  render() {
    let tile_type = this.props.street.cssClass;
    if(this.props.street.type === 'street'){
      return (
        <div className="tile" style={{backgroundColor: this.props.playerColour }}>
            <div className={['tile_header', tile_type].join(' ')}></div>
            {this.props.street.name}
            <p>{this.props.street.cost}</p>
        </div>
      )}
    else {
      return (
        <div className="tile" style={{backgroundColor: this.props.playerColour }}>
            {this.props.street.name}
            <p>{this.props.street.cost}</p>
        </div>
      )}
  }

}

export default Tile;
