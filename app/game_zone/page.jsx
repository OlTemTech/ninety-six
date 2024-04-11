"use client";
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import NavBar from '@/components/navbar';
import { game_zone } from '../items';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slideMargin: 40,
    arrows: false,
    slidesToScroll: 1,
}

export default function Login(){
    return(
    <main>
        <div class=" h-screen overflow-hidden  bg-cover bg-center bg-no-repeat block items-center mx-auto " style={{ backgroundImage: `url(images/register_bg.png)`, height: '100vh' }}>
            <NavBar/>
            <div className='h-[100vh] w-full  my-[20%] px-[10%] relative z-50'>
                <Slider {...setting} className='w-full h-[174px]' >
                    {game_zone.map((game,index)=>(
                    <div className='h-full relative z-50 flex w-[207px] mx-auto px-[2rem]  cursor-pointer' key={index}>
                        <div className='absolute h-[100%] w-[82%] mx-[2rem] left-0 bg-black opacity-50 rounded-[1rem]'></div>
                        <div className='h-[174px] bg-black text-center items-center bg-center bg-cover rounded-[1rem] py-[20%]'  style={{ backgroundImage: `url(${game.image})` }}>
                            <p className='z-50 relative text-white text-[20px] font-[700]'>{game.descriptive}</p>
                        </div>
                    </div>
                    ))}
                    
                </Slider>
            </div>
            <div className=" h-[100vh] w-[100vw] absolute top-0 opacity-10 mx-auto bg-black"></div>
           
        </div>
    </main>
    )
}