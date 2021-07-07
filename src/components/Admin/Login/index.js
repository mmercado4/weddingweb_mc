import React, { Fragment, useState, useEffect } from "react";
import { HOST, APIPORT } from "../../../tools/consts";
import { sanitizeString } from "../../../tools/sanitize";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const [login, setLogin] = useState(false);

  const LOGIN_WARNINGS = {
    EMPTY_FIELDS: "Usuario/contraseña pendiente",
    LOGIN_SUCCESS: "Usuario logueado correctamente",
  };

  const handleChange = (e) => {
    if (e.target.id === "login-user") {
      setUser(e.target.value);
    } else if (e.target.id === "login-password") {
      setPassword(e.target.value);
    }
  };

  const validateForm = () => {
    if (user.length === 0 || password.length === 0) {
      setWarning(LOGIN_WARNINGS.EMPTY_FIELDS);
      return false;
    }
    return true;
  };

  const handleClick = () => {
    if (validateForm()) {
      setWarning("");
      let urlLogin = "/api/login";
      let userLogin = {
        user: sanitizeString(user),
        password: sanitizeString(password),
      };

      let opts = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogin),
        credentials: "include", //Include credentials to create token cookie
      };

      // axios(opts)
      //   .then((response) => {
      //     console.log(response);
      //     if (response.data.success) {
      //       setWarning(LOGIN_WARNINGS.LOGIN_SUCCESS);
      //       setTimeout(() => {
      //         setLogin(true);
      //       }, 1500);
      //     }
      //   })
      //   .catch((error) => console.log(error));

      fetch(`${HOST}${APIPORT}${urlLogin}`, opts)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            setWarning(LOGIN_WARNINGS.LOGIN_SUCCESS);
            setTimeout(() => {
              setLogin(true);
            }, 1500);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Fragment>
      <input
        onChange={handleChange}
        type="text"
        name="login-user"
        id="login-user"
        placeholder="Usuario"
        value={user}
      ></input>
      <input
        onChange={handleChange}
        type="text"
        name="login-password"
        id="login-password"
        placeholder="Contraseña"
        value={password}
      ></input>
      <p>{warning}</p>
      <button onClick={handleClick}>Acceder</button>

      {login ? <Redirect to="admin" /> : null}
    </Fragment>
  );
}
