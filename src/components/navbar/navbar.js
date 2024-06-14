import { IoSearchSharp } from "react-icons/io5";
import Image from "next/image";

export default function NavBar(){
    return(
        <>
            <nav className="py-2 bg-black sticky top-0" style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", justifyContent:"center", alignItems:"center"}}>
                <div style={{paddingLeft:"100px"}}>
                    <Image src="https://www.smokingbarrels.coffee/images/footer@3x.png"
                        width={70}
                        height={40}
                        alt="logo"
                    />
                </div>
                <div style={{display:"flex", gap:" 50px", alignItems:"center", color:"white"}}>
                    <div class="text-white hover:text-amber-500 cursor-pointer">
                        HOME
                    </div>
                    <div className="text-white hover:text-amber-500 cursor-pointer">
                        ABOUT
                    </div>
                    <div className="text-white hover:text-amber-500 cursor-pointer">
                        PRODUCTS
                    </div>
                    <div className="text-white hover:text-amber-500 cursor-pointer">
                        TEAM
                    </div>
                    <div className="text-white hover:text-amber-500 cursor-pointer">
                        <IoSearchSharp />
                    </div>
                    <div>
                        <button className="px-5 py-2 rounded border-2 border-white text-white bg-transparent hover:border-amber-500 hover:text-amber-500">
                            NEWSLETTER
                        </button>
                    </div>
                    
                </div>
                <div style={{display:"flex", gap:" 40px", alignItems:"center", justifyContent:"end", paddingRight:"40px"}}>
                    <div className="text-white hover:text-amber-500 cursor-pointer" >
                        EN
                    </div>
                </div>
            </nav>
        </>
    )
}