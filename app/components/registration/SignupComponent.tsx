"use client";

import { useState, useEffect } from "react";
import "@/app/components/registration/SigninComponent.css";
import Image from "next/image";
import LoginPhoto from "@/public/images/LoginPhoto.svg";
import MobilePhoto from "@/public/images/MobilePhoto.svg";
import Logo from "@/public/images/Logo.svg";
import Link from "next/link";

import { getUser, registerUser } from "@/app/services/userApi";

export default function LoginModal() {
  // Getting userdata from the backend as an object
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    user_firstname: "",
    user_lastname: "",
  });
  const [user, setUser] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if the password is empty, put something IN
    if (userData.password === "")
      setUser({ message: "Please Enter a valid username and password" });
    else if (userData.password === userData.confirm_password) {
      await registerUser(userData);

      let response = await getUser();
      setUser(response);
    } else {
      setUser((prev) => ({
        ...prev,
        message: "Confirm password must be the same as password",
      }));
    }
  };
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
          <div className="absolute left-5 top-2"></div>
          <h2 className="text-5xl pt-6 pb-16 text-center mt-16">
            Hello There!
          </h2>
          <div className="flex flex-col">
            <form onSubmit={handleSubmit}>
              <input
                name="user_firstname"
                type="text"
                className="loginInput p-2 ml-20 mr-20 mb-2 border-2 border-black-600 rounded-md text-center"
                placeholder="First Name"
                value={userData.user_firstname}
                onChange={handleChange}
              />
              <input
                name="user_lastname"
                type="text"
                className="loginInput p-2 ml-20 mr-20 mb-2 border-2 border-black-600 rounded-md text-center"
                placeholder="Last Name"
                value={userData.user_lastname}
                onChange={handleChange}
              />
              <input
                name="username"
                type="text"
                className="loginInput p-2 ml-20 mr-20 mb-2 border-2 border-black-600 rounded-md text-center"
                placeholder="Username"
                value={userData.username}
                onChange={handleChange}
              />
              <input
                name="email"
                type="email"
                className="loginInput p-2 ml-20 mr-20 mb-2 border-2 border-black-600 rounded-md text-center"
                placeholder="Email"
                value={userData.email}
                onChange={handleChange}
              />
              <input
                name="password"
                type="password"
                className="loginInput p-2 ml-20 mr-20 mb-2 border-2 border-black-600 rounded-md text-center"
                placeholder="Password"
                value={userData.password}
                onChange={handleChange}
              />
              <input
                name="confirm_password"
                type="password"
                className="loginInput p-2 ml-20 mr-20 border-2 border-black-600 rounded-md text-center"
                placeholder="Confirm Password"
                value={userData.confirm_password}
                onChange={handleChange}
              />
              <button className="loginButton mt-4 ml-20 mr-20 text-white font-bold py-2 px-4 rounded-full">
                Sign Up
              </button>
            </form>
            <div className="mt-4 text-sm font-display font-semibold text-gray-700 text-center">
              Have an account?
              <Link className="cursor-pointer" href={"/signin"}>
                Sign in
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
