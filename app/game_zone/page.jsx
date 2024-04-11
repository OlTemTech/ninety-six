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
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slideMargin: 40,
    arrows: false,
    slidesToScroll: 1,
}

export default function Login(){
    return(
    <main>
        <div class=" h-screen overflow-hidden  bg-cover bg-center bg-no-repeat block " style={{ backgroundImage: `url(images/register_bg.png)`, height: '100vh' }}>
            <NavBar/>
            <div className='h-full w-full relative my-[20%]'>
                <Slider {...setting} className='w-full h-[174px] border'>
                    {game_zone.map((game,index)=>(
                        <div className='h-[174px] w-[207px] border text-center items-center py-[19%]' key={index} style={{ backgroundImage: `url(images/home_bg.png)`, height: "174px", width:"207px" }}>
                            <p>{game.descriptive}</p>
                        </div>
                    ))}
                </Slider >
            </div>
            <div className=" h-[100vh] w-[100vw] absolute top-0 opacity-50 mx-auto bg-black"></div>
           
        </div>
    </main>
    )
}