import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="container_header">
        <div className="wrapper_link">
          <Link className="link" href={ROUTER.HOME}>
            <div className="containrt_link">
              <p>Home</p> <div className="line"></div>
            </div>
          </Link>
          <Link className="link" href={ROUTER.CARDS}>
            <div className="containrt_link">
              <p>Cards</p> <div className="line"></div>
            </div>
          </Link>
        </div>
				<div className="logo">Marvel Heroes</div>
      </div>
    </header>
  );
};
export default Header;
