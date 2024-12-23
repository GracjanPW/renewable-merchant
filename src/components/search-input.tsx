"use client"
import { useRef } from "react";
import { Search } from "./icons/search-icon";
import { X } from "./icons/x-icon";

export const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleClear = () => {
    if (inputRef.current) {
        inputRef.current.value = ""
    }
  }
  return (
    <div className="search-bar-container">
      <input ref={inputRef} type="text" className="search-bar" placeholder="Search" />
      <Search />
      <button className="x-icon-button" onClick={()=>handleClear()}>
        <X />
      </button>
    </div>
  );
};
