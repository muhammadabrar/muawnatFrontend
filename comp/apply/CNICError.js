import React from "react";

const CNICError = () => {
  return (
    <div style={{textAlign: "center"}}>
      <div className="success-checkmark">
        <div className="check-icon">
          <span className="icon-line line-tip"></span>
          <span className="icon-line line-long"></span>
          <div className="icon-circle"></div>
          <div className="icon-fix"></div>
        </div>
      </div>

      <h1 style={{ textAlign: "center", color: "#4caf50" }}>
        <br />
        You Are Allready Submited Your Info! <br />
        <span>
          {" "}
          آپ نے پہلے ہی اپنی معلومات جمع کرادی ہیں۔!{" "}
        </span>
        <br />
        <br />
      </h1>
    </div>
  );
};

export default CNICError;
