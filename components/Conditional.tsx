import { useState } from "react";

export const Conditional = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        margin: "10px 0",
        padding: 10,
        border: "1px solid #eee",
        display: "flex",
        gap: 16,
        alignItems: "center",
      }}
    >
      <button
        data-testid="showHideBtn"
        type="button"
        onClick={() => setShow(!show)}
      >
        show/ hide
      </button>

      <p data-testid="showContent">{show ? "😎" : "---"}</p>
    </div>
  );
};
