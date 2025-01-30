'use client';
// Cliend side component for the login form
import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setemail] = useState('');
  const [password, setpasword] = useState('');
  const [emailError, setemailError] = useState('');
  const [passwordError, setpasswordError] = useState('');

  const validateForm = () => {
    if (!email){
      setemailError('Email is required');
      return false;
    }else{
      setemailError('');
    }
    if (!password){
      setpasswordError('Password is required');
      return false;
    }else{
      setpasswordError('');
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if(isValid){
      console.log("Form Data;", {email: email, password: password});};
    }
    

  return (
    <div className="w-[500px] ex-auto">
      <div className="bg-white shadow-md border-gray-300 rounded-lg p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-xl font-semibold text-center">Sign In</h3>
          {/* Add the email field */}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-semibold texet-gray-900 block mb-2"
            >
              E mail
            </label>
            <input
              type="emial"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
            {emailError &&<div className='text-red-600 text-sm mt-2 ml-2'>{emailError}</div>}
          </div>

          {/* Add the password field */}
          <div>
            <label
              htmlFor="Password"
              className="text-sm font-semibold texet-gray-900 block mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setpasword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="................"
            />
            {passwordError &&<div className='text-red-600 text-sm mt-2 ml-2'>{passwordError}</div>}
          </div>
          {/* Add the remember me checkbox */}
          <div className="flex justify-between ">
            <div className="flex items-start ">
              <div className="flex items-center h-5">
                <input
                  id="remeber"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus-ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                />
              </div>
              <div className="text-sm ml-3">
                <label htmlFor="remeber" className="font-medium">
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="/forget-pasword"
              className="text-sm text-gray-800 font-semibold hover:underline ml-auto"
            >
              Forget Password?
            </a>
          </div>
          {/* Add the submit button */}
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign In{' '}
          </button>
          <div className="flex justify-center text-sm font-medium text-gray-500 space-x-2">
            <span>Don't have an account yet?</span>
            <a
              href="/register"
              className="font-medium text-blue-800 text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
