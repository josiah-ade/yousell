import React from "react";
import { FavoriteBorderOutlined, Message, Share } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function IconActions() {
  return (
    <div className="card">
      <div className="detail__page__overview__div">
        <h5>Action</h5>
      </div>
      <div className="detail__page__iconaction">
        <div className="detail__page__iconaction__icons">
          <IconButton>
            <FavoriteBorderOutlined />
          </IconButton>
        </div>
        <div className="detail__page__iconaction__icons">
          <IconButton>
            <Message />
          </IconButton>
        </div>
        <div className="detail__page__iconaction__icons">
          <IconButton>
            <Share />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default IconActions;
