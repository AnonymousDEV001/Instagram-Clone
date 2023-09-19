import React from "react";
import { Link } from "react-router-dom";

export default function OtherPages() {
    document.title = "Page not found • Instagram"
  return (
    <div>
      <div>
        <nav className="Navbar">
          <img className="instaImg" src="/instaLogo.PNG" />
          <div className="search" onClick={()=>{document.getElementById("s-img").style.display="none"}}>
            <img id="s-img" className="searchPng" src="/search-26242.png" />
            <input placeholder="Search" />
          </div>
          <div className="loginBtns">
          <Link to={"/"} ><button className="lFirst">Log in</button></Link>
          <Link to={"/"} ><button className="lSecound">Sign up</button></Link>
          </div>
        </nav>

        <div className="Main">
          <h1 className="other-Heading">Sorry, this page isn't available.</h1>
          <p className="other-Paragraph">
            The link you followed may be broken, or the page may have been
            removed. Go back to Instagram.
          </p>
        </div>
        <div class="footer">
          <p>Meta</p>
          <p>About</p>
          <p>Blog</p>
          <p>Jobs</p>
          <p>Help</p>
          <p>API</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Top Accounts</p>
          <p>Locations</p>
          <p>Instagram Lite</p>
          <p>Contact Uploading & Non-Users</p>
          <p>English</p>
          <p>&#169;2023 Instagram form Meta</p>
        </div>
        <div className="overLay">
            <div className="left-logo">
                <img src="/instaNewLOgo.PNG"/>
                <div>
                    <p className="p-h">Log into Instagram</p>
                    <p className="p-p">Log in to see photos and videos from friends and discover other accounts you'll love.</p>
                </div>
            </div>
            <div className="right-logo">
          <div className="loginBtns-D">
            <Link to={"/"} ><button className="lFirst2">Log in</button></Link>
            <Link to={"/"} ><button className="lSecound">Sign up</button></Link>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
}
