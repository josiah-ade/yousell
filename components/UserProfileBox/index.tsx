import extractFirstLetter from "@/lib/functions/extractFirstLetter";
import { Close, Logout } from "@mui/icons-material";
import { IconButton, Slide } from "@mui/material";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import PagesIcon from "@mui/icons-material/Pages";
import { usePathname } from "next/navigation";

function UserProfileBox() {
  const pathname = usePathname();

  const [checkSidebar, setCheckSidebar] = useState<boolean>(false);

  const fullName = Cookies.get("fullName") as string;

  const handleBodyClose = (className: string) => {
    if (className === "sidebar__overlay2") setCheckSidebar(false);
  };

  useEffect(() => {
    checkSidebar && setCheckSidebar(false);
  }, [pathname]);

  return (
    <div className="w-100 d-flex4">
      <IconButton onClick={() => setCheckSidebar(true)}>
        <div className="text__name__container2">
          <p>{extractFirstLetter(fullName)}</p>
        </div>
      </IconButton>
      <Slide direction="left" in={checkSidebar} mountOnEnter unmountOnExit>
        <div
          className="sidebar__overlay2"
          onClick={(e) =>
            handleBodyClose((e.target as HTMLDivElement).className)
          }
        >
          <div className="sidebar__inner2">
            <div className="sidebar__close__icon">
              <IconButton onClick={() => setCheckSidebar(false)}>
                <Close />
              </IconButton>
            </div>
            <div className="w-100">
              <p className="mgt-20 mgb-20 full__name__text">
                <span>
                  <WavingHandIcon /> Hi,{" "}
                </span>{" "}
                {fullName}
              </p>
              
              <div className="profile_box">
                <Link href="/myposts" className="profile__links">
                  <PagesIcon /> My Posts
                </Link>
              </div>

              <Link href="/logout" className="link__logout mgt-40">
                <Logout /> Log Out
              </Link>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default UserProfileBox;
