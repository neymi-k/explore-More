import { useState, useCallback, ChangeEvent } from "react";
import React from "react";
import { Navigate } from "react-router-dom";
import { login, register } from "../../services/auth.service";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [redirectTo, setRedirectTo] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (!isLogin && name.trim() === "") {
      setNameError("El nombre es requerido.");
      isValid = false;
    } else {
      setNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Por favor, introduce un email válido.");
      isValid = false;
    } else {
      setEmailError("");
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "La contraseña debe tener al menos 6 caracteres, contener al menos una mayúscula, una minúscula y un número."
      );
      isValid = false;
    } else {
      setPasswordError("");
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        let response;
        if (isLogin) {
          response = await login(email, password);
          console.log("Usuario logueado:", response);
          setShouldRedirect(true);
          setRedirectTo("/home");
        } else {
          response = await register(name, email, password);
          console.log("Usuario registrado:", response);
          alert("Registro exitoso. Ahora puedes iniciar sesión.");
          setIsLogin(true);
          setEmail("");
          setPassword("");
          setName("");
          setEmailError("");
          setPasswordError("");
          setNameError("");
        }
      } catch (error) {
        console.log("Error en el envío del formulario:", error);
      }
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
      {shouldRedirect && <Navigate to={redirectTo} />}
      <div className="bg-white p-8 rounded shadow-md w-4/5 md:w-1/2 lg:w-1/3 ">
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
