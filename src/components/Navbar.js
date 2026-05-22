"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@heroui/react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // TEMP user (we will replace with Firebase later)
  const user = null;

  const navLinks = (
    <>
      <Link href="/" className="hover:text-green-600">Home</Link>
      <Link href="/animals" className="hover:text-green-600">All Animals</Link>
    </>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-700">
          QurbaniHat
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks}

          {!user ? (
            <>
              <Link href="/login">
                <Button color="primary" size="sm">Login</Button>
              </Link>
              <Link href="/register">
                <Button variant="bordered" size="sm">Register</Button>
              </Link>
            </>
          ) : (
            <Button color="danger" size="sm">Logout</Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white border-t">
          {navLinks}

          {!user ? (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          ) : (
            <button className="text-red-500 text-left">Logout</button>
          )}
        </div>
      )}
    </nav>
  );
}