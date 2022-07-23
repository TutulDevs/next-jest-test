import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import styles from "../styles/Home.module.css";

const Login: NextPage = () => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    console.log(userInfo);

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Test - Jest - Max</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={userInfo.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={userInfo.email}
              onChange={handleChange}
            />

            {userInfo.email && !/\S+@\S+\.\S+/.test(userInfo.email) && (
              <small data-testid="emailError" className="errorText">
                Invalid Email
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={userInfo.password}
              onChange={handleChange}
            />

            {userInfo.password &&
              (userInfo.password.length <= 5 ||
                userInfo.password.length >= 10) && (
                <small data-testid="passwordError" className="errorText">
                  Invalid Password
                </small>
              )}
          </div>

          <div className="form-group">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="Confirm Password"
              value={userInfo.passwordConfirm}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              disabled={
                userInfo.username === "" ||
                userInfo.email === "" ||
                userInfo.password === "" ||
                userInfo.passwordConfirm === ""
              }
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
