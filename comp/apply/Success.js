import React from "react";

const Success = () => {
  return (
    <div style={{ zIndex: 2}}>
      <div className="success-checkmark">
        <div className="check-icon">
          <span className="icon-line line-tip"></span>
          <span className="icon-line line-long"></span>
          <div className="icon-circle"></div>
          <div className="icon-fix"></div>
        </div>
      </div>

      <h1 style={{ textAlign: "center", color: "#4caf50" }}>
        Congratulations! <br />
        <span>مبارک ہو! </span>
        <br />
      </h1>
      <h1 className={`text-muted`}>
        Our team will contact you very soon! <br />
      </h1>
      <h1
        style={{ textAlign: "end" }}
        className={`fw-bold text-center text-muted `}
      >
        <span>ہماری ٹیم آپ سے بہت جلد رابطہ کرے گی!</span>
      </h1>
    </div>
  );
};

export default Success;
