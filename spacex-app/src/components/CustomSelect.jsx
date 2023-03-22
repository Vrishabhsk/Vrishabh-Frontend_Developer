import React from "react";

export default function CustomSelect({ title, name, options, className, onChange }) {
  return (
    <div className="flex flex-col mt-4">
      <label className="text-white mb-2" htmlFor={name}>
        {title}
      </label>
      <select onChange={onChange} className={className} name={name}>
        {options?.map((option, key) => {
          return (
            <option key={key} value={option?.value}>
              {option?.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
