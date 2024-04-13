"use client";
import {React, useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';
import { BiArrowBack } from "react-icons/bi";
import { BiSolidPencil } from "react-icons/bi";
import { IoCopy } from "react-icons/io5";
import { MdGames } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function Setting(){
    const isMobileOrTablet = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const isMobile = screenWidth < 768 && screenHeight < 1024;
        if (isMobile && screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('landscape');
          } else {
            alert('This device does not support screen orientation lock or is not a mobile/tablet.');
          }
      };
    const components = Array.from({ length: 6 }, (_, i) => i + 1);
    return(
    <main>
        <div class=" h-screen overflow-hidden relative bg-cover bg-center bg-no-repeat block " style={{ backgroundImage: `url(images/setting_bg.png)`, height: '100vh' }}>
           <div className='flex relative justify-between px-[10%] w-full h-screen z-50'>
                <div className='relative flex flex-col gap-[2rem]'>
                    <div className='flex gap-3 text-white items-center text-[18px] font-[700] py-[4rem]'>
                        <Link href="/game_zone"><BiArrowBack size={16} className='cursor-pointer'/></Link>
                        <p className='font-[400]'>User Profile</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <Image src="/images/setting_profile.png" width={150} height={150}/>
                        </div>
                        <div className='flex flex-col gap-[2rem] text-white text-[18px] font-[700]'>
                            <div className='items-center flex gap-2'>
                                <div>
                                    <p>Anthony</p>
                                    <small className='text-[12px] font-[400] '>Lvl 20</small>
                                </div>
                                <div>
                                    <BiSolidPencil size={16} color='black' className='cursor-pointer'/>
                                </div>
                            </div>
                            <div className='items-center flex gap-2'>
                                <div>
                                    <p>user-ID:</p>
                                    <small className='text-[12px] font-[400] '>754-965-239-5</small>
                                </div>
                                <div>
                                    <IoCopy size={16} color='black' className='cursor-pointer'/>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                    
                </div>
                <div className='flex flex-col gap-[2rem] w-[504px] py-[6rem] text-white'>
                    <div className='flex justify-between font-[400]'>
                        <button className=' text-[18px] bg-gradient-to-l from-red-800 to-transparent px-[5px]' onClick={isMobileOrTablet}>Friends</button>
                        <button className='bg-black rounded-[10px]  text-[13px] px-[1rem] py-[10px]'>Invite a Friend</button>
                    </div>
                    <div className='flex flex-col gap-[2rem] border border-[#E63A17] rounded-[10px] px-[10px] py-[2rem]'>
                    {components.map((component,index)=>(
                        <div key={index} className='flex px-[10px] gap-[7rem] items-center text-white'>
                            <div className='flex gap-[5rem] text-[16px] font-[400]'>
                                <div className='flex gap-[2rem]'>
                                    <span>{index}</span>
                                    <p>Nerferd:</p>
                                </div>
                                <p>Lvl 18</p>
                            </div>
                            <div className='flex gap-2 items-center text-[14px] font-[400]'>
                                <div className='flex bg-black px-[20px] py-[10px] items-center gap-2 cursor-pointer'>
                                    <span>Duel</span>
                                    <MdGames size={17}/>
                                </div>
                                <div>
                                    <MdDelete size={18} color='#E63A17' className='cursor-pointer'/>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
           </div>
            <div className=" h-[100vh] w-[100vw] top-0 opacity-60 mx-auto bg-black absolute top-0"></div>
        </div>
    </main>
    )
}