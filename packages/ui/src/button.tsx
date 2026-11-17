"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  appName: string;
}

export const Button = ({
  children,
  appName,
  onClick,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      {...props}
      onClick={onClick ?? (() => alert(`Hello from your ${appName} app!`))}
    >
      {children}
    </button>
  );
};
