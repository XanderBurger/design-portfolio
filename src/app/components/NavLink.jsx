"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link, linkName }) {
  const path = usePathname().split("/")[1];
  console.log(path);

  const currStyle = "hover:text-hot-pink";
  const selectStyle = "text-hot-pink";

  return (
    <Link
      className={`uppercase text-xl ${
        path == linkName ? selectStyle : currStyle
      }`}
      href={link}>
      {linkName}
    </Link>
  );
}
