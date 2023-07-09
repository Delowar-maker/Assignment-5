import { useState } from "react";

const Content = (props) => {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const handleButtonClick = () => {
    setDisplayText(text);
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}></textarea>
      <br />
      <button onClick={handleButtonClick}>Display Text</button>
      <p>{displayText}</p>
    </div>
  );
};

export default Content;
