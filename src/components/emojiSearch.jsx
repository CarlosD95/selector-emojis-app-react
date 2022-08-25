import React from 'react'


function EmojiSearch({ onSearch }) {
  return (
    <input placeholder='Busca tu emoji...' className='input-search' type='text' onChange={onSearch}/>
  )
}

export default EmojiSearch