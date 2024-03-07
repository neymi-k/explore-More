// InputField.tsx
import React, { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-3 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default InputField;
