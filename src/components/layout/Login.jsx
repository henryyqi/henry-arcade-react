import {useState} from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Please enter text');
            return;
        }

        onEnter({username, password});
        setUsername('');
        setPassword('');
    }

    return (
    <form className='login-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Username</label>
            <input 
                type='text' 
                placeholder='Enter username' 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Password</label>
            <input 
                type='password' 
                placeholder='Enter password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <input type='submit' value='Login' className='button-login' />
        

    </form>
  )
}

export default Login