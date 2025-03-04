import React from 'react'

import PreviousOrganizersList from '../PreviousOrganizerList'

const About = () => {
  return (
    <div className="mx-32 my-20 flex flex-col gap-5 align-middle text-center">
<div className="inline-block">
  <span className="text-[#b04b26] font-extrabold text-3xl">
    Conference
  </span>
  <span>'  '</span>
  <span className="text-[#13287D] font-extrabold text-3xl">
    on Information and Communication Technology
  </span>
</div>

      <div className="text-lg text-gray-900">
       The IEEE Conference on Information and Communication Technology (CICT) is a prestigious annual event organized by all Centrally Funded Technical Institutions (CFTIs) and Indian Institutes of Information Technology (IIITs). It serves as a global platform for scholars, industry professionals, researchers, and students to present their latest findings and technological advancements in the field of Information and Communication Technology (ICT).

The 9th edition of IEEE CICT 2025 will be hosted by the Indian Institute of Information Technology, Design and Manufacturing (IIITDM) Kancheepuram. The theme for the 2025 conference is Artificial Intelligence (AI) and ICT.
      </div>
      <div className="flex items-center justify-around">
        <div className="text-[#13287D] font-bold text-center">
            <p>Previous Edition of CICT</p>
            <a href="https://ieeexplore.ieee.org/xpl/conhome/1823245/all-proceedings" target="_blank">
                <button className="
                    bg-[#61CE70] text-black font-bold rounded-full mx-4 px-8 py-4 md:mr-8 my-5 text-center
                    hover:bg-[#279E64] hover:text-white duration-200
                ">
                    ieeeXplore Link
                </button>
            </a>
        </div>
        <ul className="text-black text-lg list-disc marker:text-[#61CE70] marker:text-2xl pl-8">
            <PreviousOrganizersList/>
        </ul>
      </div>
    </div>
  )
}

export default About