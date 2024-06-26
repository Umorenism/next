"use client";
import Link from "next/link";
import { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { FaGem } from "react-icons/fa";
import { MdDataUsage } from "react-icons/md";
import { GiCagedBall } from "react-icons/gi";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export const NavBar = () => {
  const [nav, setNav] = useState(false);
  // const [color, setColor] = useState("transparent");
  // const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  // useEffect(() => {
  //   const changeColor = () => {
  //     if (window.screenY >= 90) {
  //       setColor("#ffffff");
  //       setTextColor("#00000");
  //     } else {
  //       setColor("transparent");
  //       setTextColor("#ffffff");
  //     }
  //   };
  //   window.addEventListener("scroll", changeColor);
  // }, []);
  return (
    <div
      // style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 "
    >
      <div className="max-w-[1240px] m-auto justify-between flex items-center p-4 text-white  border-e-emerald-50">
        <ul className="hidden sm:flex ">
          <li className="p-4">
            <h1 className="text-3xl font-bold ">Mixed Textile</h1>
          </li>
          <li className="p-4 mt-3">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 mt-3">
            <Link href="/#gallery">Galley</Link>
          </li>
          <li className="p-4 mt-3">
            <Link href="/#male">Male</Link>
          </li>
          <li className="p-4 mt-3">
            <Link href="/#female">Female</Link>
          </li>
        </ul>

        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">
              <FaGem />
            </Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">
              <FaMessage />
            </Link>
          </li>
          <li className="p-4">
            <Link href="/#male">
              <MdDataUsage />
            </Link>
          </li>
          <li className="p-4">
            <Link href="/#female">
              <GiCagedBall />
            </Link>
          </li>
        </ul>
        {/* mobile menu */}
        <div className="block sm:hidden  z-10">
          {nav ? (
            <div>
              <IoClose onClick={handleNav} size={25} />
            </div>
          ) : (
            <div>
              <IoMdMenu onClick={handleNav} size={25} />
            </div>
          )}
        </div>
        <div
          className={
            nav
              ? "absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-screen sm:hidden bg-black text-center ease-in duration-300"
              : "absolute top-0 left-[-100%] right-0 bottom-0 flex items-center justify-center w-full h-screen sm:hidden bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#gallery">Galley</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#male">Male</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#female">Female</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-[100%] bg-slate-50" />
    </div>
  );
};
