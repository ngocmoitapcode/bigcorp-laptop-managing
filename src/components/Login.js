import "./css/Login.css";
import Logo from "./img/logo.jpg";

export default function Login() {
  return (
    <div className="container">
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="companyName">BigCorp</div>
      <div className="LoginForm">
        <h2 className="h2">Sign In</h2>
        <div>
            <p>New User? <a href='www.google.com' style={{textDecoration: 'none'}}>Create An Account</a></p>
            
        </div>
        <form>
          <div className="form-group">
            <input type="text" name="email" placeholder="Email Adress"></input>
          </div>
          <div className="form-group">
            <input type="text" name="password" placeholder="Password"></input>
          </div>
          <div className="signIn-button">
            <button type="submit" className="btn-signIn">Sign In</button>
          </div>
        </form>
        <div className="forgetPassword">
            <a href="www.google.com">Forget Password?</a>
        </div>
      </div>
    </div>
  );
}
