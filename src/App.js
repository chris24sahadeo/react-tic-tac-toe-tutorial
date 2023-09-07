/* 
Needed to fix the error:
./src/App.js
tic-tac-toe-app-1  |   Line 2:  'React' must be in scope when using JSX  react/react-in-jsx-scope
*/
import React, {useState} from 'react';

function Square() {

  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  )
}

export default function Board() {
  return (
    <React.Fragment>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </React.Fragment>
  );
}