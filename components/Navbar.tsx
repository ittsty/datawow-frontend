"use client";

import Link from "next/link";
import { useState } from "react";

type userState = "user" | "admin";

const Navbar = () => {
  const [state, setstate] = useState<userState>("user");
  const [open, setOpen] = useState(false);
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
              <li>
                <Link
                  href="/admin"
                  className="block p-2 rounded-lg hover:bg-gray-200"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/history"
                  className="block p-2 rounded-lg hover:bg-gray-200"
                  onClick={() => setOpen(false)}
                >
                  History
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="block p-2 rounded-lg hover:bg-gray-200"
                  onClick={() => setOpen(false)}
                >
                  Switch to user
                </Link>
              </li>
            </ul>

            <button className="mt-6 p-2 text-red-500 hover:bg-red-100 rounded-lg w-full text-left">
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
          <li>
            <Link
              href="/admin"
              className="flex items-center gap-2 p-2 md:rounded-lg hover:bg-gray-300 transition"
            >
              <span className="">Home</span>
            </Link>
          </li>

          <li>
            <Link
              href="/admin/history"
              className="flex items-center gap-2 p-2 md:rounded-lg hover:bg-gray-300 transition"
            >
              <span className="">History</span>
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className="flex items-center gap-2 p-2 md:rounded-lg hover:bg-gray-300 transition"
            >
              <span className="">Switch to user</span>
            </Link>
          </li>
        </ul>
        <div className="mt-auto">
          <button
            className="
          flex items-center gap-2
          p-2 rounded-lg
          hover:bg-red-100
          text-red-500
          w-full
          "
          >
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
