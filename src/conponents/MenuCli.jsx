import React from 'react'
import { NavLink } from 'react-router-dom';
import logoMeow from '../../public/meow_demo_logo.jpg';
import en from '../../public/en.png'
import vn from '../../public/vi.png'
const MenuCli = () => {
    return (
        <div className="grid grid-cols-3 w-full text-center  py-2 px-4 text-[#674188]">
            <img src={logoMeow} alt="" className=' w-[100px] h-[100px]' />
            <nav className=' col-start-2 col-span-2 flex justify-between'>
                <ul className='menu__ul leading-[100px] text-xl font-bold w-full md:hidden'>
                    <li><NavLink to={""}>HomePage</NavLink></li>
                    <li><NavLink to={""}>About Me</NavLink></li>
                    <li><NavLink to={""}>Contact Me</NavLink></li>
                    <li><NavLink to={""}>Portfolio</NavLink></li>
                </ul>
                <div className=' text-2xl font-bold flex justify-center gap-2 items-center col-span-1'>
                    <a href="">
                        <img src={vn} alt="" className='w-[38px] h-[26px]' />
                    </a> 
                
                    <a href="">
                        <img src={en} alt="" className='w-[38px] h-[26px]'/>
                    </a>
                </div>
            </nav>
            <div className='md:block '>
                <i class="fa fa-bars"></i>
            </div>
        </div>
    )
}

export default MenuCli