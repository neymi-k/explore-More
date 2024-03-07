import React, { ChangeEvent } from "react";
import InputField from "../InputField/InputField";

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  emailError?: string;
  passwordError?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  emailError,
  passwordError,
}) => {
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form>
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

export default LoginForm;
