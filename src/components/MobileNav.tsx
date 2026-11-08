"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { navBarList } from "@/constants";

interface Props {
  signedIn: boolean;
  isAdmin: boolean;
}

const MobileNav = ({ signedIn, isAdmin }: Props) => {
  const [open, setOpen] = useState(false);

  const links = [
    ...navBarList,
    { title: signedIn ? "Dashboard" : "Sign in", link: signedIn ? "/dashboard" : "/signin" },
    ...(signedIn ? [{ title: "Orders", link: "/orders" }] : []),
    ...(isAdmin ? [{ title: "Studio", link: "/studio" }] : []),
  ];

  return (
    <div className="relative inline-flex md:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        className="flex items-center justify-center w-8 h-6 cursor-pointer text-2xl"
      >
        {open ? <HiX /> : <HiMenuAlt2 />}
      </button>
      {open && (
        <nav className="absolute right-0 top-10 w-48 z-50 flex flex-col py-2 bg-white border border-lightText/20 rounded-md shadow-lg">
          {links.map((item) => (
            <Link
              href={item.link}
              key={item.link}
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-base font-semibold hover:text-darkOrange duration-300"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
