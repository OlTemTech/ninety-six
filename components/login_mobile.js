import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function LoginMobile(){
    return(
<div class="login h-screen overflow-hidden  bg-cover bg-center bg-no-repeat 2xl:hidden block " style={{ backgroundImage: `url(images/mobile_auth.png)`, height: '100vh' }}>
    <div class="login_mobile w-full absolute text-white  block 2xl:hidden md:top-[15rem]  top-[8rem] left-0 items-center text-center justify-center z-50">
        <h1 class="text-[16px] font-[500] mb-4 flex gap-2 pb-[1rem] self-center justify-center">Welcome to <Image src="/images/big_logo.png" width={96} height={29}/></h1>
        <form class="pt-[2rem] flex flex-col gap-6 w-full md:px-[6rem] px-[1rem]">
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
    )
}