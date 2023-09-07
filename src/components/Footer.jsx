import React from "react";
import { createPortal } from "react-dom";

function Footer() {
  return createPortal(
    <div
      className="footer flex flex-col justify-center text-center h-28 bottom-0"
      style={{
        background: "rgb(101, 53, 187);",
        background:
          "linear-gradient(90deg, rgba(101, 53, 187, 1) 0%,rgba(42, 158, 234, 1) 100%)",
      }}
    >
      <p className="ps mt-au text-white">
        Future Technology Club 2011-{new Date().getFullYear()}
      </p>
    </div>
  ,document.body);
}

export default Footer;
