import React from 'react'
import { GrBusinessService } from "react-icons/gr";
import { SlLayers } from "react-icons/sl";
import { PiUsersThree } from "react-icons/pi";
import { TbDeviceMobileUp } from "react-icons/tb";
import { FaRegChartBar } from "react-icons/fa6";
import { TbBrandWebflow } from "react-icons/tb";

function Features() {

    const FeatureCard=[
        {
            id:1,
            icon:<GrBusinessService/> ,
            title: "Business Stratagy",
            content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id:2,
            icon:<SlLayers/> ,
            title: "Website Development",
            content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id:3,
            icon:<PiUsersThree/> ,
            title: "Marketing & Reporting",
            content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id:4,
            icon:<TbDeviceMobileUp/> ,
            title: "Mobile Development",
            content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id:5,
            icon:<FaRegChartBar/> ,
            title: "Marketing & Reporting",
            content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id:6,
            icon:<TbBrandWebflow/> ,
            title: "Mobile Development",
            content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
    ]




  return (

      <div className='grid grid-cols-1 px-3 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        FeatureCard.map( item => {
            return <div key={item.id} className='p-10 hover:-translate-y-1 transition delay-250 duration-300 ease-in-out rounded-xl group hover:bg-gradient-to-r from-[#f81f01] to-[#ee076e] dark:bg-black   boxHoverGradient hover:text-white  hover:cursor-pointer bg-gray-100'>
              <p className='text-[60px] mb-4'>{item.icon}</p>
              <h3 className='text-2xl mb-4 font-bold'>{item.title}</h3>
              <p className='text-xl text-gray-500 dark:text-white   group-hover:text-white '>{item.content}</p>
            </div>
        })
      }
    </div>

  )
}

export default Features