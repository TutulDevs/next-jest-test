import { useState } from "react";

export const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => setChangedText(true);

  return (
    <div>
      <h2>Hello World!</h2>

      {/* <p>It feels good!</p> */}
      {!changedText && <p>It feels good!</p>}

      {changedText && <p>Changed!</p>}

      <button type="button" onClick={changeTextHandler}>
        Change Text
      </button>
    </div>
  );
};
