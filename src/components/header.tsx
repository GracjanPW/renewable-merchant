"use client";
import Link from "next/link";
import { Cart } from "./icons/cart";
import { SearchInput } from "./search-input";
import { useEffect, useRef, useState } from "react";
import { Menu } from "./icons/menu";

const nav_buttons_main = [
  {
    href: "",
    text: "Home",
  },
  {
    href: "",
    text: "Store",
  },
  {
    href: "",
    text: "About Us",
  },
  {
    href: "",
    text: "Contact Us",
  },
];
const nav_buttons_sub = [
  {
    href: "",
    text: "Solar Power",
  },
  {
    href: "",
    text: "Wind Power",
  },
  {
    href: "",
    text: "Off Grid",
  },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef= useRef<HTMLElement>(null)
  return (
    <header className="fixed top-0 z-10 w-full bg-stone-100 shadow-md">
      <div className="w-full bg-stone-800 md:h-[30px] h-0 transition-all ease-in-out duration-200 overflow-hidden">
          <nav className="w-full max-w-6xl mx-auto flex justify-end">
          {nav_buttons_main.map((i, idx) => (
            <Link
            key={`${idx}-${i.text}`}
            href={i.href}
            className={
              "p-1 px-2 rounded-md hover:text-stone-400 text-white" +
              (idx === 0 ? " " : "")
            }
            >
              {i.text}
            </Link>
          ))}
        </nav>
      </div>
      <div className="h-[70px] relative w-full flex items-center justify-between px-4 max-w-6xl m-auto rounded-b-md">
        <a href="/" className="flex items-center space-x-2 md:space-x-4">
          <img src="/logo.svg" alt="logo" className="size-10 md:size-12" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-sky-950 leading-none">
              Renewer
            </h1>
            <p className="text-xs md:text-sm font-semibold text-slate-700">
              Renewable Energy Solutions
            </p>
          </div>
        </a>
        <nav ref={navRef} data-toggle="false" className="absolute data-[toggle=true]:h-[calc(100vh-66px)] md:data-[toggle=true]:h-auto items-stretch flex justify-start w-full transition-all ease-in-out duration-200 bg-stone-200 md:pt-0 flex-col bottom-1 left-0 translate-y-full text-stone-800 h-0 md:items-baseline md:h-auto overflow-hidden md:flex md:relative md:translate-y-0 md:flex-row md:w-auto md:bg-inherit">
              {nav_buttons_sub.map((i, idx) => (
                <Link
                  key={`${idx}-${i.text}`}
                  href={i.href}
                  className="md:py-1 md:px-2 py-2 font-medium md:hover:text-stone-800/70 md:hover:bg-transparent transition duration-200 ease-in-out hover:bg-stone-100/50 text-center md:text-right"
                >
                  {i.text}
                </Link>
              ))}
              <div className="md:hover:bg-transparent hover:bg-stone-100/50 py-2 transition duration-200 ease-in-out">
                <SearchInput />
              </div>

              <a
                href=""
                className="flex items-center justify-center space-x-1 md:py-1 md:px-2 py-2 md:hover:text-stone-800/70 transition duration-200 ease-in-out md:hover:bg-transparent hover:bg-stone-100/50 text-center md:text-right"
              >
                <span>Cart</span>
                <span className="w-5 h-5">
                  <Cart />
                </span>
              </a>
        </nav>
            <button className="md:hidden block" onClick={(e)=>{
             const toggled = navRef.current?.getAttribute("data-toggle")
             navRef.current?.setAttribute("data-toggle",toggled==="true"?"false":"true")
            }}>
              <Menu/>
            </button>
      </div>
    </header>
  );
};
