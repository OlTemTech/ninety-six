import Image from "next/image";
import Link from 'next/link';
import { FaGoogle } from "react-icons/fa6";
import { AiFillApple } from "react-icons/ai";

export default function Home() {
  return (
    <main className="w-full h-screen bg-black ">
      <div className=" home h-[100vh] w-full bg-no-repeat bg-cover bg-center bg-fixed"  style={{ backgroundImage: `url(images/home_bg.png)`, height: '80vh' }}>
        <div className=" flex flex-col gap-[2rem] absolute z-50 top-[35%] left-0 w-full items-center text-center justify-center">
          <div className="flex flex-col items-center text-center gap-[6rem]">
            <Image src="/images/logo.png" width={380} height={240}/>
            <div className="flex gap-[15px] text-[400] text-[10px] cursor-pointer ">
              <div className="flex gap-[8px] py-[8px] px-[12px] bg-[#131A18] rounded-[7px] text-white">
                <FaGoogle size={19}/>
                <p>Continue with Google</p>
              </div>
              <div className="flex gap-[8px] py-[8px] px-[12px] bg-[#D4410F] rounded-[7px] text-white">
                <Image src="/images/logo_icon.png" width={19} height={19}/>
                <p>Continue with 96bet</p>
              </div>
              <div className="flex gap-[8px] py-[8px] px-[12px] bg-[#131A18] rounded-[7px] text-white">
              <AiFillApple size={19}/>
                <p>Continue with Apple</p>
              </div>
            </div>
          </div>
          <div>
            <Link href="#" className="border-b-white text-white self-center items-center text-[10px] font-[400]">Terms of use & priacy ploicy</Link>
          </div>
          
        </div>
        <div className="h-full w-full opacity-50 mx-auto pt-[15%] bg-black"></div>
      </div>
    </main>
  );
}
