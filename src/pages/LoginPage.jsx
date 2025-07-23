import React, { useState } from 'react';
import assets from '../assets/assets';

const LoginPage = () => {
  const [currstate, setCurrstate] = useState("sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSutmitted] = useState(false);

  const OnSubmitHandler = (event) => {
    event.preventDefault();
    
    if(currstate === 'Sign up' && !isDataSubmitted){
      setIsDataSutmitted(true)
      return;
    }

  };

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>

      {/* Left */}
      <img src={assets.logo_big} alt="Logo" className='w-[min(30vw,250px)]' />

      {/* Right */}
      <form onSubmit={OnSubmitHandler} className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
        <h2 className='font-medium text-2xl flex justify-between items-center'>
          {currstate}
           {isDataSubmitted  && <img onClick={()=> setIsDataSutmitted (false)} src={assets.arrow_icon} alt="Arrow" className='w-5 cursor-pointer' />}
          
        </h2>

        {currstate === "sign up" && !isDataSubmitted && (
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            placeholder="Full Name"
            className='p-2 border border-gray-500 rounded-md focus:outline-none'
            required
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
              required
            />
          </>
        )}

        {currstate === "sign up" && isDataSubmitted && (
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            rows={4}
            className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
            placeholder='Provide a short bio...'
            required
          ></textarea>
        )}

        <button
          type='submit'
          className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'
        >
          {currstate === "sign up" ? "Create Account" : "Login Now"}
        </button>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" required />
          Agree to the terms of use & privacy policy
        </label>

        <p
          onClick={() => setCurrstate(currstate === 'sign up' ? 'login' : 'sign up')}
          className="text-sm text-blue-300 cursor-pointer underline text-center"
        >
          {currstate === 'sign up'
            ? 'Already have an account? Login'
            : "Don't have an account? Sign up"}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
