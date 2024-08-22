import extractFirstLetter from "@/lib/functions/extractFirstLetter";
import { CheckCircle, ClearRounded } from "@mui/icons-material";
import React, { useState } from "react";

function UserSection({ data }: { data: any }) {
  const [verified] = useState<boolean>(true);

  return (
    <div className="card detail__page__user">
      <div className="detail__page__user__div">
        <div className="d_p_u_dd d-flex2">
          {/* <img src="/images/user.jpg" alt="alt" /> */}
          <div className="text__name__container">
            <p>{extractFirstLetter(data.userDetails.fullName)}</p>
          </div>
          <p>{data.userDetails.fullName}</p>
          <div className="deatail__pageuser__verified">
            {verified ? (
              <h6>
                <span className="a_yes">
                  <CheckCircle />
                </span>
                Verified
              </h6>
            ) : (
              <h6>
                <span className="a_no">
                  <ClearRounded />
                </span>
                Not Verified
              </h6>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSection;
