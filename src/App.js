import React from 'react';
import logo from './logo.svg';
import './App.css';
import VendingMachine from './Component/VendingMachine/VendingMachine'

import Board from './Component/Board/Board';
import DragCard from './Component/DragCard/DragCard';
import { red } from 'bn.js';

function App() {
  return (
    <div className="App">
      <VendingMachine>
      </VendingMachine>

      {/* <Board id = 'board-1' className ='board'>
        <DragCard id = 'card-1' className = 'card' draggable = 'true'>
          <p>AAAAAAAAAA</p>
        </DragCard>
      </Board>
      <Board id = 'board-2' className ='board'>
        <DragCard id = 'card-2' className = 'card' draggable = 'true'>
          <p>BBBBBBBBB</p>
        </DragCard>
      </Board> */}
     
    </div>
  );
}

export default App;
