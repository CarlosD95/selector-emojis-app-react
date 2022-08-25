import React, { forwardRef } from "react";
import { useState, useRef, useEffect } from "react";
import { data as EmojiList } from "./data";
import EmojiButton from "./emojiButton";
import EmojiSearch from "./emojiSearch";

export function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState([...EmojiList]);

  function handleClickOpen(){
    setIsOpen(!isOpen);
  }

  const containerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", (e) => {
        if (!containerRef.current.contains(e.target)){
            setIsOpen(false);
            setEmojis([...EmojiList])
        }
    });

    },[])
  

  function handleOnClickEmoji(emoji){
    const cursorPos = inputRef.current.selectionStart;
    const text = inputRef.current.value;
    const prev = text.slice(0, cursorPos);
    const next = text.slice (cursorPos);

    inputRef.current.value = prev + emoji.symbol + next;
    inputRef.current.selectionStart = cursorPos + emoji.symbol.length;
    inputRef.current.selectionEnd = cursorPos + emoji.symbol.length;
    inputRef.current.focus();

  }

  function handleSearch(e) {
    const q = e.target.value;

    if (!!q) {
      const search = EmojiList.filter((emoji) => {
        return (
          emoji.name.toLowerCase().includes(q) ||
          emoji.keywords.toLowerCase().includes(q)
        );
      });

      setEmojis([...search]);
    } else {
      setEmojis([...EmojiList]);
    }
  }

  return (
    <div ref={containerRef}>
      <button className="boton-mostrar" onClick={handleClickOpen}>🙄</button>
      {isOpen ? (<div className="contenedor-botones">
        <EmojiSearch onSearch={handleSearch} />
        <div>
          {emojis.map((emoji) => (
            <EmojiButton key={emoji.symbol} emoji={emoji} onClick={handleOnClickEmoji} />
          ))}
        </div>
      </div>) : ("")}
    </div>
  );
}

export default forwardRef(EmojiPicker);
