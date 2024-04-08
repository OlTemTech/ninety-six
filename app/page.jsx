import Image from "next/image";
import Link from 'next/link';
import { FaGoogle } from "react-icons/fa6";
import { AiFillApple } from "react-icons/ai";

export default function Home() {
  return (
    <main className="w-full h-screen bg-black ">
      <div className=" home h-[100vh] w-full bg-no-repeat bg-cover bg-center bg-fixed"  style={{ backgroundImage: `url(images/home_bg.png)`, height: '80vh' }}>
        <div className=" flex flex-col gap-[2rem] absolute z-50 md:top-[35%] top-[12%] left-0 w-full items-center text-center justify-center">
          <div className="flex flex-col items-center text-center gap-[6rem]">
            <Image src="/images/logo.png" className="md:block hidden" width={380} height={240}/>
            <Image src="/images/logo.png" className="block md:hidden" width={260} height={140}/>
            <div className="flex md:flex-row flex-col gap-[15px] text-[400] text-[10px] cursor-pointer ">
              <Link href="#" className="flex gap-[8px] items-center text-center py-[8px] items-center text-center px-[12px] bg-[#131A18] rounded-[7px] text-white">
                <FaGoogle size={19}/>
                <p>Continue with Google</p>
              </Link>
              <Link className="flex gap-[8px] items-center text-center py-[8px] items-center text-center px-[12px] bg-[#D4410F] rounded-[7px] text-white" href="/register">
                <Image src="/images/logo_icon.png" width={19} height={19}/>
                <p>Continue with 96bet</p>
              </Link>
              <Link href="#" className="flex gap-[8px] items-center text-center py-[8px] items-center text-center px-[12px] bg-[#131A18] rounded-[7px] text-white">
              <AiFillApple size={19}/>
                <p>Continue with Apple</p>
              </Link>
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
