import React from "react";

function Card({data}) {

  
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{data.name}</h2>
        <img className="circle-img" src={data.imgURL} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{data.phone}</p>
        <p className="info">{data.email}</p>
      </div>
    </div>
  );
};


export default Card;
