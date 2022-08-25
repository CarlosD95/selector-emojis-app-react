import React from 'react'

function EmojiButton({ emoji, onClick }) {

    function handleClick(){
        onClick(emoji);
    }

  return (
    <button className='boton-emoji' onClick={handleClick} >{emoji.symbol}</button>
  );
}

export default EmojiButton