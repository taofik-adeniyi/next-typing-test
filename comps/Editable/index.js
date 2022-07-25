import React from "react";

const Editable = ({
  isEditing,
  setEditing,
  children,
  onChange,
  value,
}) => {
  return (
    <section>
      <small onClick={() => setEditing(!isEditing)} style={{margin: '.6rem 0'}}>
        {/* Click to paste your words, or click the word below */}
        {isEditing ? 'Click around to save your words' : 'Click to paste your words'}
        </small>
      {isEditing ? (
        <div onBlur={() => setEditing(false)}>
          <textarea
            onChange={onChange}
            value={value}
            style={{ margin: 0, height: '3rem'}}
          ></textarea>
        </div>
      ) : (
        <div
          style={{ marginTop: ".5rem" }}
          title="Click to paste your words"
          onClick={() => setEditing(true)}
        >
          {children}
        </div>
      )}
    </section>
  );
};

export default Editable;