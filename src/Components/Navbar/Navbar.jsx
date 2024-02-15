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

    return (
        <>
            <div className='px-2'>

                <div className='flex justify-between py-10 items-center'>
                    <div className=''>
                        <img src={logo} alt="img" height={"120px"} width={"120px"}  />
                    </div>
                    <div className='hidden xl:block'>
                        {
                            NavItems.map((item) => {
                                return <a href={item.section} className='sm:text-white text-black p-3 px-5 hover:text-red-600 font-bold text-lg  inline-block' id='/' > {item.title} </a>
                            })
                        }
                    </div>
                    <div onClick={showDrawer} className=' text-3xl xl:hidden text-white'>
                        <RxHamburgerMenu />
                    </div>


                </div>


                <Drawer title="Navbar" onClose={onClose} open={open} placement='left' className='dark:bg-black  bg-white' >
                    <div className=''>
                        {
                            NavItems.map((item) => {
                                return <a href={item.section} className='text-black dark:text-white text-center border-b-2 p-3 px-5 hover:text-red-600 font-bold text-lg block'id='#features' > {item.title} </a>
                            })
                        }
                    </div>
                </Drawer>
            </div>


        </>
    )
}

export default Navbar