"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Teams(){
    const jobPositions = ["OWNER", "GENERAL MANAGER", "HEAD OPERATIONAL", "BARISTA", "CASHIER"];
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const fetchTeamMembers = async() => {
            try{
                const response = await axios.get("https://randomuser.me/api/?results=5");
                setTeamMembers(response.data.results);
            }catch(error){
                console.log("Error fetching team members:", error);
            }
        };

        fetchTeamMembers();
    }, []);
    
    
    return(
        <>
            <div className="bg-[url('https://www.gordi.id/cdn/shop/articles/img_flavorperception_2048x.jpg?v=15537443540')] w-full h-[370px] bg-no-repeat bg-center bg-cover lg:bg-fixed ">
                <div className="flex flex-row gap-4  p-10 lg:p-40 justify-center">
                    <h3 className="text-white font-bold text-4xl">
                        TEAM
                    </h3>
                </div>
            </div>

            <section className="bg-gray-200 w-full h-[80px] text-3xl font-bold flex items-center justify-center">
                MEET OUR TEAM
            </section>
            
            <div className="bg-gray-200 text-yellow-800 text-[20px] font-bold w-full px-[300px] py-10 text-center">
                <p>
                    Welcome to Smoking Barrel! Our team is a passionate group of coffee enthusiasts dedicated to delivering the best coffee experience possible. Each member brings their unique expertise and enthusiasm, ensuring every cup is crafted with care and precision. Get to know the faces behind your favorite brews!
                </p>
            </div>

            {/* Render anggota tim berdasarkan posisi pekerjaan */}
            <div className="bg-gray-200 w-full h-[450px] flex justify-center gap-4">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-yellow-800 w-[315px] h-[400px] rounded-xl shadow-2xl gap-[20px] py-[10px] flex flex-col items-center justify-center">
                        <img
                            src={member.picture.large}
                            alt={`Team member ${index + 1}`}
                            className="rounded-full w-[120px] h-[120px] justify-center mt-[20px]"
                        />
                        <div className="text-white font-bold">{jobPositions[index]}</div>
                        <div>{`${member.name.first} ${member.name.last}`}</div>
                        <div style={{padding:"0px 20px"}}>{`${member.email}`}</div>
                        <div>{`${member.phone}`}</div>
                    </div>
                ))}
            </div>
        </>
    )
}
