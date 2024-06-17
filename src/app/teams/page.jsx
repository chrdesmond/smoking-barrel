"use client";
import Image from "next/image";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Teams() {
    const jobPositions = ["OWNER", "GENERAL MANAGER", "HEAD OPERATIONAL", "BARISTA", "CASHIER", "WAITER"];
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await axios.get("https://randomuser.me/api/?results=6");
                setTeamMembers(response.data.results);
            } catch (error) {
                console.log("Error fetching team members:", error);
            }
        };

        fetchTeamMembers();
    }, []);

    return (
        <>
            <div className="bg-[url('https://www.gordi.id/cdn/shop/articles/img_flavorperception_2048x.jpg?v=15537443540')] w-full lg:h-[370px] h-[130px] bg-no-repeat bg-center bg-cover">
                <div className="flex flex-row gap-4 p-10 lg:p-40 justify-center">
                    <h3 className="text-white font-bold text-4xl">
                        TEAM
                    </h3>
                </div>
            </div>
            
            <section className="bg-gray-200 w-full h-[80px] text-3xl font-bold flex items-center justify-center">
                MEET OUR TEAM
            </section>
            <div className="bg-gray-200 text-yellow-800 text-[20px] font-bold w-full sm:px-20 md:px-40 lg:px-[300px] py-10 text-center">
                <p>
                    Welcome to Smoking Barrel! Our team is a passionate group of coffee enthusiasts dedicated to delivering the best coffee experience possible. Each member brings their unique expertise and enthusiasm, ensuring every cup is crafted with care and precision. Get to know the faces behind your favorite brews!
                </p>
            </div>
            <div className="bg-gray-200 w-full py-10 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
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
        </>
    )
}
