import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          {isLogin ? "Login" : "Register"}
        </h1>
        {isLogin ? (
          <LoginForm
            email=""
            password=""
            setEmail={() => {}}
            setPassword={() => {}}
          />
        ) : (
          <RegisterForm
            name=""
            email=""
            password=""
            setName={() => {}}
            setEmail={() => {}}
            setPassword={() => {}}
          />
        )}
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

/* import { useState } from "react";

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

    if (!email.includes("@")) {
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

  const handleSubmit = (e = String) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO la lógica de autenticación o registro
      console.log("Formulario válido");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 bg-red-200">
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
                onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
 */
