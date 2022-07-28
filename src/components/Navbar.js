import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import CodeInLogo from "../CodeInLogo3.png";
function Navbar() {
  // eslint-disable-next-line
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
 
  return (
    <nav class="nav navbar navbar-expand-lg colorNav">
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          {isLoggedIn
            ? (<>
              <li class="nav-item">
            <a class="nav-link rounded" href="/">Roadmap</a>
              </li>
              <li class="nav-item">
                <a class="nav-link rounded" href="/subjects">Materials</a>
              </li>
              <li class="nav-item">
                <a class="nav-link rounded" href="/profile">Profile</a>
              </li>
            </>)
            :(<></>)
          }
            </ul>
            <ul className="nav navBarLogo">
        <li>
        <img src={CodeInLogo} alt="Logo" />
        </li>
        </ul>
            <ul class="navbar-nav ml-auto">
            {isLoggedIn
            ? (<>
              <li class="nav-item ">
              <button class="btn btn-outline-info" onClick={logOutUser}>Logout</button>
              </li>
            </>):
            (<>
              <li class="nav-item">
                <a class="nav-link" href="/signup">Signup </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login </a>
              </li>
            </>)
          }
        </ul>
      </div>
    </nav>
  )
}
export default Navbar