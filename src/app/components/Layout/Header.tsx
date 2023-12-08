'use client';

import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex items-center justify-center fixed top-0 left-0 right-0 z-50 shadow-md bg-blue-300">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <button
          className=" bg-fuchsia-100 text-black p-2 m-1 rounded-lg w-44 h-12">
          <Link className="select-none space-x-4 m-2 p-2" href="#who-am-i" scroll={false}>~$ Who am I</Link>
        </button>
        <button
          className=" bg-fuchsia-100 text-black p-2 m-1 rounded-lg w-44 h-12">
          <a className="select-none space-x-4 m-2 p-2" href="#tldr">~$ TL;DR</a>
        </button>
        <button
          className=" bg-fuchsia-100 text-black p-2 m-1 rounded-lg w-44 h-12">
          <a className="select-none space-x-4 m-2 p-2" href="#experience">~$ Experience</a>
        </button>
        <button
          className=" bg-fuchsia-100 text-black p-2 m-1 rounded-lg w-44 h-12">
          <a className="select-none space-x-4 m-2 p-2" href="#stack">~$ Stack</a>
        </button>
        <button
          className=" bg-fuchsia-100 text-black p-2 m-1 rounded-lg w-44 h-12">
          <a className="select-none space-x-4 m-2 p-2" href="#contributions">~$ Contributions</a>
        </button>
        <button
          className=" bg-fuchsia-100 text-black p-2 m-1 rounded-lg w-44 h-12">
          <a className="select-none space-x-4 m-2 p-2" href="#resume">~$ Resume</a>
        </button>
      </div>
    </div>
  )
}

export default Header;
