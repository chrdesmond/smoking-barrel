"use client"
import Image from "next/image";

export default function HomePage(){
    
    return(
        <>
        
            <section>
                <Image src="https://www.smokingbarrels.coffee/storage/2018/12/11/15444997416081.jpg"
                    width={1695}
                    height={1000}
                    alt="banner"
                />
            </section>

            <section>
                <div className="bg-gray-100 w-[100%] h-[90px] text-3xl font-bold mt-[20px]" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    NEW ARRIVALS
                </div>
                <div className="bg-gray-100 px-[80px]" style={{width:"100%", height:"400px", display:"flex", alignItems:"start", justifyContent:"center", gap:"20px", paddingTop:"30px"}}>
                    <div className="text-[22px] font-bold w-[400px]" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <Image src="https://www.smokingbarrels.coffee/storage/2023/04/04/16805995404972.jpg"
                            width={260}
                            height={240}
                            alt="product1"
                        />
                        <div className="text-center" style={{display:"flex", flexDirection:"column"}}>
                            <div>
                                Kerinci Radjea Natural 250gr &amp; 1000gr
                            </div>
                        </div>
                    </div>
                    <div className="text-[22px] font-bold w-[400px]" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <Image src="https://www.smokingbarrels.coffee/storage/2023/04/04/16805991174856.jpg"
                            width={260}
                            height={240}
                            alt="product2"
                        />
                        <div className="text-center" style={{display:"flex"}}>
                            Java Malabar Cirawa Natural 250gr &amp; 1000gr
                        </div>
                    </div>
                    <div className="text-[22px] font-bold w-[400px]" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <Image src="https://www.smokingbarrels.coffee/storage/2023/04/11/16811944627101.jpeg"
                            width={260}
                            height={240}
                            alt="product3"
                        />
                        <div className="text-center" style={{display:"flex"}}>
                            Quick Shot Coffee Capsule - Colombia Fruta Madura / Kopi Kapsul Nespresso
                        </div>
                    </div>
                    <div className="text-[22px] font-bold w-[400px]" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <Image src="https://www.smokingbarrels.coffee/storage/2022/05/18/16528567515432.jpg"
                            width={260}
                            height={240}
                            alt="product4"
                        />
                        <div className="text-center" style={{display:"flex"}}>
                            Quick Shot Coffee Capsule - Ethiopia Samii Uraga / Kopi Kapsul Nespresso
                        </div>
                    </div>
                </div>
            </section>
            

            <section className="bg-yellow-800" style={{width:"100%", height:"450px", display:"flex", color:"white"}}>
                <div style={{display:"flex", flex:"50%", flexDirection:"column", gap:"40px", padding:"80px 100px", marginLeft:"90px"}}>
                    <div className="text-amber-500 text-3xl font-bold" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        WHAT WE DO
                    </div>
                    <div className="text-xl text-center">
                        Roasting craftsmanship quality coffee since 2015, Smoking Barrels Craft Coffee aims to promote high quality coffee beans from various origins.
                    </div>
                    <div style={{paddingLeft:"210px"}}>
                        <button className="px-5 py-2 rounded border-2 border-white text-white bg-transparent hover:border-amber-500 hover:text-amber-500">
                            READ MORE
                        </button>
                    </div>
                </div>
                <div style={{display:"flex", flex:"50%", padding:"40px 110px"}}>
                    <Image className="rounded-lg shadow-xl" src="https://www.smokingbarrels.coffee/storage/2018/11/15/15422643751843.JPG"
                        width={600}
                        height={400}
                        alt="beans"
                    />
                </div>
            </section>

            <section className="bg-gray-100 w-[100%] h-[80px] text-3xl font-bold" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                MEET OUR TEAM
            </section>
            <div className="bg-gray-100 w-[100%] h-[450px]" style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"30px"}}>
                <div className="bg-yellow-800 w-[300px] h-[400px] rounded-xl shadow-2xl" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>

                </div>
                <div className="bg-yellow-800 w-[300px] h-[400px] rounded-xl shadow-2xl" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>

                </div>
                <div className="bg-yellow-800 w-[300px] h-[400px] rounded-xl shadow-2xl" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>

                </div>
                <div className="bg-yellow-800 w-[300px] h-[400px] rounded-xl shadow-2xl" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>

                </div>
                <div className="bg-yellow-800 w-[300px] h-[400px] rounded-xl shadow-2xl" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>

                </div>
            </div>
            <section className="bg-gray-100 w-[100%] h-[80px] text-l font-bold" style={{display:"flex", alignItems:"start", justifyContent:"center"}}>
                <div >
                    <button className="px-5 py-2 rounded border-2 border-white text-white bg-gray-500 hover:border-amber-500 hover:text-amber-500">
                        READ MORE
                    </button>
                </div>
            </section>

            <section className="bg-yellow-800" style={{width:"100%", height:"450px", display:"flex", color:"white"}}>
                <div style={{display:"flex", flex:"50%", padding:"40px 110px"}}>
                    <Image className="rounded-lg shadow-xl" src="https://www.smokingbarrels.coffee/storage/2018/11/15/15422645283457.JPG"
                        width={600}
                        height={400}
                        alt="culture"
                    />
                </div>
                <div style={{display:"flex", flex:"50%", flexDirection:"column", gap:"40px", padding:"70px 100px", marginRight:"90px"}}>
                    <div className="text-amber-500 text-3xl font-bold" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        OUR CULTURE
                    </div>
                    <div className="text-xl text-center">
                        At Smoking Barrel, our culture is rooted in passion, community, and excellence. We believe in the power of great coffee to bring people together, and this belief drives everything we do.
                    </div>
                    <div style={{paddingLeft:"240px"}}>
                        <button className="px-5 py-2 rounded border-2 border-white text-white bg-transparent hover:border-amber-500 hover:text-amber-500">
                            READ MORE
                        </button>
                    </div>
                </div>
                
            </section>

            <section className="bg-gray-100 text-3xl font-bold" style={{width:"100%", height:"80px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                CHECK OUR PRODUCTS
            </section>
            <section className="bg-gray-100 py-[30px] px-[80px]" style={{width:"100%", height:"400px", display:"flex", alignItems:"start", justifyContent:"center", gap:"60px"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                    <Image src="https://www.smokingbarrels.coffee/images/coffee.svg" 
                        width={175}
                        height={175}
                        alt="coffee"
                    />
                    <div className="text-black-500 text-2xl font-bold">
                        COFFEE
                    </div>
                    <div className="text-center text-[17px] italic">
                    &quot;Enjoy rich, aromatic coffee from the finest beans, crafted for perfection.&quot;
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                    <Image src="https://www.smokingbarrels.coffee/images/tea.svg" 
                        width={149}
                        height={175}
                        alt="tea"
                    />
                    <div className="text-black-500 text-2xl font-bold">
                        TEA
                    </div>
                    <div className="text-center text-[17px] italic">
                    &quot;Savor our variety of premium teas, from soothing herbal to robust black blends.&quot;
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                    <Image src="https://www.smokingbarrels.coffee/images/merchandise.svg" 
                        width={133}
                        height={175}
                        alt="merch"
                    />
                    <div className="text-black-500 text-2xl font-bold">
                        MERCHANDISE
                    </div>
                    <div className="text-center text-[17px] italic">
                    &quot;Show your passion with our stylish apparel and unique accessories.&quot;
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                    <Image src="https://www.smokingbarrels.coffee/images/equipment.svg" 
                        width={175}
                        height={176}
                        alt="EQUIPMENTS"
                    />
                    <div className="text-black-500 text-2xl font-bold">
                        COFFEE
                    </div>
                    <div className="text-center text-[17px] italic">
                    &quot;Discover top-quality brewing tools for the perfect cup every time.&quot;
                    </div>
                </div>
            </section>
        
            <section className="bg-gray-100 text-3xl font-bold" style={{width:"100%", height:"100px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                CUSTOMER&#39;S TESTIMONY
            </section>
            <section className="bg-gray-100 font-bold text-[16px]" style={{width:"100%", height:"500px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"20px", paddingBottom:"50px"}}>
                <div className="bg-yellow-800 text-white w-[800px] h-[120px] px-[20px] italic text-center rounded-lg shadow-2xl" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                &quot;Smoking Barrel is my go-to coffee spot! The atmosphere is cozy, and the coffee is always exceptional. I love the unique flavors and the friendly staff.&quot;
                </div>
                <div className="bg-yellow-800 text-white w-[800px] h-[120px] px-[20px] italic text-center rounded-lg shadow-2xl" style={{display:"flex", alignItems:"center", justifyContent:"center", margin:"0px 500px"}}>
                &quot;I can&#39;t get enough of Smoking Barrel&#39;s freshly roasted beans. The quality is unmatched, and the baristas are true coffee artists. Highly recommend!&quot;
                </div>
                <div className="bg-yellow-800 text-white w-[800px] h-[120px] px-[20px] italic text-center rounded-lg shadow-2xl" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                &quot;This place is a gem! The coffee is incredible, and the staff always make me feel welcome. It&#39;s the perfect spot to relax and enjoy a great cup of coffee.&quot;
                </div>
                <div className="bg-yellow-800 text-white w-[800px] h-[120px] px-[20px] italic text-center rounded-lg shadow-2xl" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                &quot;The attention to detail at Smoking Barrel is impressive. Every cup is brewed to perfection, and the service is top-notch. It&#39;s my favorite coffee shop by far&quot;
                </div>
                <div className="bg-yellow-800 text-white w-[800px] h-[120px] px-[20px] italic text-center rounded-lg shadow-2xl" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                &quot;I discovered Smoking Barrel last year, and I haven&#39;t looked back. Their roasts are amazing, and the atmosphere is just what I need to unwind.&quot;
                </div>
            </section>
        </>
    )
}
