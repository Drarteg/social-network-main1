import { Link, useNavigate } from "react-router-dom";
import "../CSS/LoginForm.css"
import "../CSS/Laptod.css"
import Lock from "../Img/lock.svg";
import Person from "../Img/person.svg";


const LoginForm = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    sessionStorage.setItem("login", "true");
    navigate("/");
  };
  return (
    <div className="wrapper">
      <span className="bg-animate"></span>

      <div className="form-box login">
        <h2 >Login</h2>
        <form action="#" onSubmit={onSubmit} >
          <div className="input-box " >
            <input type="text" required></input>
            <label>Username</label>
            <img className="icon" src={Person} alt="person"/>
          </div>
          <div className="input-box " >
            <input type="password" required></input>
            <label>Password</label>
            <img className="icon" src={Lock} alt="lock"/>
          </div>
          <button type="submit" className="btn" >Login</button>
          <div className="logreg-link"> 
          <p>Don't have an account?</p> 
          <Link to="/signup" className="register-link" >Sign Up</Link> 
          </div>
          
          <button type="submit" className="btn1" >Connect with Google</button>
          <button type="submit" className="btn2" >Connect with Facebook</button>
        </form>
      </div>
        <div className="info-text login">
          <h2>Welcome Back!</h2>
          <p>Enter login and password</p>
        </div>

        
    </div>
      
  );
};

export default LoginForm;
