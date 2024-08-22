import Link from "next/link";
import React from "react";

interface Props {
  className: string;
}

function HeaderNav({ className }: Props) {
  return (
    <div className={`links__container w-100 ${className}`}>
      <Link href="/" className="">
        Home
      </Link>
      <Link href="/categories">Categories</Link>
      <Link href="/myposts">Myposts</Link>
      <Link href="/post">Post</Link>
    </div>
  );
}

export default HeaderNav;
