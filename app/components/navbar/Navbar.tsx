import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className=" w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px] ">
        <div className="flex flex-row items-center lg:justify-between sm:justify-between gap-3 md:gap-0  m-4">
          <Logo />
          <div>
            <ul className="flex gap-3 font-semibold">
              <li className="text-[#286675] hover:text-[#e27126] ">
                <Link href={"/home"}> Home </Link>
              </li>
              <li className="text-[#286675] hover:text-[#e27126]">
                <Link href={"/signin"}>Sign in</Link>
              </li>
              <li className="text-[#286675] hover:text-[#e27126]">
                <Link href={"/signup"}> Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
