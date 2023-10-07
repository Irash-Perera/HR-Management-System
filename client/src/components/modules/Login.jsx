import React, { useState } from 'react';
import '../styleAssets/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        console.log("User ID:", userID);
        console.log("Password:", password);

        axios.post('http://localhost:8800/login', { User_ID: userID, Password: password })
            .then(res => {
                if (res.data.status === 'Success') {
                    const role = res.data.role;
                    if (role === 'Admin') {
                        navigate('/admin');
                    } else if (role === 'Level 1') {
                        navigate('/level1');   
                    } else if (role === 'Supervisor') {
                        navigate ('/supervisor');
                    } else if (role === 'HR') {
                        navigate ('/hr');
                    } else if (role === 'Sec. Management User') {
                        navigate ('/secmanager');
                    }else {
                        console.log('Unknown role:', role);
                    }
                } else {
                    setLoginError('User ID or password is incorrect');
                    setUserID('');
                    setPassword('');
                }
            })
            .catch(err => {
                console.log(err);
                setLoginError('An error occurred during login');
            });
    }

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
            <div className='header'>
                <h1 className='heading'>Jupiter Apparels</h1>
            </div>
            <div className='bg-white glass'>
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    {loginError && <p className="text-danger">{loginError}</p>}
                    <div className='mb-3'>
                        <label htmlFor="user_id">User ID</label>
                        <input
                            placeholder='Enter User ID'
                            className='form-control'
                            value={userID}
                            onChange={e => setUserID(e.target.value)}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            className='form-control'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <button className='btn btn-success'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;