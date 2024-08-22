import React, { InputHTMLAttributes } from "react";


function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...rest}></input>;
}

export default Input;
