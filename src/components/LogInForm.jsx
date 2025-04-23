import React from 'react'

function LogInForm() {
  return (
    <div>
        <form>
            <input type='text' placeholder='Enter Username'/>
            <input type='password' placeholder='Enter Password'/>
            <input type="checkbox" name="signin" />
            <label for="signin"> I have an account I want to Sign In</label>
            <input type="checkbox"  name="register" />
            <label for="register"> I don't have an account I want to Register</label>
            <input type="submit" name='submit'/>
        </form>
    </div>
  )
}

export default LogInForm