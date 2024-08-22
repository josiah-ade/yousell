"use client";
import "../../app/page.css";
import { Container } from "@mui/material";
import Brand from "../Brand";
import HeaderLinksAction from "../HeaderLinksAction";
import LinkButtonPostMobile from "../LinkButtons/LinkButtonPostMobile";
import MobileView from "../MobileView";
import HeaderNav from "../NavBars/HeaderNav";
import UserProfileBox from "../UserProfileBox";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  const [fullName, setFullName] = useState<string | undefined>(
    Cookies.get("fullName")
  );
  const [loadingState, setLoadingState] = useState<boolean>(true);

  useEffect(() => {
    setLoadingState(false);
  }, []);

  useEffect(() => {
    setFullName(Cookies.get("fullName"));
  }, [pathname]);

  return (
    <div className="header">
      <Container className="header__container w-100">
        <div className="d-flex3 w-100">
          <MobileView />
          <Brand />
        </div>
        <HeaderNav className="large" />
        {!loadingState &&
          (fullName !== undefined ? <UserProfileBox /> : <HeaderLinksAction />)}
      </Container>
      <div className="post__mobile">
        <LinkButtonPostMobile />
      </div>
    </div>
  );
}

export default Header;
