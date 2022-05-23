import React from 'react';
import Square from './Square';

class Board extends React.Component {
  Square(i) {
    return (
			<Square 
				value={ this.props.squares[i] }
				onClick={ () => this.props.onClick(i) }
			/>
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.Square(0)}
          {this.Square(1)}
          {this.Square(2)}
        </div>
        <div className="board-row">
          {this.Square(3)}
          {this.Square(4)}
          {this.Square(5)}
        </div>
        <div className="board-row">
          {this.Square(6)}
          {this.Square(7)}
          {this.Square(8)}
        </div>
      </div>
    );
  }
}
export default Board;