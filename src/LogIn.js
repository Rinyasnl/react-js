import React from 'react';
import useForm from './useForm';
import validate from './validate';

const LogIn = () => {
	const {inputs, handleInputChange, handleSubmit ,errors} = useForm({email:'',password:''},validate);
	return (
		<form onSubmit={handleSubmit}>
	      <div>
	        <label>Email Address</label>
	        <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
	      </div>
	      {errors.email && <p>{errors.email}</p>}
	      <div>
	        <label>Password</label>
	        <input type="password" name="password" onChange={handleInputChange} value={inputs.password} required/>
	      </div>
	      {errors.password && <p>{errors.password}</p>
              }
	      <button type="Submit">Login</button>
	    </form>
	)
}

export default LogIn;