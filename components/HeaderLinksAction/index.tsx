import React from "react";
import LinkButtonLogin from "../LinkButtons/LinkButtonLogin";
import LinkButtonPost from "../LinkButtons/LinkButtonPost";
import Link from "next/link";

function index() {
  return (
    <div className="w-100 d-flex4">
      <div className="login__container">
        <LinkButtonLogin />
        <Link href="/register" className="link__signup">Sign Up</Link>
      </div>
      <LinkButtonPost />
    </div>
  );
}

export default index;
