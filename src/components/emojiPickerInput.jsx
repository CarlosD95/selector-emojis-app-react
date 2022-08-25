import React, { useRef } from 'react'
import EmojiPicker from './emojiPicker'

function EmojiPickerInput() {

    const inputRef = useRef(null);
    
  return (
    <div className='contenedor-principal'>
        <h1 className='titulo'>Chat con Emojis: 👹👶</h1>
        <input placeholder='Inserta texto aqui' className='inputRef' ref={inputRef}/>
        <EmojiPicker ref={inputRef}/>
    </div>
  )
}

export default EmojiPickerInput