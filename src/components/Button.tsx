import { ClassValue } from "clsx";
import React from "react";
import { cn } from "../lib/utils";

interface Props {
  id: string;
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClass?: ClassValue;
}

const Button = ({ id, title, containerClass, leftIcon, rightIcon }: Props) => {
  return (
    <button
      id={id}
      className={cn(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass
      )}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
