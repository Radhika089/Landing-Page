import React from "react";

const Button = (props) => {
  return (
    <button className=" px-4 py-2 rounded-lg text-white bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0_0_12px_#8c45ff] overflow-hidden cursor-pointer">
      {props.children}
    </button>
  );
};

export default Button;
