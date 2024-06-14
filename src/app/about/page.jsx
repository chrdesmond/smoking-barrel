

export default function About(){
    return(
        <>
            <div className="bg-[url('https://lh3.googleusercontent.com/p/AF1QipPiWJeZ7PMJkBKxB3BoEZjJAv1f62HYnYoN7ae-=s1360-w1360-h1020')] w-full h-[370px] bg-no-repeat bg-center bg-cover lg:bg-fixed ">
                <div className="flex flex-row gap-4  p-10 lg:p-40 justify-center">
                    <h3 className="text-white font-bold text-4xl">
                        ABOUT US
                    </h3>
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"column"}}>
                <div className="bg-gray-200 text-2xl font-bold w-[100%] h-[90px]" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    WHAT WE DO
                </div>
                <div className="bg-gray-200 text-yellow-800 text-[20px] font-bold w-[100%] h-[830px] px-[300px] text-justify gap-[20px]" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <p >
                    &nbsp; &nbsp; &nbsp; &nbsp;Welcome to Smoking Barrels Craft Coffee, where passion meets craftsmanship. Established in 2015, Smoking Barrels started as a cozy coffee shop in the heart of our city, founded by a group of friends united by their love for exceptional coffee. From the very beginning, our mission was clear: to bring the finest coffee experience to our community.
                    </p>
                    <p>
                    &nbsp; &nbsp; &nbsp; &nbsp;In our early days, we focused on creating a warm, inviting atmosphere where people could enjoy meticulously brewed coffee. Our dedication to quality quickly earned us a loyal following, and it wasn't long before we began exploring the art of coffee roasting. Driven by a desire to control every aspect of the coffee-making process, we invested in our first roaster and started experimenting with different beans and roast profiles.    
                    </p>
                    <p>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;By 2017, our small backroom roasting operation had grown, and we decided to expand into a full-fledged roastery. This pivotal moment allowed us to deepen our commitment to sourcing premium beans from around the world. We established direct relationships with farmers, ensuring that our beans were not only of the highest quality but also ethically sourced.    
                    </p>
                    <p>
                    &nbsp; &nbsp; &nbsp;Our roasting process is a blend of science and art, aimed at highlighting the unique flavors and characteristics of each bean. Every roast is carefully crafted to bring out the best in each batch, ensuring a consistent and delightful coffee experience for our customers.    
                    </p>
                    <p>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Today, Smoking Barrels stands as a testament to our journey from a humble coffee shop to a renowned roastery. Our unwavering commitment to excellence and innovation continues to drive us as we explore new ways to delight our customers. Whether you're visiting our shop for a cozy cup of coffee or brewing our beans at home, we're honored to be a part of your coffee journey.
                    </p>
                    <p className="pt-[20px] text-gray-500 text-[30px] italic pb-[30px]">
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Join us as we continue to brew the perfect cup, one barrel at a time.    
                    </p>                   
                </div>
            </div>

            <section className="bg-gray-200 text-2xl font-bold w-[100%] h-[450px]" style={{display:"flex", justifyContent:"center"}}>
                <div>
                    <div>
                        <iframe width="700px" height="400px" src="https://www.youtube.com/embed/zb4KF4upaIQ" frameborder="0" allowfullscreen allow="fullscreen"></iframe>
                    </div>
                </div>
            </section>

            <section style={{display:"flex", flexDirection:"column"}}>
                <div className="bg-black text-white text-2xl font-bold w-[100%] h-[90px]" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    OUR CULTURE
                </div>
                <div className="bg-black text-yellow-800 text-[20px] font-bold w-[100%] h-[100px] px-[300px] text-justify gap-[20px]" style={{display:"flex", flexDirection:"column", justifyContent:"start", alignItems:"center"}}>
                    <p className="text-center">
                        At Smoking Barrel, our culture is rooted in passion, community, and excellence. We believe in the power of great coffee to bring people together, and this belief drives everything we do.
                    </p>      
                </div>
                <div className="bg-black w-[100%] h-[300px] gap-[30px] px-[20px]" style={{display:"flex"}}>
                    <div className="bg-yellow-800 w-[100%] h-[100%] gap-[30px] px-[20px] py-[20px]" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <h3 className="text-white text-xl font-bold">
                            PASSION
                        </h3>
                        <p className="text-center">
                        Our love for coffee is at the heart of our business. From sourcing the finest beans to perfecting our roasting techniques, we are dedicated to delivering exceptional coffee experiences.
                        </p>
                    </div>
                    <div className="bg-yellow-900 w-[100%] h-[100%] gap-[30px] px-[20px] py-[20px]" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <h3 className="text-white text-xl font-bold">
                            COMMUNITY
                        </h3>
                        <p className="text-center">
                        We cherish our role in the community, creating a welcoming space where everyone feels at home. Our team fosters a friendly and inclusive atmosphere, ensuring every customer feels valued.
                        </p>
                    </div>
                    <div className="bg-yellow-800 w-[100%] h-[100%] gap-[30px] px-[20px] py-[20px]" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <h3 className="text-white text-xl font-bold">
                            EXCELLENCE
                        </h3>
                        <p className="text-center">
                        We strive for excellence in every cup. Continuous learning and innovation keep us at the forefront of the coffee industry, allowing us to offer the best to our customers.
                        </p>
                    </div>
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
            
        </>
    )
}