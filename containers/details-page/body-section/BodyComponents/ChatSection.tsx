import { Send } from "@mui/icons-material";
import React from "react";

function ChatSection() {
  return (
    <div className="card detail__page__chat">
      <div className="detail__page__overview__div">
        <h5>Send Message</h5>
      </div>
      <div className="detaill__page__message__box">
        <form>
            <textarea rows={6} placeholder="Enter Message" className="form-control"></textarea>
            <button className="btn_sm w-100 d-flex2" type="button"><Send /> Send</button>
        </form>
      </div>
    </div>
  );
}

export default ChatSection;
