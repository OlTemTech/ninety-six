import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import RegisterMobile from '@/components/register_mobile';

export default function Register(){
    return(
<main class=" register h-[100vh] overflow-scroll  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(images/register_bg.png)`}}>
    <div class="min-h-screen w-full 2xl:flex items-center text-center justify-center absolute border z-50 hidden">
        <div class="grid grid-cols-2 gap-8 text-white">
            <div class="flex flex-col justify-center">
                <h1 class="text-3xl font-bold mb-4 flex gap-2">Welcome to <Image src="/images/big_logo.png" width={96} height={29}/></h1>
                <p class="text-lg ">Join us and start your betting journey!</p>
            </div>
        </div>
        <div class="pt-[2rem] flex flex-col gap-6 w-[359px]">
            <input type="text" placeholder="Full Name" class="input-field"/>
            <input type="email" placeholder="Email Address" class="input-field"/>
            <input type="password" placeholder="Password" class="input-field"/>
            <input type="password" placeholder="Confirm Password" class="input-field"/>
            <input type="text" placeholder="Phone Number" class="input-field"/>
            <input type="date" placeholder="Date of Birth" class="input-field" className='w-full'/>
            <input type="text" placeholder="Country" class="input-field"/>
            <div className='flex flex-col gap-[1rem]'>
                <button class="bg-[#E63A17] text-white py-2 rounded-lg hover:opacity-70 transition duration-300 mt-[2rem]">Create Account</button>
                <p className='text-[#999999]'>Already a user?<Link href="/login" className='text-[#D4410F] cursor-pointer px-2'>Login</Link></p>
            </div>
        </div>
       
    </div>
    <div className=" h-[100vh] w-[100vw] top-0 opacity-80 mx-auto bg-black"></div>
    <RegisterMobile/>
    
    </main>
    )
}