"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';



export default function Teams(){
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const fetchTeamMembers = async() => {
            try{
                const response = await axios.get("https://randomuser.me/api/?results");
                setTeamMembers((response.data.results));
            }catch(error){
                console.log("Error fetching team members:", error)
            }
        };

        fetchTeamMembers()
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

            <section className="bg-gray-200 w-[100%] h-[80px] text-3xl font-bold" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                MEET OUR TEAM
            </section>
            <div className="bg-gray-200 text-yellow-800 text-[20px] font-bold w-[100%] h-[100px] px-[300px] text-justify gap-[20px]" style={{display:"flex", flexDirection:"column", justifyContent:"start", alignItems:"center"}}>
                    <p className="text-center">
                    Welcome to Smoking Barrel! Our team is a passionate group of coffee enthusiasts dedicated to delivering the best coffee experience possible. Each member brings their unique expertise and enthusiasm, ensuring every cup is crafted with care and precision. Get to know the faces behind your favorite brews!
                    </p>      
                </div>
            <div className="bg-gray-200 w-[100%] h-[450px]" style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"30px"}}>
                
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-yellow-800 w-[300px] h-[400px] rounded-xl shadow-2xl" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <div>
                        <img
                            src={member.picture.large}
                            alt={`Team member ${index + 1}`}
                            className='rounded-full w-[100px] h-[100px]' 
                        />
                        <div>
                            <div>{"OWNER"}</div>
                            <div>{`${member.name.first} ${member.name.last}`}</div>
                            <div>{`${member.email}`}</div>
                            <div>{`${member.phone}`}</div>
                        </div>
                    </div>
                </div>
                ))}
                
                
            </div>
            <div className="bg-gray-200 w-[100%] h-[450px]" style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"30px"}}>
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
        
        </>
    )
}