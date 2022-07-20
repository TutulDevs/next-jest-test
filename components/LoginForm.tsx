import { SyntheticEvent } from "react";

export const LoginForm = () => {
  const handleFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    console.log("submitted!");
  };

  return (
    <form
      style={{
        margin: "10px 0",
        padding: 10,
        border: "1px solid #eee",
      }}
      onSubmit={handleFormSubmit}
      autoComplete="new-password"
    >
      <input type="text" name="name" id="name" placeholder="Name" />{" "}
      <input
        type="password"
        name="passcode"
        id="passcode"
        placeholder="Passcode"
      />{" "}
      <button type="submit">Login</button>
    </form>
  );
};
