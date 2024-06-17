"use client"
import Image from "next/image";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function About(){
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
            <div className="bg-[url('https://lh3.googleusercontent.com/p/AF1QipPiWJeZ7PMJkBKxB3BoEZjJAv1f62HYnYoN7ae-=s1360-w1360-h1020')] w-full h-[370px] bg-no-repeat bg-center bg-cover flex items-center justify-center">
                <div className="flex flex-row gap-4 p-10 lg:p-40 justify-center">
                    <h3 className="text-white font-bold text-4xl">
                        ABOUT US
                    </h3>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="bg-gray-200 text-2xl font-bold w-full h-[90px] flex justify-center items-center">
                    WHAT WE DO
                </div>
                <div className="bg-gray-200 text-yellow-800 text-justify text-lg sm:text-xl lg:text-2xl font-bold w-full py-10 px-5 sm:px-20 md:px-40 lg:px-[300px] gap-5 flex flex-col justify-center items-center">
                    <p>
                    &nbsp; &nbsp; &nbsp; &nbsp;Welcome to Smoking Barrels Craft Coffee, where passion meets craftsmanship. Established in 2015, Smoking Barrels started as a cozy coffee shop in the heart of our city, founded by a group of friends united by their love for exceptional coffee. From the very beginning, our mission was clear: to bring the finest coffee experience to our community.
                    </p>
                    <p>
                    &nbsp; &nbsp; &nbsp; &nbsp;In our early days, we focused on creating a warm, inviting atmosphere where people could enjoy meticulously brewed coffee. Our dedication to quality quickly earned us a loyal following, and it wasn&apos;t long before we began exploring the art of coffee roasting. Driven by a desire to control every aspect of the coffee-making process, we invested in our first roaster and started experimenting with different beans and roast profiles.    
                    </p>
                    <p>
                    &nbsp; &nbsp; &nbsp; &nbsp;By 2017, our small backroom roasting operation had grown, and we decided to expand into a full-fledged roastery. This pivotal moment allowed us to deepen our commitment to sourcing premium beans from around the world. We established direct relationships with farmers, ensuring that our beans were not only of the highest quality but also ethically sourced.    
                    </p>
                    <p>
                    &nbsp; &nbsp; &nbsp;Our roasting process is a blend of science and art, aimed at highlighting the unique flavors and characteristics of each bean. Every roast is carefully crafted to bring out the best in each batch, ensuring a consistent and delightful coffee experience for our customers. In recognition of our dedication, Smoking Barrels won the Australia Coffee Award in 2019, cementing our place in the coffee world.   
                    </p>
                    <p>
                    &nbsp; &nbsp; &nbsp; &nbsp;Today, Smoking Barrels stands as a testament to our journey from a humble coffee shop to a world renowned roastery. Our unwavering commitment to excellence and innovation continues to drive us as we explore new ways to delight our customers. Whether you&apos;re visiting our shop for a cozy cup of coffee or brewing our beans at home, we&apos;re honored to be a part of your coffee journey.
                    </p>
                    <p className="pt-5 text-gray-500 text-2xl text-center lg:text-3xl italic pb-5">
                    &nbsp; &nbsp; &nbsp;Join us as we continue to brew the perfect cup, one barrel at a time.    
                    </p>                   
                </div>
            </div>

            <section className="flex flex-col">
                <div className="bg-black text-white text-2xl font-bold w-full h-[90px] flex justify-center items-center">
                    OUR CULTURE
                </div>
                <div className="bg-black text-yellow-800 text-lg sm:text-xl lg:text-2xl font-bold w-full py-5 px-5 sm:px-20 md:px-40 lg:px-[300px] text-justify gap-5 flex flex-col justify-start items-center">
                    <p className="text-center">
                        At Smoking Barrel, our culture is rooted in passion, community, and excellence. We believe in the power of great coffee to bring people together, and this belief drives everything we do.
                    </p>      
                </div>
                <div className="bg-black w-full py-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="bg-yellow-800 w-full h-full gap-5 px-5 py-5 flex flex-col items-center lg:h-[300px]">
                        <h3 className="text-white text-xl font-bold">
                            PASSION
                        </h3>
                        <p className="text-center">
                        Our love for coffee is at the heart of our business. From sourcing the finest beans to perfecting our roasting techniques, we are dedicated to delivering exceptional coffee experiences.
                        </p>
                    </div>
                    <div className="bg-yellow-900 w-full h-full gap-5 px-5 py-5 flex flex-col items-center lg:h-[300px]">
                        <h3 className="text-white text-xl font-bold">
                            COMMUNITY
                        </h3>
                        <p className="text-center">
                        We cherish our role in the community, creating a welcoming space where everyone feels at home. Our team fosters a friendly and inclusive atmosphere, ensuring every customer feels valued.
                        </p>
                    </div>
                    <div className="bg-yellow-800 w-full h-full gap-5 px-5 py-5 flex flex-col items-center lg:h-[300px]">
                        <h3 className="text-white text-xl font-bold">
                            EXCELLENCE
                        </h3>
                        <p className="text-center">
                        We strive for excellence in every cup. Continuous learning and innovation keep us at the forefront of the coffee industry, allowing us to offer the best to our customers.
                        </p>
                    </div>
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

            <section className="bg-gray-200 w-full h-[80px] text-lg font-bold flex items-start justify-center">
                <div>
                    <a href='http://localhost:3000/teams' className="btn px-5 py-2 rounded border-2 border-gray-500 text-white bg-gray-500 hover:border-amber-500 hover:text-amber-500">
                        READ MORE
                    </a>
                </div>
            </section>
        </>
    )
}
