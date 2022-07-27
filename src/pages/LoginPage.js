import { useState, useContext } from 'react';
// import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './../context/auth.context';
import { loginService } from '../services/auth.services';
function LoginPage(props) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState(undefined);
    const navigate = useNavigate();
    const { logInUser } = useContext(AuthContext);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const requestBody = { email, password };
        try {
            const response = await loginService(requestBody);
            const token = response.data.authToken;
            logInUser(token);
            navigate('/');
        } catch (err) {
            const errorDescription = err?.response?.data?.message;
            setErrorMessage(errorDescription);
        }
    };
    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="wrapper wrapper3 fadeInDown">
        <br></br>
          <div id="formContent" className="loginCol">
          <br></br>
            <h1>Login</h1>
            <form onSubmit={handleLoginSubmit}>
                <input type="text" id="login" className="fadeIn first" name="email" placeholder="Email" value={email} onChange={handleEmail} />
                <input type="password" id="password" className="fadeIn second" name="password" placeholder="Password" value={password} onChange={handlePassword} />
                <input type="submit" className="fadeIn third" value="Login" />
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p id="formFooter">Don't have an account yet?<Link to={'/signup'}>    <br></br>Sign Up</Link></p>
          </div>
        </div>
        </>
    );
}
export default LoginPage;
