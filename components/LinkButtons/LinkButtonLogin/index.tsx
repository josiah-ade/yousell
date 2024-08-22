import { Login } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

function LinkButtonLogin() {
  return (
    <Link href="/login" className="link__login">
      <Login /> Sign In
    </Link>
  );
}

export default LinkButtonLogin;
