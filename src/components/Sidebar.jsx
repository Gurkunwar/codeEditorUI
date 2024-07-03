import React from 'react'
import '../styles/Sidebar.css'
import { FaPython } from "react-icons/fa";
import { FaRProject } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiCsharp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang } from "react-icons/fa6";
import { DiPhp } from "react-icons/di";
import { DiSwift } from "react-icons/di";
import { FaRust } from "react-icons/fa";

const Sidebar = () => {
    const icons = [FaPython, FaRProject, BiLogoPostgresql, FaHtml5, FaJava, TbBrandCpp, SiCsharp, IoLogoJavascript, FaGolang, DiPhp, DiSwift, FaRust];

  return (
    <div className='sidebar-container'>
        {
            icons.map((Icon, index)=>(
                <Icon key={index} className='icons'/>
            ))
        }
    </div>
  )
}

export default Sidebar