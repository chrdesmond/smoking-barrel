import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx"; // Import ikon hamburger dari React Icons
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="py-2 bg-black sticky top-0 flex items-center justify-between px-4 sm:px-10">
            <div>
                <Image
                    src="https://www.smokingbarrels.coffee/images/footer@3x.png"
                    width={70}
                    height={40}
                    alt="logo"
                />
            </div>

            <div className="lg:hidden">
                <RxHamburgerMenu size={30} className="text-white" />
            </div>

            <div className="hidden lg:flex space-x-6 text-white flex-row justify-center items-center">
                <Link href="/homepage" className="hover:text-amber-500 cursor-pointer">HOME</Link>
                
                <Link href="/about" className="hover:text-amber-500 cursor-pointer">ABOUT</Link>
                
                <div className="flex items-center">
                    <Link href="/products" className="hover:text-amber-500 cursor-pointer">PRODUCTS</Link>
                    <MdArrowDropDown className="ml-1 text-white" />
                </div>
                
                <Link href="/teams" className="hover:text-amber-500 cursor-pointer">TEAM</Link>
                
                <div className="hover:text-amber-500 cursor-pointer">
                    <IoSearchSharp />
                </div>
                
                <button className="px-5 py-2 rounded border-2 border-white text-white bg-transparent hover:border-amber-500 hover:text-amber-500">
                    NEWSLETTER
                </button>
            </div>

            <div className="hidden lg:flex space-x-2 text-white items-center">
                <div className="hover:text-amber-500 cursor-pointer">EN</div>
                <MdArrowDropDown className="hover:text-amber-500 cursor-pointer text-white" />
            </div>
        </nav>
    );
}
