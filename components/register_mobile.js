import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function RegisterMobile(){
    return(
    <div class=" register  overflow-scroll  bg-cover bg-center bg-no-repeat block 2xl:hidden" style={{ backgroundImage: `url(images/mobile_auth.png)`, height: '100vh'}}>
        <div class="w-full relative  text-white h-[100vh]  block 2xl:hidden md:top-[10rem]  top-[1rem] left-0 items-center text-center justify-center z-50">
            <h1 class="text-[16px] font-[500] mb-4 flex gap-2 pb-[1rem] self-center justify-center">Welcome to <Image src="/images/big_logo.png" width={96} height={29}/></h1>
            <div class="pt-[2rem] flex flex-col gap-6 w-full md:px-[10rem] px-[1rem]">
                <input type="text" placeholder="Full Name" class="input-field"/>
                <input type="email" placeholder="Email Address" class="input-field"/>
                <input type="password" placeholder="Password" class="input-field"/>
                <input type="password" placeholder="Confirm Password" class="input-field"/>
                <input type="text" placeholder="Phone Number" class="input-field"/>
                <input type="date" placeholder="Date of Birth" class="input-field"/>
                <input type="text" placeholder="Country" class="input-field"/>
                <div className='flex flex-col gap-[1rem]'>
                    <button class="bg-[#E63A17] text-white py-2 rounded-lg hover:opacity-70 transition duration-300 mt-[2rem]">Create Account</button>
                    <p className='text-[#999999]'>Already a user?<Link href="/login" className='text-[#D4410F] cursor-pointer px-2'>Login</Link></p>
                </div>
            </div>
        
        </div>
        <div className="cover_bg h-[100vh] w-full absolute top-0 opacity-80 mx-auto bg-black"></div>

    </div>
    )
}