import React from "react";

export default function CustomFilter({ title, name, type, ...rest }) {
  return (
    <div className="flex flex-col mt-4">
      <label className="text-white mb-2" htmlFor={name}>{title}</label>
      <input name={name} type={type} {...rest} />
    </div>
  );
}
