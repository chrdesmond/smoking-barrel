"use client"
import Image from "next/image";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function HomePage(){
    const jobPositions = ["OWNER", "GENERAL MANAGER", "HEAD OPERATIONAL"];
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await axios.get("https://randomuser.me/api/?results=3");
                setTeamMembers(response.data.results);
            } catch (error) {
                console.log("Error fetching team members:", error);
            }
        };

        fetchTeamMembers();
    }, []);

    return(
        <>
        
            <section className="w-full">
                <Image 
                    src="https://www.smokingbarrels.coffee/storage/2018/12/11/15444997416081.jpg"
                    width={1695}
                    height={1000}
                    alt="banner"
                />
            </section>

            <section>
                <div className="bg-gray-100 w-full h-[90px] text-3xl font-bold mt-5 flex items-center justify-center">
                    NEW ARRIVALS
                </div>
                <div className="bg-gray-100 px-5 sm:px-10 md:flex-col lg:px-10 lg:flex-row lg:items-start flex flex-col justify-center items-center gap-[20px] pt-5 pb-5">
                    <div className="text-m font-bold w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center">
                        <Image 
                            src="https://www.smokingbarrels.coffee/storage/2023/04/04/16805995404972.jpg"
                            width={200}
                            height={240}
                            alt="product1"
                        />
                        <div className="text-center mt-2">
                            Kerinci Radjea Natural 250gr &amp; 1000gr
                        </div>
                    </div>
                    <div className="text-m font-bold w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center">
                        <Image 
                            src="https://www.smokingbarrels.coffee/storage/2023/04/04/16805991174856.jpg"
                            width={200}
                            height={240}
                            alt="product2"
                        />
                        <div className="text-center mt-2">
                            Java Malabar Cirawa Natural 250gr &amp; 1000gr
                        </div>
                    </div>
                    <div className="text-m font-bold w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center">
                        <Image 
                            src="https://www.smokingbarrels.coffee/storage/2023/04/11/16811944627101.jpeg"
                            width={200}
                            height={240}
                            alt="product3"
                        />
                        <div className="text-center mt-2">
                            Quick Shot Coffee Capsule - Colombia Fruta Madura / Kopi Kapsul Nespresso
                        </div>
                    </div>
                    <div className="text-m font-bold w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center">
                        <Image 
                            src="https://www.smokingbarrels.coffee/storage/2023/04/11/16811944627101.jpeg"
                            width={200}
                            height={240}
                            alt="product3"
                        />
                        <div className="text-center mt-2">
                            Quick Shot Coffee Capsule - Colombia Fruta Madura / Kopi Kapsul Nespresso
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-yellow-800 w-full h-auto text-white flex flex-col lg:flex-row">
                <div className="flex-1 flex flex-col gap-10 p-10 lg:p-20 lg:ml-20">
                    <div className="text-amber-500 text-3xl font-bold flex items-center justify-center">
                        WHAT WE DO
                    </div>
                    <div className="text-xl text-center">
                        Roasting craftsmanship quality coffee since 2015, Smoking Barrels Craft Coffee aims to promote high quality coffee beans from various origins.
                    </div>
                    <div className="flex justify-center lg:justify-center">
                        <a href="http://localhost:3000/about" className="btn px-5 py-2 rounded border-2 border-white text-white bg-transparent hover:border-amber-500 hover:text-amber-500">
                            READ MORE
                        </a>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center p-5">
                    <Image 
                        className="rounded-lg shadow-xl"
                        src="https://www.smokingbarrels.coffee/storage/2018/11/15/15422643751843.JPG"
                        width={600}
                        height={400}
                        alt="beans"
                    />
                </div>
            </section>

            <section className="bg-gray-200 w-full h-[80px] text-3xl font-bold flex items-center justify-center">
                MEET OUR TEAM
            </section>
            <div className="bg-gray-200 w-full py-10 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 ">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-yellow-800 w-80 h-[400px] rounded-xl shadow-2xl flex flex-col items-center justify-center gap-5 p-5">
                            <Image
                                src={member.picture.large}
                                width={125}
                                height={30}
                                alt={`Team member ${index + 1}`}
                                className="rounded-full w-30 h-30 mt-5"
                            />
                            <div className="text-white font-bold">{jobPositions[index]}</div>
                            <div>{`${member.name.first} ${member.name.last}`}</div>
                            <div className="px-5 text-center">{`${member.email}`}</div>
                            <div>{`${member.phone}`}</div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="bg-gray-200 w-full h-[80px] text-l font-bold flex items-center justify-center">
                <a href="http://localhost:3000/teams" className="btn px-5 py-2 rounded border-2 border-gray-500 text-white bg-gray-500 hover:border-amber-500 hover:text-amber-500">
                    READ MORE
                </a>
            </section>

            <section className="bg-yellow-800 w-full h-auto text-white flex flex-col lg:flex-row">
                <div className="flex-1 p-5 lg:p-20 flex justify-center items-center">
                    <Image 
                        className="rounded-lg shadow-xl"
                        src="https://www.smokingbarrels.coffee/storage/2018/11/15/15422645283457.JPG"
                        width={600}
                        height={400}
                        alt="culture"
                    />
                </div>
                <div className="flex-1 flex flex-col gap-10 p-10 lg:p-20 lg:mr-20">
                    <div className="text-amber-500 text-3xl font-bold flex items-center justify-center">
                        OUR CULTURE
                    </div>
                    <div className="text-xl text-center">
                        At Smoking Barrel, our culture is rooted in passion, community, and excellence. We believe in the power of great coffee to bring people together, and this belief drives everything we do.
                    </div>
                    <div className="flex justify-center lg:justify-center">
                        <a href="http://localhost:3000/about" className="btn px-5 py-2 rounded border-2 border-white text-white bg-transparent hover:border-amber-500 hover:text-amber-500">
                            READ MORE
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 w-full h-[80px] text-2xl lg:text-3xl font-bold flex items-center justify-center">
                CHECK OUR PRODUCTS
            </section>
            <section className="bg-gray-100 py-10 px-5 flex sm:px-10 lg:px-10 lg:flex-row flex-col justify-center gap-10">
                <div className="flex flex-col items-center gap-5">
                    <Image 
                        src="https://www.smokingbarrels.coffee/images/coffee.svg" 
                        width={175}
                        height={175}
                        alt="coffee"
                    />
                    <div className="text-black text-2xl font-bold">
                        COFFEE
                    </div>
                    <div className="text-center text-lg italic">
                        &quot;Enjoy rich, aromatic coffee from the finest beans, crafted for perfection.&quot;
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <Image 
                        src="https://www.smokingbarrels.coffee/images/tea.svg" 
                        width={149}
                        height={175}
                        alt="tea"
                    />
                    <div className="text-black text-2xl font-bold">
                        TEA
                    </div>
                    <div className="text-center text-lg italic">
                        &quot;Savor our variety of premium teas, from soothing herbal to robust black blends.&quot;
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <Image 
                        src="https://www.smokingbarrels.coffee/images/merchandise.svg" 
                        width={133}
                        height={175}
                        alt="merch"
                    />
                    <div className="text-black text-2xl font-bold">
                        MERCHANDISE
                    </div>
                    <div className="text-center text-lg italic">
                        &quot;Show your passion with our stylish apparel and unique accessories.&quot;
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <Image 
                        src="https://www.smokingbarrels.coffee/images/equipment.svg" 
                        width={175}
                        height={176}
                        alt="equipment"
                    />
                    <div className="text-black text-2xl font-bold">
                        EQUIPMENT
                    </div>
                    <div className="text-center text-lg italic">
                        &quot;Discover top-quality brewing tools for the perfect cup every time.&quot;
                    </div>
                </div>
            </section>
        
            <section className="bg-gray-100 w-full h-[100px] text-2xl lg:text-3xl font-bold flex items-center justify-center">
                CUSTOMER&#39;S TESTIMONY
            </section>

            <section className="bg-gray-100 font-bold text-[15px] lg:text-[20px] w-full h-auto flex flex-col items-center justify-center gap-5 py-10">
                <div className="bg-yellow-800 text-white w-full sm:w-3/4 lg:w-1/2 h-[120px] px-5 italic text-center rounded-lg shadow-2xl flex items-center justify-center">
                    &quot;Smoking Barrel is my go-to coffee spot! The atmosphere is cozy, and the coffee is always exceptional. I love the unique flavors and the friendly staff.&quot;
                </div>
                <div className="bg-yellow-800 text-white w-full sm:w-3/4 lg:w-1/2 h-[120px] px-5 italic text-center rounded-lg shadow-2xl flex items-center justify-center">
                    &quot;I can&#39;t get enough of Smoking Barrel&#39;s freshly roasted beans. The quality is unmatched, and the baristas are true coffee artists. Highly recommend!&quot;
                </div>
                <div className="bg-yellow-800 text-white w-full sm:w-3/4 lg:w-1/2 h-[120px] px-5 italic text-center rounded-lg shadow-2xl flex items-center justify-center">
                    &quot;This place is a gem! The coffee is incredible, and the staff always make me feel welcome. It&#39;s the perfect spot to relax and enjoy a great cup of coffee.&quot;
                </div>
                <div className="bg-yellow-800 text-white w-full sm:w-3/4 lg:w-1/2 h-[120px] px-5 italic text-center rounded-lg shadow-2xl flex items-center justify-center">
                    &quot;The attention to detail at Smoking Barrel is impressive. Every cup is brewed to perfection, and the service is top-notch. It&#39;s my favorite coffee shop by far&quot;
                </div>
                <div className="bg-yellow-800 text-white w-full sm:w-3/4 lg:w-1/2 h-[120px] px-5 italic text-center rounded-lg shadow-2xl flex items-center justify-center">
                    &quot;I discovered Smoking Barrel last year, and I haven&#39;t looked back. Their roasts are amazing, and the atmosphere is just what I need to unwind.&quot;
                </div>
            </section>
        </>
    )
}
