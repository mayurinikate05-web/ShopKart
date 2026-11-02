import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState:{
      errors
    }
  } = useForm();
  const navigate=useNavigate();

  const formSubmit =()=>{
    alert('Success!');
    reset();
    navigate('/Login');
  } 
  

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}>
                <input type='text'
                    placeholder='Enter Name'
                    autoFocus
                    {...register('name', {
                        required: 'Name is mandatory'
                    })}
                /><br />
                {errors.name && <p>{errors.name.message}</p>}
                <input type='number'
                    placeholder='Enter age'
                    {...register('age', {
                        required: 'Age is mandatory',
                        min: {
                            value: 18,
                            message: 'Age should be >=18'
                        }
                    })}
                /><br />
                {errors.age && <p>{errors.age.message}</p>}

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
                {errors.email && <p>{errors.age.email}</p>}

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
                <button type='submit'>Register</button>
                <p>Alredy Have an Account <span><a href="/Login">Login</a></span></p>
            </form>
    </div>
  )
}

export default Register
