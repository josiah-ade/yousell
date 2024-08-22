"use client";
import { Close } from "@mui/icons-material";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import { IconButton, Slide } from "@mui/material";
import { useState } from "react";
import HeaderNav from "../NavBars/HeaderNav";

function MobileView() {
  const [checkSidebar, setCheckSidebar] = useState<boolean>(false);

  const handleBodyClose = (className: string) => {
    if (className === "sidebar__overlay") setCheckSidebar(false);
  };

  return (
    <div className="mobile__wrapper">
      <IconButton onClick={() => setCheckSidebar(true)} className="mobile__wrapper__clicker">
        <ViewHeadlineIcon />
      </IconButton>
      <Slide direction="right" in={checkSidebar} mountOnEnter unmountOnExit>
        <div
          className="sidebar__overlay"
          onClick={(e) => handleBodyClose((e.target as HTMLDivElement).className)}
        >
          <div className="sidebar__inner">
            <div className="sidebar__close__icon">
              <IconButton onClick={() => setCheckSidebar(false)}>
                <Close />
              </IconButton>
            </div>
            <HeaderNav className="mobile"/>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default MobileView;
