import React from "react";

const Button = ({ button, onClick }) => {
  return (
    <button
      className="px-2 py-1 bg-green-600 rounded text-white hover:bg-green-500"
      onClick={onClick}
    >
      {button}
    </button>
  );
};
export default Button;
