import React, {useState, useEffect} from "react";

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const[submitted, setSubmitted] = useState(false)

  useEffect(() =>{
    if(firstName && lastName &&validateEmail(email))
    {
setIsFormValid(true)
    }
    else{
      setIsFormValid(false)
    }
  },[firstName,lastName,email])
  const validateEmail = (email) => {
    // Regular expression to validate email address
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
   
      setFirstNameError(e.target.value? '' :'first name is required' );
   
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setLastNameError(e.target.value? '' : 'last name is required');
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value === '') {
      setEmailError('Email is required');
    } else  {
      setEmailError(validateEmail(e.target.value)?  "" :'please enter a valid email address');
    } 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && validateEmail(email)) {
      
    } else {
      setFirstNameError(firstName ? '' : 'first name is required');
      setLastNameError(lastName ? '' : 'last name is required');
      setEmailError(email ? 'please enter a valid email address' : 'Email is required');
      setIsFormValid(false);
    }
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit}>
     {submitted? <div className="success">Success! Thanks for registering.</div> : null}
     <div> <input type="text" value={firstName} onChange={handleFirstNameChange} placeholder="first name"/>
        {firstNameError && <span>{firstNameError}</span>} </div>
        <div>
        <input type="text" value={lastName} onChange={handleLastNameChange} placeholder="last name"/>
        {lastNameError && <span>{lastNameError}</span>}</div>
        <div>
        <input type="email" value={email} onChange={handleEmailChange} placeholder="email address"/>
        {emailError && <span>{emailError}</span>}
        </div>
        <div>
      <button type="submit" disabled={!isFormValid}>Submit</button></div>
    </form>
  );
}

export default App;
