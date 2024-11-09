import { useState } from 'react';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');

    // Function to call when change occurs
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Function to call when submitted (async to wait)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/users/register/', formData, {
                headers: { 'Content-Type': 'application/json' },
            });
            setMessage(response.data.message);
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data);
            } else {
                setMessage("An error has occured. Please try again.");
            }
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={formData.username}
                    onChange={handleChange}
                ></input>
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type='submit'>Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Register;