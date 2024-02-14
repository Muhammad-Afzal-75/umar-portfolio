import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../image/logo.png'
const Navbar = () => {
  
    const [open, setOpen] = useState(false);

    const NavItems = [
        {
            id: 1,
            title: "Home",
            section: "#home"
        },
        {
            id: 2,
            title: "Features",
            section: "#features"
        },
        {
            id: 3,
            title: "Portfolio",
            section: "#portfolio"
        },
        {
            id: 4,
            title: "Facts",
            section: "#facts"
        },
        {
            id: 5,
            title: "Our Team",
            section: "#team"
        },
        {
            id: 6,
            title: "Testimonials",
            section: "#testimonials"
        },
        {
            id: 7,
            title: "News",
            section: "#news"
        },
        {
            id: 8,
            title: "Clients",
            section: "#clients"
        },
    ]

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        // const isDarkMode = localStorage.getItem('darkMode') === 'true';
        // setTheme(isDarkMode);
        // if (theme == false) {
        //   document.documentElement.classList.remove('dark');
        // } else {
        //   document.documentElement.classList.add('dark');
        // }
    }, []);

  

    return (
        <>
            <Button type="primary" onClick={showDrawer} className='text-2xl mt-2 md:hidden'>
                <RxHamburgerMenu />
            </Button>
            <div className='flex justify-between py-10'>
                <div className='flex justify-center'>
                    <img src={logo} alt="img" height={"120px"} width={"120px"} />
                </div>
                <div className='hidden md:block'>
                    {
                        NavItems.map((item) => {
                            return <a href={item.section} className='text-white p-3 px-5 hover:text-red-600 font-bold text-lg  inline-block'> {item.title} </a>
                        })
                    }
                </div>

            </div>


            <Drawer title="Navbar" onClose={onClose} open={open} placement='left' >
                <div className=''>
                    {
                        NavItems.map((item) => {
                            return <a href={item.section} className='text-black dark:text-white p-3 px-5 hover:text-red-600 font-bold text-lg block'> {item.title} </a>
                        })
                    }
                </div>
            </Drawer>

         
        </>
    )
}

export default Navbar