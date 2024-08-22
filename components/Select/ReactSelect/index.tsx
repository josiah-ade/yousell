"use client";
import React, { SelectHTMLAttributes } from "react";

interface optionProps {
  value: string;
  label: string;
}

interface Props {
  options: optionProps[];
  title: string;
  selected?: string;
}

function SelectReact({
  options,
  title,
  selected,
  ...rest
}: Props & SelectHTMLAttributes<HTMLSelectElement>) {

  return (
    <select className="form-input mgt-10 w-100" {...rest} value={selected}>
      <option value="">Select {title}</option>
      {options.map((data, index) => (
        <option
          value={data.value}
          key={index}
          
        >
          {data.label}
        </option>
      ))}
    </select>
  );
}

export default SelectReact;
