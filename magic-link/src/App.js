import { Magic } from "magic-sdk";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom"
import { OAuthExtension } from '@magic-ext/oauth';

function App() {
  const [magicEmail, setMagicEmail] = useState();
  const [magicGitHub, setMagicGitHub] = useState();

  const navigate = useNavigate();
  const emailRef = useRef();

  useEffect(() => {
    setMagicEmail( new Magic('pk_live_5F9CDB57BFB95FA1'));
    setMagicGitHub( new Magic('pk_live_5F9CDB57BFB95FA1', {
      extensions: [new OAuthExtension()],
    }));
  }, []);

  const handleLogin = async () => {
    //MagicLinkを使ってログイン
    try {
      console.log(emailRef.current.value);
      await magicEmail.auth.loginWithMagicLink({
        email: emailRef.current.value
      });
      navigate("/homepage");
    } catch (err) {
      console.log(err);
    }
  }

  const handleLoginWithGitHub = async () => {
    try {
      await magicGitHub.oauth.loginWithRedirect({
        provider: "github",
        redirectURI: "http://localhost:3000/homepage",
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <div className="loginForm">
        <div className="loginContents">
          <h2>ログイン</h2>
          <input type="email" placeholder="メールアドレス" ref={emailRef} />
          <button className="loginButton" onClick={() => handleLogin()}>ログイン</button>
          <div className="buttons">
            <button onClick={() => handleLoginWithGitHub()}>Github</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;