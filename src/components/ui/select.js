import React from "react";

export function Select({ children, className }) {
  return <select className={`p-2 border rounded ${className}`}>{children}</select>;
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
