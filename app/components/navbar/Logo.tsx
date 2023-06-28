"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "@/public/images/Logo.svg";

export default function Logo() {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      alt="PetWell Logo"
      className="hidden md:block  pr-4 cursor-pointer"
      height="150"
      width="150"
      src="/images/Logo.svg"
    />
  );
}
