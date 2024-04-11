import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import LoginMobile from '@/components/login_mobile';

export default function Login(){
    return(
    <main>
        <div class="login h-screen overflow-hidden  bg-cover bg-center bg-no-repeat hidden 2xl:block " style={{ backgroundImage: `url(images/register_bg.png)`, height: '100vh' }}>
            <div class="min-h-screen w-full 2xl:flex items-center text-center justify-center absolute border z-50 hidden">
                <div class="grid grid-cols-2 gap-8 text-white">
                    <div class="flex flex-col justify-center items-center">
                        <Image src="/images/logo.png" width={280} height={29}/>
                        <p class="text-lg ">continue your betting journey!!!!</p>
                    </div>
                </div>
                <form class="pt-[2rem] flex flex-col gap-6 w-[359px]">
                    <input type="email" placeholder="Email Address" class="input-field"/>
                    <input type="password" placeholder="Password" class="input-field"/>
                    <div className='flex flex-col gap-[1rem]'>
                        <Link href="/game_zone" class="bg-[#E63A17] text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-[2rem]">Login</Link>
                        <p className='text-[#999999]'>A new user?<Link href="/register" className='text-[#D4410F] cursor-pointer px-2'>Create account</Link></p>
                    </div>
                </form>
            
            </div>
            <div className=" h-[100vh] w-[100vw] top-0 opacity-70 mx-auto bg-black"></div>
        </div>
        <LoginMobile/>
    </main>
    )
}