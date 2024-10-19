import React from "react";

const Input = ({ title, name, error, ...props }) => {
  return (
    <div>
      <label htmlFor={name} className={`text-lg font-normal text-black`}>
        {title}
      </label>
      <div>
        <input
          className="w-full h-10 px-3 bg-white rounded-md outline-none border-2 border-gray-400 focus:border-gray-700 text-black placeholder:text-gray-600 text-base"
          id={name}
          autoComplete="off"
          {...props}
        />
      </div>
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};

export default Input;
