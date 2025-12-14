// src/components/TextInput/TextInput.tsx
import React from "react";
import { TextInputProps } from "../../types";

const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}) => {
  return (
    <div className="w-full">
      <textarea
        placeholder={placeholder}
        defaultValue={initialValue}
        rows={6}
        onChange={(e) => onTextChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
