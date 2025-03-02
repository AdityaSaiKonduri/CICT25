import React from "react";
import { homeOrganizerInfo } from "../data/homeOrganizerInfo";

function OrganizerCards(){
    const organizers=homeOrganizerInfo.map((college,index)=>{
        return(
            <div 
                className="w-60 flex flex-col shadow-2xl items-center bg-white text-[#222121] py-5 px-5 rounded-xl" 
                key={index}
            >
                <div 
                    className="flex justify-center items-center bg-gray-200 box-content aspect-square p-2"
                >
                    <img className="w-fit" src={college.logo}/>
                </div>
                <a href={college.link} target="_blank">
                    <div className="my-2 text-center text-xl font-bold duration-75 hover:cursor-pointer hover:text-yellow-500">
                        {college.name}
                    </div>
                </a>
                <div className="text-center">
                    {college.title}
                </div>
            </div>
        )
    })
    return(
        <div className="relative -top-28 flex flex-col justify-around flex-wrap md:flex-row gap-10 mx-10">
            {organizers}
        </div>
    )
}

export default OrganizerCards