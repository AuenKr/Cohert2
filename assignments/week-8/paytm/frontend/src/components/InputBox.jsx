import React from "react";

function InputBox({ onChange, id, label, type, placeholder }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-medium py-2 text-left">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full border-2 rounded-lg px-2"
        onChange={onChange}
      />
    </div>
  );
}

export default InputBox;
