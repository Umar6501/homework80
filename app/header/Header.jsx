import Link from "next/link";
import React from "react";
import { VscGithub } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="bg-[#a87c80] h-[4rem] w-full p-2">
      <div className="container">
        <nav className="flex justify-between items-center">
          <div className="flex gap-3 text-white items-center m-2">
            <VscGithub className="text-3xl" />
            <h1 className="text-[1.4rem]">Github Finder</h1>
          </div>
          <div className="nav-links flex gap-5 text-white">
            <Link href="/">Главный</Link>
            <Link href="/about">О нас</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
