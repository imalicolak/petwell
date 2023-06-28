"use client";

import { useState, useEffect } from "react";

import "./SigninComponent.css";
import Image from "next/image";
import LoginPhoto from "@/public/images/LoginPhoto.svg";
import MobilePhoto from "@/public/images/MobilePhoto.svg";
import Link from "next/link";

export default function SigninComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={
          windowWidth <= 750
            ? "grid grid-cols-1"
            : "grid grid-cols-2 gap-3 bg-white text-center"
        }
      >
        <div className="flex flex-col">
          <h2 className="text-5xl pt-24 pb-16 text-center mt-16">
            Hello There!
          </h2>
          <div className="flex flex-col">
            <input
              type="text"
              className="loginInput p-2 ml-20 mr-20 mb-2 border-2 border-black-600 rounded-md text-center"
              placeholder="Username"
            />
            <input
              type="password"
              className="loginInput p-2 ml-20 mr-20 border-2 border-black-600 rounded-md text-center"
              placeholder="Password"
            />
            <button className="loginButton mt-6 ml-20 mr-20 text-white font-bold py-2 px-4 rounded-full">
              Sign In
            </button>
            <div className="mt-6 text-sm font-display font-semibold text-gray-700 text-center">
              Don't have an account?
              <Link className="cursor-pointer" href={"/signup"}>
                Sign up
              </Link>
            </div>
          </div>
        </div>

        {windowWidth <= 750 ? (
          <Image
            src={MobilePhoto}
            className="w-full order-first -mb-28"
            alt="Cat and Dog sitting in patch of grass"
          />
        ) : (
          <div className="h-full">
            <Image
              src={LoginPhoto}
              alt="Man and Pet Dog overlooking mountain Scenery"
            />
          </div>
        )}
      </div>
    </>
  );
}
