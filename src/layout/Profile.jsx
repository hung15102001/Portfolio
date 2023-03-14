import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineDownload, AiOutlineGlobal, AiOutlineArrowUp } from "react-icons/ai";
import { BiChevronsUp } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import logo from "../assets/avt_profile.jpg";
import cv from "../../public/cv.pdf";
import earth from "../../public/earth.svg"
import group from "../../public/Group.svg"
import human from "../../public/human.svg"
import qa from "../../public/qa.svg"
// import bg_img from "../assets/bg_img_profile.jpg";
const Profile = () => {
  const About = useRef(null);
  const Education = useRef(null);
  const Skills = useRef(null);
  const WorkExperiences = useRef(null);
  const Work = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);
  const scroll = (ref) => {
    // console.log(ref.current.offsetTop);
    if (ref === '0') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      setShow(false)
    } else {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      })
      setShow(true)
    }

  }

  const DowloadCv = () => {

  }

  return (
    <div className='flex'>
      <div className='w-[30%]'>
        <div className='nav_bar w-[30%] h-screen pt-8 border text-center fixed'>
          <div className={`bg-white w-40 h-40 rounded-full m-auto bg-center`} style={{ backgroundImage: `url(${logo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          </div>
          <div className='mt-2'>Based in <span className='text-[#674188] font-bold text-[25px]'>Ha Noi, Viet Nam</span></div>

          <ul className='menu_profile my-16 text-[#674188] flex flex-col gap-4 text-[25px]  h-auto'>
            <li onClick={() => scroll('0')}>Home</li>
            <li onClick={() => scroll(About)}>About </li>
            <li onClick={() => scroll(Education)}>Education</li>
            <li onClick={() => scroll(Skills)}>Skills</li>
            <li onClick={() => scroll(WorkExperiences)}>Work Experiences</li>
            <li onClick={() => scroll(Work)}>Work</li>

            <li ><NavLink to={"/"}>Back</NavLink></li>
          </ul>
        </div>
      </div>


      <div className='main_profile w-[70%]' >
        {/* Home */}
        <section className='section_profile'>
          <div className='font-bold text-[40px] text-[#674188]'>
            Hi!
            <p>I'm Phuong Bui</p>
          </div>
          <p className='text-[#674188] text-2xl my-8'>An IT Business Analyst | An English Teacher</p>

          <div className='btn_download_cv'>
            <button className='p-2 text-3xl bg-[#674188] rounded font-bold text-white mt-2' onClick={DowloadCv} > <a href={`${cv}`} download> Download <AiOutlineDownload /> </a> </button>
          </div>
        </section>

        {/* About */}

        <section className='section_profile' ref={About}>

          <h1 className='text-[18px]'>ABOUT ME
            <p className='text-[#674188] font-bold text-[25px]'>WHO AM I?</p>
          </h1>

          <div className='my-4 flex flex-col gap-6 text-[#674188]'>
            <span>
              Hi, I am Phuong Bui. I have 1 year of experiences working in Human Resource Management System. I’m working with stakeholders to analyse, plan, execute and maintain the continued implementation of the systems.
              <p>
                I’m able to confidently assist in the facilitation of on-site continuous end-user training.
                My aim is to be a Professional Project Manager in 3-5 years.
              </p>
            </span>

            <p className=''>
              Besides, I have almost 4 years tutoring English privately for students aged from grade 8-12 (esp. for those who are terribly bad or not good at English and about to take the entrance exam to high school or university in Vietnam)
            </p>
          </div>
          <div>
            <ul className='about_border flex gap-8 justify-between w-[90%] mx-auto mt-8'>
              <li className='bg-[#F7F1F1]'>
                <img src={earth} className="" />
                <p>Web/App
                  Implementation</p>
              </li>
              <li className='bg-[#FFFBF5]'>
              <img src={qa} alt="" />
                <p>IT Consultation</p></li>
              <li className='bg-[#F7F1F1]'>
              <img src={group} alt="" />
                <p>UI/UX Design</p></li>
              <li className='bg-[#FFFBF5]'>
              <img src={human} alt="" />
                <p>English Teaching</p></li>
            </ul>
          </div>
        </section>

        <section className='section_profile' ref={Education}></section>
        <section className='section_profile' ref={Skills}></section>
        <section className='section_profile' ref={WorkExperiences}></section>
        <section className='section_profile' ref={Work}></section>

        <div className={`scroll_header fixed bottom-10 right-10 border text-[48px] rounded cursor-pointer ${scrollPosition > 100 ? "block" : " hidden"}`} onClick={() => scroll('0')}>
          <BiChevronsUp />
        </div>
      </div>


    </div>
  )
}

export default Profile

// Style display svg sang inherit và install react icon