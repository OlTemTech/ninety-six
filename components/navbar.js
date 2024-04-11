import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { BiSolidChat } from "react-icons/bi";
import { FaUserGroup } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

export default function NavBar(){
    return(
        <nav className='fixed bg-transparent z-50 w-full'>
           
            <div className='flex justify-between relative px-[3rem] py-[10px] z-50 text-white'>
                <div className='flex gap-4 items-center cursor-pointer'>
                    <div>
                        <Image src="/images/profile_pic.png" width={46} height={46}/>
                    </div>
                    <div>
                        <p className='text-[18px] font-[700]'>Anthony</p>
                        <small className='text-[12px] font-[400]'>Lvl 20</small>
                    </div>
                </div>
                <div className='flex gap-[2rem] items-center'>
                    <div className='flex gap-4 items-center cursor-pointer'>
                        < BiSolidChat size={20} className='hover:text-red-500' />
                        < FaUserGroup size={20} className='hover:text-red-500' />
                        < IoMdSettings size={20} className='hover:text-red-500' />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='flex'>
                            <Image src="/images/cash.png" width={27} height={20}/>
                            <small className='text-[14px font-[500]'>10,000</small>
                        </div>
                        < AiOutlinePlus  size={12} color='red' className='cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className=" h-[10vh] w-[100vw] top-0 fixed opacity-50 mx-auto bg-black"></div>
        </nav>
    )
}