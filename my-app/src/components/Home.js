import '../css/Home.css';
import { useHistory } from "react-router-dom";
import { useState } from "react";
import config from '../config.json'


export default function Start() {
  let history = useHistory();
  const [password, setPassword] = useState("");


  const Login = () => {

    const newconfig = config.map((config) => {
      if (password === config.password) {
        if (config.type === "mng_password")
          history.push("/management")
        else
          history.push("/group")
      }
    })
  }
  return (
    <div class="background">
      <div class="container">
        <div class="screen">
          {/* <div class="screen-header">
            <div class="screen-header-left">
            </div> */}
            {/* <div class="screen-header-right">
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
            </div> */}
          {/* </div> */}
          <div class="screen-body">
            <div class="screen-body-item left">

              <div class="app-title">
                <span>הכנס סיסמה</span>
              </div>
            </div>
            <div class="screen-body-item">
              <div class="app-form">
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="ENTER PASSWORD" onChange={(e) => setPassword(e.target.value)} />
                  <br /><br /><br />
                  <button class="app-form-button" onClick={() => Login(password)} >כניסה</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

