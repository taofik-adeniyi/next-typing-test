import React from "react";

const Nav = (props) => {
  const { words, score, correctWordArray, activeWordIndex } = props;
  return (
    <nav>
      <h3>Typing Speed Test Challenge</h3>
      <div>
      {activeWordIndex === words?.split(" ").length && <div>You Score: {score} / {words?.split(" ").length}</div>}
      </div>
    </nav>
  );
};

export default Nav;
