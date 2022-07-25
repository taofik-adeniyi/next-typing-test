import React, { useState } from "react";

const Display = (props) => {
  const { wordInput, handleValue, score } = props;
  const [disabled, setDisabled] = useState(!wordInput)
  return (
    <div>
      <textarea
        placeholder="lorem10"
        onChange={(e) => handleValue(e.target.value)}
        value={wordInput}
        disabled={disabled}
      ></textarea>
      <button type="button" onClick={()=>setDisabled(false)}>
        {disabled ? 'start typing' : 'typing ...'}
      </button>
    </div>
  );
};

export default Display;
// toDo restart button