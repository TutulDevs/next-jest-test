import { SyntheticEvent, useState } from "react";

interface User {
  name: string;
  email: string;
  age: number | string;
}

export const LoginForm = ({ onSubmit = () => {} }) => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    age: "",
  });

  const handleFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    onSubmit();

    console.log(user);
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
      <input
        data-testid="inputName"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        data-testid="inputEmail"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />{" "}
      <input
        data-testid="inputAge"
        type="number"
        name="age"
        id="age"
        placeholder="Age"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
      />{" "}
      <button
        data-testid="submitBtn"
        disabled={user.name === "" || user.age === "" || user.email === ""}
        type="submit"
      >
        Login
      </button>
      {/* error */}
      {user.email && !/\S+\S+\.\S+/.test(user.email) && (
        <p data-testid="errorMsg">asjdflasdjf klajsdf </p>
      )}
    </form>
  );
};
