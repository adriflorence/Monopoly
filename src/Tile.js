import React from 'react';

class Tile extends React.Component {

  getActiveTileClass = () => this.props.isActive ? 'active-tile' : 'inactive';

  render() {

    return (<div className={this.getActiveTileClass()}>
        {this.props.street}
    </div>)
  }

}

export default Tile;
