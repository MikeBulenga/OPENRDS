import React from "react";

export function Input({ type = "text", placeholder, className }) {
  return <input type={type} placeholder={placeholder} className={`p-2 border rounded ${className}`} />;
}
