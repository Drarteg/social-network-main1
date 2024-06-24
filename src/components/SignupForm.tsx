import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Lock from "../Img/lock.svg";
import Person from "../Img/person.svg";
import person1 from "../Img/person-circle.png";
import "../CSS/SignupForm.css"
import "../CSS/Laptod.css"


const SignupForm = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/login");
  };

  return (
    <div className="wrapper">
      <span className="bg-animate"></span>
      <img className="icon-person" src={person1} alt="person1" />

      <div className="form-box login">
        
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
          <div className="input-box " >
            <input type="password" required></input>
            <label>Сonfirm Password</label>
          </div>
          <button type="submit" className="btn" >Sign Up</button>
          <div className="logreg-link"> 
          <p>Already have an account?</p> 
          <Link  to="/login" className="register-link" >Log In</Link> 
          </div>
          
         
        </form>
      </div>
        <div className="info-text login">
          <h2>Welcome</h2>
          <p >Enter your email and create a password</p>
        </div>

        
    </div>
      
  );
};

export default SignupForm;
