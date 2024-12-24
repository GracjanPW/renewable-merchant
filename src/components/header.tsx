import Link from "next/link";
import { Cart } from "./icons/cart";
import { Search } from "./icons/search-icon";
import { X } from "./icons/x-icon";
import { SearchInput } from "./search-input";

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
  return (
    <header className="fixed top-0 z-10 w-full bg-stone-100 shadow-md">
      <div className="w-full bg-stone-800 h-[30px]">
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
      <div className="h-[70px] w-full flex items-center justify-between px-4 max-w-6xl m-auto rounded-b-md">
        <a href="/" className="flex items-center space-x-4">
          <img src="/logo.svg" alt="logo" className="h-12 w-12" />
          <div>
            <h1 className="text-2xl font-bold text-sky-950 leading-none">
              Renewer
            </h1>
            <p className="text-md font-semibold text-slate-700">
              Renewable Energy Solutions
            </p>
          </div>
        </a>
        <nav className="flex items-end text-stone-800">
          {nav_buttons_sub.map((i, idx) => (
            <Link
              key={`${idx}-${i.text}`}
              href={i.href}
              className="p-1 px-2 rounded-md font-medium hover:text-stone-800/70"
            >
              {i.text}
            </Link>
          ))}
          <SearchInput />
          <a
            href=""
            className="flex items-center space-x-1 px-2 p-1 rounded-md hover:text-stone-800/70"
          >
            <span>Cart</span>
            <span className="w-5 h-5">
              <Cart />
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
};
