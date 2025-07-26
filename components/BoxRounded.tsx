import React, { ReactNode } from "react";

type props = {
  children: ReactNode;
};

export default function BoxRounded({ children }: props) {
  return (
    <div className="md:w-2/3 flex flex-col md:flex-col py-4 md:pr-4 gap-4 md:border-r-2 md:border-gray-100/30">
      {children}
    </div>
  );
}
