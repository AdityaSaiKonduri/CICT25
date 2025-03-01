"use client";

import React from "react";
import './home.css';
import InfoCards from "./InfoCards";
import { homeUsefulButtons } from "../data/homeUsefulButtons"
import OrganizerCards from "./OrganizerCards";
import PreviousOrganizersList from "./PreviousOrganizerList";
import CountDown from "../(components)/CountDown";

const buttonList=()=>{
    const buttons=homeUsefulButtons.map((button,index)=>{
        return(
            <a
                href={button.link}
                key={index}
            >
                <button
                    className="
                        bg-[#4c2222] text-white font-bold rounded-full mx-4 px-8 py-4 md:mr-8 my-5 text-center
                        hover:bg-[#4c2222] hover:text-white duration-200
                    "
                >
                    {button.name}
                </button>
            </a>
        )
    })
    return(
        <div className="flex flex-col flex-wrap md:flex-row justify-center items-center mt-28">
            {buttons}
        </div>
    )
}

const Home=()=>{
    return(
    <>
    <div className="md:flex bg-[#ebe8e8] w-full h-fit px-4 md:p-0">
        <div className="flex flex-col w-fit bg-[#ebe8e8] md:py-8 mx-8 md:w-1/2 md:mx-20">
            <CountDown targetDate="2025-12-18T23:59:59"/>
            <div className="flex flex-col md:flex-row md:items-center gap-5 mt-24">
                <img className="w-2/6 md:w-1/6 slight-tilt duration-500" src="/logos/iiitdm_logo.png"/>
                <div className="text-2xl font-bold">
                    Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram
                    <div className="text-sm font-light italic">
                        An Institute of National Importance  established in 2007 by the Ministry of Education, Government of India 
                    </div>
                </div>
            </div>
            <div className="text-6xl font-black text-[#222121] my-4">
                IEEE CICT 2025
            </div>
            {/* <button className="bg-[#0800F4] w-fit px-8 py-4 text-white font-bold rounded-md my-4">
                CERTIFICATES
            </button> */}
            <div className="text-lg">
                The 9th edition of the Annual IEEE International Conference on <span className="font-bold">Information and Communication Technology</span> (CICT) jointly organized by all Centrally Funded Indian Institutes of Information Technology (CFIIITs).
                <div className="mt-10">
    <h2 className="text-lg font-bold mb-4">IMPORTANT DATES</h2>
    <table className="w-full border-collapse border border-gray-300">
        <thead>
            <tr className="bg-gray-200 text-left">
                <th className="border border-gray-300 px-4 py-2">Event</th>
                <th className="border border-gray-300 px-4 py-2">Deadline</th>
            </tr>
        </thead>
        <tbody>
            {[
                { event: "Paper Submission Deadline", date: "31st May 2025" },
                { event: "Paper Acceptance Notification", date: "31st July 2025" },
                { event: "Deadline for Camera-Ready Submission", date: "31st August 2025" },
                { event: "Deadline for Early Bird Registration", date: "30th September 2025" },
                { event: "Deadline for Standard Registration", date: "30th October 2025" }
            ].map((item, index) => (
                <tr key={index} className="border border-gray-300 text-left">
                    <td className="border border-gray-300 px-4 py-2">{item.event}</td>
                    <td className="border border-gray-300 px-4 py-2 text-red-500 font-bold">
                        {item.date}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

            </div>
            <div className="flex flex-col md:flex-row">
                <a href="/calls/papers">
                    <button className="
                        bg-[#4c2222] text-white font-bold rounded-full px-8 py-4 border-solid border-2 border-[#4c2222] md:mr-8 my-5 text-center
                        hover:bg-transparent hover:text-[#4c2222] duration-200 pop
                        ">
                        CALL FOR PAPER
                    </button>
                </a>
                <a href="/calls/synopsis">
                    <button className="
                        bg-[#4c2222] text-white font-bold rounded-full px-8 py-4 border-solid border-2 border-[#4c2222] my-5 text-center
                        hover:bg-[#13287D] hover:text-white duration-200 pop
                        ">
                        CALL FOR SYNOPSIS
                    </button>
                </a>
            </div>
            <div className="italic">* IEEE Approval under process</div>
        </div>
        <div className="bg-[url(/home_img/institute.jpg)] w-full h-[50vh] md:h-auto bg-cover bg-no-repeat bg-center">
        </div>
    </div>

    <div className="pb-24 bg-[#222121]">
        <InfoCards/>
    </div>
    
    <div className="mx-5 my-20">
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-20">
            <img className="rounded-lg" src={null} alt="Brochure"/>
            <div className="flex flex-col gap-5">
                <span className="text-black font-bold text-xl">
                    About CICT 2025
                </span>
                <span className="text-[#222121] font-extrabold text-3xl">
                    IEEE CICT 2025<br/>IIITDM Kancheepuram
                </span>
                <div className="text-xl text-gray-700">
                    CICT is an annual event organized by five Indian Institutes of Information Technology (IIITs), namely:
                    <ul className="list-disc ml-24">
                        <li>Indian Institute of Information Technology, Design and Manufacturing Kancheepuram</li>
                        <li>Indian Institute of Information Technology,  Allahabad</li>
                        <li>PDPM-Indian Institute of Information Technology, Design and Manufacturing Jabalpur</li>
                        <li>Indian Institute of Information Technology, Design and Manufacturing Kurnool</li>
                        <li>Atal Bihari Vajpayee Indian Institute of Information Technology, Manufacturing (ABV-IIITM) Gwalior</li>
                    </ul>
                    All these institutes are fully funded by the Government of India, and the conference venue rotates among them in a round-robin fashion.
                    Since its inception, CICT has been technically and financially co-sponsored by IEEE, with all past eight editions having their proceedings available on IEEE Xplore. Additionally, prestigious government organizations like DST, ISRO, DRDO, CSIR, and several private companies have provided financial support, further strengthening the conference’s impact and outreach in the field of Information and Communication Technology (ICT).
                </div>
                <div className="text-[#222121] font-bold">
                    Previous Edition of CICT:
                    <a href="https://ieeexplore.ieee.org/xpl/conhome/1823245/all-proceedings" target="_blank">
                        <button className="
                            bg-[#4c2222] text-white font-bold rounded-full mx-4 px-8 py-4 md:mr-8 my-5 text-center
                            hover:bg-[#371919] hover:text-white duration-200
                        ">
                            ieeeXplore Link
                        </button>
                    </a>
                </div>
                <ul className="text-black text-lg list-disc marker:text-[#4c2222] marker:text-2xl pl-8">
                    <PreviousOrganizersList/>
                </ul>
            </div>
        </div>
        {buttonList()}
    </div>

    <div className="flex flex-col items-center bg-[#4c2222] rounded-xl pb-40">
        <img className="w-2/6 md:w-1/12 mb-5 mt-16 slight-tilt duration-500" src="/logos/iiitdm_white.png"/>
        <div className="text-center text-white text-3xl font-bold">
            Organizing Institutes<br/>
            CICT 2025
        </div>
        <div className="text-center text-white text-xl font-bold mt-10 mb-2">
            Organizers & Co-Organizers
        </div>
    </div>
    <OrganizerCards/>
    <div>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083.458581912919!2d80.13489620547216!3d12.839539742543696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525851fbcd3b6b%3A0x9f1067aa71e3898e!2sIndian%20Institute%20of%20Information%20Technology%2C%20Design%20and%20Manufacturing%2C%20Kancheepuram!5e0!3m2!1sen!2sin!4v1738208729609!5m2!1sen!2sin" 
            className="w-full h-96 border-0"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
    </div>
    <div className="flex justify-center">
        <div className="max-w-[70rem] relative -top-28 mt-10 mx-10 grid grid-cols-2 md:grid-cols-3 rounded-xl overflow-hidden bg-white">
            <div className="flex py-5 px-20 bg-yellow-500 justify-center col-span-2 md:col-span-1">
                <img className="w-32 aspect-square" src="/logos/iiitdm.png"/>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center border-solid border-r-[1px] pt-5 pb-10 px-10 gap-2">
                <div className="text-5xl text-[#4c2222] pr-2 shake">
                    &#9993;
                </div>
                <div className="text-lg flex flex-col gap-2">
                    <p className="text-blue-500 underline">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cict@iiitdm.ac.in" target="_blank" rel="noopener noreferrer">cict@iiitdm.ac.in</a>
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center border-solid border-l-[1px] pt-5 pb-10 px-10 gap-2">
                <div className="text-5xl text-[#4c2222] shake pr-2">
                    &#9743;
                </div>
                <div className="text-sm flex flex-col gap-2">
                    <p>Office Telephone: 044-27476360</p>
                    <p>Mobile: +91 9344998831</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Home
