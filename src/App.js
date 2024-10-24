import React, {useState,useEffect}from 'react';

import './App.css';

function App() {
  const cardData = [
    { id: 1, value: '🐶' },
    { id: 2, value: '🐱' },
    { id: 3, value: '🐭' },
    { id: 4, value: '🐹' },
    { id: 5, value: '🐰' },
    { id: 6, value: '🦊' },
    { id: 7, value: '🐻' },
    { id: 8, value: '🐼' }
  ];
  const [cards, setCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);

  
  const handlecardclick=(id)=>{
const isFlipped = cardData.find(card=>card.id===id);
if(isFlipped || moves.length===2);
setMoves([...moves,id])
if(isFlipped.length===1){
  if(moves.length===1){
    const firstindex=moves[0];
    if(cardData[firstindex]===cardData[id]){
      setMatches([...matches,firstindex,id])
    }
  }
}
  }
  
  return (
   
    <div className="App">
    
      <h1>Memory Card Game</h1>
      <div>
        
       {cardData.map((card)=>{
<div
key={card.id}

onClick={()=>handlecardclick(card.id)}
>{card.value}</div>
       })}
      </div>
     
       
    </div>
  );
}

export default App;
