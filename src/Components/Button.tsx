import React from "react";

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }: ButtonProps) => {
  return <button>{text}</button>;
};

export default Button;
