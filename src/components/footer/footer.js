import Image from "next/image";

export default function Footer(){
    return(
        <>
            <section style={{backgroundColor:"black", color:"white", display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", padding:"42px 70px"}}>
                <div style={{marginLeft:"100px", display:"flex", flexDirection:"row", justifyContent:"center"}}>
                    <Image src="https://www.smokingbarrels.coffee/images/footer@3x.png"
                            width={200}
                            height={200}
                            alt="logo"
                    />
                </div>
                <div style={{marginLeft:"100px", display:"flex", flexDirection:"column", gap:"20px"}}>
                    <div>
                        <div className="text-white hover:text-amber-500 cursor-pointer">
                            HOME
                        </div>
                    </div>
                    <div className="text-white hover:text-amber-500 cursor-pointer">
                        ABOUT
                    </div>
                    <div className="text-white hover:text-amber-500 cursor-pointer">
                        PRODUCT
                    </div>
                    <div className="text-white hover:text-amber-500 cursor-pointer">
                        TEAM
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"column", gap:"20px", marginRight:"50px"}}>
                    <div className="text-white hover:text-amber-500 cursor-pointer">
                        NEWSLETTER
                    </div>
                    <div className="text-white hover:text-amber-500 cursor-pointer">
                        CONTACT
                    </div>
                </div>
                <div style={{marginLeft:"-70px", display:"flex", flexDirection:"column", gap:"20px", paddingRight:"10px"}}>
                    <div className="text-amber-500 text-xl font-bold">
                        PT. BASUKI LIMA SELARAS
                    </div>
                    <div>
                        Jl. Cilandak Tengah Raya no.8, Kel. Cilandak Barat, Kec. Cilandak, Jakarta Selatan, Jakarta 12430
                    </div>
                </div>
            </section>
        </>
    )
}