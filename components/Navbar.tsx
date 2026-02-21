"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LogoutButton from "./LogoutButton";

type userState = "user" | "admin";

const Navbar = () => {
  const [state, setState] = useState<userState>("user");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("role") as userState | null;
    if (saved) setState(saved);
  }, []);

  const switchRole = (role: userState) => {
    setState(role);
    localStorage.setItem("role", role);
    setOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("role");
    setState("user");
  };

  return (
    <>
      <div className="md:hidden flex items-center justify-between bg-gray-100 p-4 border-b ">
        <h1 className="text-2xl font-semibold text-black ">{state}</h1>
        <button onClick={() => setOpen(!open)} className="flex flex-col gap-1">
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/30"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-64 h-full bg-gray-100 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-2xl font-semibold mb-4 text-black">{state}</h1>
            <ul className="flex flex-col gap-2 text-black">
              {state === "admin" && (
                <li>
                  <Link
                    href="/admin"
                    className="flex items-center gap-2 p-2 md:rounded-lg hover:bg-gray-300 transition"
                  >
                    <span className="">Home</span>
                  </Link>
                </li>
              )}
              {state === "admin" && (
                <li>
                  <Link
                    href="/admin/history"
                    className="flex items-center gap-2 p-2 md:rounded-lg hover:bg-gray-300 transition"
                  >
                    <span className="">History</span>
                  </Link>
                </li>
              )}
              <li>
                {state === "admin" ? (
                  <Link
                    href="/"
                    className="flex items-center gap-2 p-2 md:rounded-lg hover:bg-gray-300 transition"
                    onClick={() => switchRole("user")}
                  >
                    <span className="">Switch to user</span>
                  </Link>
                ) : (
                  <Link
                    href="/admin"
                    className="flex items-center gap-2 p-2 md:rounded-lg hover:bg-gray-300 transition"
                    onClick={() => switchRole("admin")}
                  >
                    <span className="">Switch to admin</span>
                  </Link>
                )}
              </li>
            </ul>
            <button
              className="mt-6 p-2 text-red-500 hover:bg-red-100 rounded-lg w-full text-left"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
      <nav className="hidden navbar md:w-2/10 md:h-dvh p-2 bg-gray-100 md:flex md:flex-col border-2">
        <div className="p-2">
          <h1 className="text-2xl font-semibold text-black">{state}</h1>
        </div>
        <ul className="flex md:flex-col md:gap-2 w-full text-black">
          {state === "admin" && (
            <li>
              <Link
                href="/admin"
                className="flex items-center gap-2 p-2 md:rounded-lg hover:bg-gray-300 transition"
              >
                <span className="">Home</span>
              </Link>
            </li>
          )}
          {state === "admin" && (
            <li>
              <Link
                href="/admin/history"
                className="flex items-center gap-2 p-2 md:rounded-lg hover:bg-gray-300 transition"
              >
                <span className="">History</span>
              </Link>
            </li>
          )}
          <li>
            {state === "admin" ? (
              <Link
                href="/"
                className="flex items-center gap-2 p-2 md:rounded-lg hover:bg-gray-300 transition"
                onClick={() => switchRole("user")}
              >
                <span className="">Switch to user</span>
              </Link>
            ) : (
              <Link
                href="/admin"
                className="flex items-center gap-2 p-2 md:rounded-lg hover:bg-gray-300 transition"
                onClick={() => switchRole("admin")}
              >
                <span className="">Switch to admin</span>
              </Link>
            )}
          </li>
        </ul>
        <div className="mt-auto">
          <LogoutButton />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
