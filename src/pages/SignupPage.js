import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { signupService } from '../services/auth.services';


function SignupPage(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ name, setName ] = useState('');
  const navigate = useNavigate();
	const [ errorMessage, setErrorMessage ] = useState(undefined);

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);
	const handleName = (e) => setName(e.target.value);

	const handleSignupSubmit = async (e) => {
		e.preventDefault();
		// Create an object representing the request body
		const requestBody = { email, password, name };
    try{
      await signupService(requestBody);
      navigate("/login");
    }catch(err){
      if(err.response?.status === 400){
        setErrorMessage(err.response.data.errorMessage);
        console.log(errorMessage);
      }
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
			<h1>Sign Up</h1>

			<form onSubmit={handleSignupSubmit}>
				<input type="text" id="login" className="fadeIn first" name="name" placeholder="Name" value={name} onChange={handleName} />
				<input type="text" id="login" className="fadeIn second" name="email" placeholder="Email" value={email} onChange={handleEmail} />
				<input type="password" id="password" className="fadeIn third" name="password" placeholder="Password" value={password} onChange={handlePassword} />
		     
				<input type="submit" className="fadeIn fourth" value="Signup" />
			</form>
			
			{errorMessage && <p className="error-message">{errorMessage}</p>}

			<p id="formFooter">Already have an account?<Link to={'/login'}> Log In</Link></p>

		  </div>
		</div>
		</>
		// <div className="SignupPage">
		// 	<h1>Sign Up</h1>

		// 	<form onSubmit={handleSignupSubmit}>
		// 		<label>Email:</label>
		// 		<input type="text" name="email" value={email} onChange={handleEmail} />

		// 		<label>Password:</label>
		// 		<input type="password" name="password" value={password} onChange={handlePassword} />

		// 		<label>Name:</label>
		// 		<input type="text" name="name" value={name} onChange={handleName} />

		// 		<button type="submit">Sign Up</button>
		// 	</form>

		// 	{errorMessage && <p className="error-message">{errorMessage}</p>}

		// 	<p>Already have account?</p>
		// 	<Link to={'/login'}> Login</Link>
		// </div>
	);
}

export default SignupPage;
