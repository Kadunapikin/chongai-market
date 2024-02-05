import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestSignup, signupSuccess, signupFailure } from '../../features/auth/authSlice';


const SignUp: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const dispatch = useDispatch(); // Initialize dispatch
    
        dispatch(requestSignup());
        try {
            // Simulate API call for signup
            const userData = { email, username }; // Assume success and mock response
            dispatch(signupSuccess(userData));
            // Handle post-signup logic, like UI update or redirection
        } catch (error) {
            dispatch(signupFailure('Failed to sign up'));
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-md">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        SignUp
                    </button>
                    <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-800">Login</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
