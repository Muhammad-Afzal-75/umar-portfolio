import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Features from './Components/Features/Features'
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
function App() {
  const [theme, setTheme] = useState(false);
  useEffect(() => {

    if (theme == false) {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }

    // save in local storage
    localStorage.setItem("darkMode", theme);

}, [theme]);

const toggleDarkMode = () => {
    setTheme((theme) => !theme);
};
  

  return (
    <>
    <div>

    <section id='home'  className='bg-black'>
        <div  className='container mx-auto max-w-[1340px]'>
          <Navbar/>
          <Hero/>
        </div>
      </section>

      <section id='features' className='py-10 dark:bg-stone-900 dark:text-white'>
        <div className='container mx-auto max-w-[1340px]'>
          <Features />
        </div>
      </section>

      <div className='fixed bottom-12 left-8'>
                <button
                    onClick={toggleDarkMode}
                    className="px-4 py-2 rounded-md bg-gray-800 text-white"
                >
                    {(theme == false) ? <FaMoon /> : <BsSunFill />}
                </button>
            </div>
    </div>
      
    </>
  )
}

export default App
