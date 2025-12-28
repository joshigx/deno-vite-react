import { useRef } from 'react';

export default function Form() {
  
  const inputRef = useRef<HTMLInputElement | null>(null);
  //https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements
  //https://developer.mozilla.org/de/docs/Web/API/HTMLInputElement

  function handleClick() {
    
    inputRef.current?.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button type="button" onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
