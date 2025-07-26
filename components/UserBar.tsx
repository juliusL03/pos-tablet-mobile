"use client";
import React, { useEffect, useState } from "react";

export default function UserBar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-100/80 shadow-md border-t p-2 sticky bottom-0">
      <div className="flex justify-between text-sm text-gray-700">
        <span>User: Julius Legaspi</span>
        <span>{currentTime.toLocaleString()}</span>
      </div>
    </div>
  );
}
