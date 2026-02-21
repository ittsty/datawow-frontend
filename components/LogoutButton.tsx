"use client";

import { useEffect, useState } from "react";

function generateUID() {
  return "u_" + Math.random().toString(36).substring(2, 8);
}

export default function LogoutButton() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    let uid = localStorage.getItem("userId");

    if (!uid) {
      uid = generateUID();
      localStorage.setItem("userId", uid);
    }

    setUserId(uid);
  }, []);

  function handleGenerateNewUser() {
    const newUID = generateUID();
    localStorage.setItem("userId", newUID);
    setUserId(newUID);

    // reload เพื่อ refresh state ทั้งหน้า
    window.location.reload();
  }
  return (
    <button
      className="flex items-center gap-2 p-2 rounded-lg hover:bg-red-100 text-red-500 w-full"
      onClick={handleGenerateNewUser}
    >
      Logout
    </button>
  );
}
