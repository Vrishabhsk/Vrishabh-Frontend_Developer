import React from "react";

export default function SearchBar({ title, name, onChange }) {
  return (
    <div className="pr-5 w-full pt-1">
      <label className="text-white" htmlFor={name}>
        {title}
      </label>
      <div className="relative pt-2">
        <input
          type="search"
          name={name}
          className="block w-full p-4 text-sm text-gray-900 rounded-lg dark:bg-gray-700 dark:text-white"
          placeholder="Search Capsules"
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}
