import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = useForm();

  const navigate=useNavigate();

  const formSubmit = () => {
    alert('Success!');
    setColor("lightgreen");
    reset();
    navigate('/');
  }
  
  
  const [color, setColor] = useState();
  return (
    <div
      className="login-container"
      style={{ backgroundColor: color }}
    >
      <h2>Login Form</h2>


      <form onSubmit={handleSubmit(formSubmit)}>
        <input type='email'
          placeholder='Enter email'
          {...register('email', {
            required: 'Email is mandatory',
            pattern: {
              value: /^[A-Za-z0-9]+@gmail\.com$/,
              message: 'Mail should be a valid gmail id'
            }
          })}
        /><br />
        {errors.email && <p>{errors.email.message}</p>}

        <input type='password'
          placeholder='Enter password'
          {...register('password', {
            required: 'Mandatory',
            minLength: {
              value: 8,
              message: 'password should be at least 8 characters long'
            }
          })}
        /><br />
        {errors.password && <p>{errors.password.message}</p>}
        <button type='submit'>Login</button>
        <p>Don't Have An Account? <span><a href="/Register">Register</a></span></p>

      </form>
    </div>



  )
}

export default Login
