import Link from "next/link";
import { Cart } from "./icons/cart";
import { Search } from "./icons/search-icon";
import { X } from "./icons/x-icon";
import { SearchInput } from "./search-input";

const nav_buttons_main = [
    {
        href:"",
        text:"Home"
    },
    {
        href:"",
        text:"Store"
    },
    {
        href:"",
        text:"About Us"
    },
    {
        href:"",
        text:"Contact Us"
    }
]
const nav_buttons_sub = [
    {
        href:"",
        text:"Solar Power"
    },
    {
        href:"",
        text:"Wind Power"
    },
    {
        href:"",
        text:"Off Grid"
    }
]

export const Header = () => {
    return (
        <header className="fixed top-0 z-10 w-full">
            <div className=" bg-sky-400 shadow-md h-[100px] w-full flex items-center justify-between px-4 max-w-6xl m-auto rounded-b-md">

            <div className="flex items-center space-x-4">
                <img src="/logo.svg" alt="logo" className="h-12 w-12" />
                <div>
                    <h1 className="text-2xl font-bold text-sky-950 leading-none">
                        Renewer
                    </h1>
                    <p className="text-md font-semibold text-slate-700">
                        Renewable Energy Solutions
                    </p>
                </div>
            </div>
            <div>
                <nav className="flex flex-col items-end">
                    <div className="font-semibold text-lg text-sky-950 space-x-[2px]">
                        {
                            nav_buttons_main.map((i,idx)=>(
                                <Link key={`${idx}-${i.text}`} href={i.href} className={"p-1 px-2 rounded-md hover:bg-white/10"+(idx===0?" bg-white/20":"")}>
                                    {i.text}
                                </Link>
                            ))
                        }
                    </div>
                    <div className="text-sky-950 text-sm flex items-center font-semibold">
                        {
                            nav_buttons_sub.map((i,idx)=>(
                                <Link key={`${idx}-${i.text}`} href={i.href} className="p-1 px-2 rounded-md hover:bg-white/10">
                                    {i.text}
                                </Link>
                            ))
                        }
                        <SearchInput/>
                        <a href="" className="text-sky-950 flex items-center space-x-1 px-2 p-1 rounded-md hover:bg-white/10">
                            <span>Cart</span>
                            <span className="w-5 h-5">
                                <Cart />
                            </span>
                        </a>
                    </div>
                </nav>
            </div>
            </div>
        </header>
    );
}