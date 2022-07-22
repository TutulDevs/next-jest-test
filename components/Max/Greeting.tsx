import { useState } from "react";
import { Output } from "./Output";

export const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => setChangedText(true);

  return (
    <div>
      <h2>Hello World!</h2>

      {/* <p>It feels good!</p> */}
      {!changedText && <Output text="It feels good!" />}

      {changedText && <Output text="Changed!" />}

      <button type="button" onClick={changeTextHandler}>
        Change Text
      </button>
    </div>
  );
};
