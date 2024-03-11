/* import React, { ChangeEvent } from "react";
import InputField from "../InputField/InputField";

interface RegisterFormProps {
  name: string;
  email: string;
  password: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  nameError?: string;
  emailError?: string;
  passwordError?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
  nameError,
  emailError,
  passwordError,
}) => {
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Valor del campo Nombre:", e.target.value);
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form>
      <InputField
        label="Name"
        type="text"
        value={name}
        onChange={handleNameChange}
        error={nameError}
      />
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        error={emailError}
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        error={passwordError}
      />
    </form>
  );
};

export default RegisterForm;
 */
