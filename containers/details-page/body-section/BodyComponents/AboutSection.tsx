import React from "react";

function AboutSection({data}: {data: any}) {
  return (
    <div className="card detail__page__overview__section">
      <div className="detail__page__overview__div">
        <h5>About</h5>
      </div>
      <div className="detail__page__about__div">
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default AboutSection;
