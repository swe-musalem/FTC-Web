import React from "react";
import { createPortal } from "react-dom";
import { IconContext } from "react-icons";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function SocialIcons() {
  return createPortal(
    <IconContext.Provider
      value={{
        size: "2rem",
        color: "white",
        className: "mx-auto my-3",
      }}
    >
      <div className="w-10 flex flex-col shadow-2xl self-end mt-3 mr-3 rounded-lg socialIcons hidden lg:block absolute top-24 right-0 bg-socailbg border-socailborder border-2">
        <a href="https://twitter.com/ftcksu" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/ftcksu/" target="_blank">
          <FaInstagram />
        </a>

        <a href="https://www.youtube.com/@FTCKSU" target="_blank">
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com/ftcksu/" target="_blank">
          <AiOutlineMail />
        </a>
      </div>
    </IconContext.Provider>,
    document.body
  );
}

export default SocialIcons;
