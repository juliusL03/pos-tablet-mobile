import React, { ReactNode } from "react";

type props = {
  children: ReactNode;
};

export default function Container({ children }: props) {
  return <div className="flex flex-col md:flex-row h-screen gap-2 px-4">{children}</div>;
}
