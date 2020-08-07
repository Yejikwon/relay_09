import React, { Component } from "react";
import "./login.css";

class LoginPage extends Component {
  render() {
    return (
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            <img
              src="http://danielzawadzki.com/codepen/01/icon.svg"
              id="icon"
              alt="User Icon"
            />
          </div>

          <form>
            <input
              type="text"
              id="login"
              class="fadeIn second"
              name="login"
              placeholder="login"
            />
            <br />
            <input
              type="text"
              id="password"
              class="fadeIn third"
              name="login"
              placeholder="password"
            />
            <br />
            <input type="submit" class="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <a class="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      </div>
    );
  }
}

export default LoginPage;
