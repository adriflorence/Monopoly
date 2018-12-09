import React from 'react';

class Tile extends React.Component {



  render() {
    let tile_type = this.props.street.cssClass;

      if(this.props.street.type === 'street'){
        // if there is player(s) on tile
        if(this.props.players.length > 0){
          return (
            <div className="tile">
                <div className={['tile_header', tile_type].join(' ')}></div>
                {this.props.street.name}
                <p>{this.props.street.cost}</p>
                {this.props.players.map(player => <span><img className="piece" src={player.piece}/></span>)}
            </div>
          )
        } else {
          return (
            <div className="tile">
                <div className={['tile_header', tile_type].join(' ')}></div>
                {this.props.street.name}
                <p>{this.props.street.cost}</p>
            </div>
          )
        }
      }
      else {
        if(this.props.players.length > 0){
          return (
            <div className="tile">
                {this.props.street.name}
                <p>{this.props.street.cost}</p>
                {this.props.players.map(player => <span><img className="piece" src={player.piece}/></span>)}
            </div>
          )
        } else {
          return (
            <div className="tile">
                {this.props.street.name}
                <p>{this.props.street.cost}</p>
            </div>
          )}
        }
      }

}

export default Tile;
