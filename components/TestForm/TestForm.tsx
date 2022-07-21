import React, { useState } from "react";

export const TestForm = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <input
        type="email"
        placeholder="Enter email"
        data-testid="email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {email && !/\S+@\S+\.\S+/.test(email) && (
        <span className="error" data-testid="error-msg">
          Please enter a valid email.
        </span>
      )}
    </div>
  );
};
