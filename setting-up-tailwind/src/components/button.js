// src/components/button.js
import React from "react";

export default function Button({ children, ...buttonProps }) {
  return (
    <button
      className="px-2 py-1 bg-green-400 text-green-800 text-md font-light shadow-md hover:shadow-lg"
      {...buttonProps}
    >
      {children}
    </button>
  );
}
