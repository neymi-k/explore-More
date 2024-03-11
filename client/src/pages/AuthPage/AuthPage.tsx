/* import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmailError("");
    setPasswordError("");
    setNameError("");
  };
  const validateForm = () => {
    let isValid = true;

    if (!isLogin && nameError === "") {
      setNameError("El nombre es requerido.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!emailError) {
      setEmailError("Por favor, introduce un email válido.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!passwordError) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Lógica de autenticación o registro
      console.log("Formulario válido");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: "url('/fondo2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl text-red-700 mb-4 text-center">
          {isLogin ? "Login" : "Register"}
        </h1>
        {isLogin ? (
          <LoginForm
            email={email}
            password={password}
            setEmail={() => {}}
            setPassword={() => {}}
            emailError={emailError}
            passwordError={passwordError}
          />
        ) : (
          <RegisterForm
            name={name}
            email={email}
            password={password}
            setName={() => {}}
            setEmail={() => {}}
            setPassword={() => {}}
            nameError={nameError}
            emailError={emailError}
            passwordError={passwordError}
          />
        )}
        <button
          type="submit"
          className="w-full  text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline bg-red-700 hover:bg-red-600"
          onClick={handleSubmit}
        >
          {isLogin ? "Log In" : "Sign Up"}
        </button>
        <p className="mt-4 text-sm text-center">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span className="text-blue-500 cursor-pointer" onClick={toggleForm}>
            {isLogin ? "Sign Up" : "Log In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage; */

import { useState, useCallback, ChangeEvent } from "react";
import React from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (!isLogin && name.trim() === "") {
      setNameError("El nombre es requerido.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Por favor, introduce un email válido.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
      setPasswordError(
        "La contraseña debe contener al menos una mayúscula, una minúscula y un número."
      );
      isValid = false;
    }

    return isValid;
  };

  const toggleForm = () => {
    setEmailError("");
    setPasswordError("");
    setNameError("");

    setEmail("");
    setPassword("");
    setName("");

    setIsLogin(!isLogin);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO la lógica de autenticación o registro
      console.log("Formulario válido");
    }
  };

  const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: "url('/fondo2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl mb-4 text-red-700 text-center">
          {isLogin ? "Login" : "Register"}
        </h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                onChange={handleNameChange}
              />
              {nameError && <p className="text-red-500 text-xs">{nameError}</p>}
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              onChange={handleEmailChange}
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-wine-200 focus:border-wine-200 sm:text-sm"
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <p className="text-red-500 text-xs">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full  text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline bg-red-700 hover:bg-red-600"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span className="text-blue-500 cursor-pointer" onClick={toggleForm}>
            {isLogin ? "Sign Up" : "Log In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
