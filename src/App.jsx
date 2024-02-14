import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Features from './Components/Features/Features'
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import Portfolio from './Components/Portfolio/Portfolio';
function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(null);


  useEffect(() => {
    let isDark = localStorage.getItem("isDark");
    if (isDark == 'true') {
      document.documentElement.classList.add('dark');
      setIsDarkTheme("true");
    }
  }, [])

  const toggleDarkMode = () => {
    let isDark = localStorage.getItem("isDark");
    if (isDark == null || isDark == 'false') {
      localStorage.setItem('isDark', true);
      document.documentElement.classList.add('dark');
      setIsDarkTheme("true");
    } else {
      localStorage.setItem('isDark', false);
      document.documentElement.classList.remove('dark');
      setIsDarkTheme(null);
    }
  };






  return (
    <>
      <div>

        <section id='home' className='bg-black'>
          <div className='container mx-auto max-w-[1340px]'>
            <Navbar />
            <Hero />
          </div>
        </section>









        <section id='features' className='py-32 dark:bg-stone-900 dark:text-white'>
          <div className='container mx-auto max-w-[1340px]'>
            <Features />
          </div>
        </section>









        <section id='portfolio' className='py-28 dark:bg-black bg-[#efefef] dark:text-white'>
          <div className='container mx-auto max-w-[1340px] px-4'>
            <Portfolio />
          </div>
        </section>











        <div className='fixed top-32 right-0'>
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded-md bg-gray-800 text-white"
          >
            {(isDarkTheme == "false" || isDarkTheme == null) ? <FaMoon /> : <BsSunFill />}
          </button>
        </div>
      </div>

    </>
  )
}

export default App
