"use client"

import React from "react";

const Button = ({ title, classname, onclick, id }) => {
  const classes = `px-4 py-2 text-xs tracking-widest  + ${classname}`;
  return (
    <button type="submit" className={classes} onClick={() =>onclick(id)}>
      {title}
    </button>
  );
};

export default Button;
