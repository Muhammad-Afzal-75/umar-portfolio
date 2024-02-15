import React from 'react'
import Slider from "react-slick";
import image1 from '../../image/image-1.jpg'
import image2 from '../../image/image-2.jpg'
import image3 from '../../image/image-3.jpg'
import image4 from '../../image/image-4.jpg'
import image5 from '../../image/image-5.jpg'
import image6 from '../../image/image-6.jpg'
function Portfolio() {




  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  const portfolio = [
    {
      id: 1,
      Path: <img src={image1} alt='' className='rounded-lg' />,
      title: "Graphic",
      heading: "Getting tickets to the next show"
    },
    {
      id: 2,
      Path: <img src={image2} alt='' className='rounded-lg' />,
      title: "Freelancer",
      heading: "You can see your Portfolio"
    },
    {
      id: 3,
      Path: <img src={image3} alt='' className='rounded-lg' />,
      title: "App Development",
      heading: "The Language Of Develper"
    },
    {
      id: 4,
      Path: <img src={image4} alt='' className='rounded-lg' />,
      title: "Development",
      heading: "How To The Right Agency For Your Specific Product"
    },
    {
      id: 5,
      Path: <img src={image5} alt='' className='rounded-lg' />,
      title: "Mobile App",
      heading: "The Ultimate Guide To Agency"
    },
    {
      id: 6,
      Path: <img src={image6} alt='' className='rounded-lg' />,
      title: "Graphic",
      heading: "How To Trun Agency From Zero To Hero"
    },
  ]


  return (
    <>
      <div>
        <h1 className='text-[60px] font-bold'>Our Portfolio</h1>
        <p className='text-[18px]  text-[#827173]'>There are many variations of passages of Lorem Ipsum available, <br />
          but the majority have suffered alteration.</p>
      </div>



      <div className="slider-container mt-24 px-4 rounded-lg">
        <Slider {...settings}>
          {portfolio.map((item) => {
            return (
              <div key={item.id} className='px-5 relative rounded-lg  hover:scale-110  transition delay-150 duration-300 ease-in-out my-8'>
                <div className='relative' >
                  {item.Path}
                  <div className='cursor-pointer rounded-xl  hover:bg-gradient-to-r from-[#f81f01] to-[#ee076e] h-full absolute opacity-75 z-10 w-full top-0 left-0'></div>
                  
                </div>
                <div className='absolute bottom-5 p-5 left-0 z-20'>
                    <p className='text-white px-5 '>{item.title}</p>
                    <h2 className='text-white px-5 mb-4 text-3xl'>{item.heading}</h2>
                    <button className='p-2 ms-5 border hover:-translate-y-1 transition delay-250 duration-300 ease-in-out   rounded-md text-white hover:bg-gradient-to-r from-[#f81f01] to-[#ee076e] ' >CASE STUDY</button>
                  </div>
                 

              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default Portfolio