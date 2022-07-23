// eslint-disable-next-line
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import SearchBar from './SearchBar';
import SubjectData from "../Data.json";
function Navbar() {
  // eslint-disable-next-line
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav class="navbar  navbar-expand-lg rounded colorNav">
      <SearchBar data={SubjectData} />
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
              <li class="nav-item navbar-right">
                <button class="rounded" onClick={logOutUser}>Logout</button>
                {/* <a class="nav-link" href={logOutUser}>Logout </a> */}
              </li>
            </>)
            :
            (<>
              <li class="nav-item">
                <a class="nav-link" href="/signup">Signup </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login </a>
              </li>
            </>)
          }
          {/* <form class="form-inline my-2 my-lg-0 navbar-right ml-auto">
        <input class="form-control mr-sm-2 navbar-right" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0 navbar-right" type="submit">Search</button>
      </form> */}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar