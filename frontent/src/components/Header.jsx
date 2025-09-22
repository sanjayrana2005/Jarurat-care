import React, { useState } from 'react'
import {Menu,X} from "lucide-react"

function Header() {
    const [activeLink, setActiveLink] = useState("#home")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#patient", label: "Patients" },
        { href: "#about", label: "About" }
    ]

    return (
        <header className='border-b border-gray-100 shadow-sm fixed top-0 left-0 right-0'>
            <div className='md:h-20 h-16 px-4 md:px-6 lg:px-24 container mx-auto py-5 flex items-center justify-between  '>

                {/* logo */}
                <h2 className='text-xl md:text-2xl font-semibold bg-gradient-to-r from-red-500 to-violet-500 bg-clip-text text-transparent'>Jarurat Care</h2>

                {/* navLinks */}
                <div className='hidden md:flex gap-10'>
                    {
                        navLinks.map((link, index) => {
                            return <a
                                key={index}
                                href={link.href}
                                onClick={() => setActiveLink(link.href)}
                                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === link.href ? "text-blue-600 after:w-full" : "text-gray-600  hover:text-gray-900"}`}
                            >{link.label}</a>
                        })
                    }
                </div>

                {/* mobile naveLink */}

                        {/* menu or close icons */}
                <button 
                onClick={()=>setIsMenuOpen(!isMenuOpen)}
                className='md:hidden cursor-pointer'
                >
                    {
                        isMenuOpen ? <X /> : <Menu />
                    }
                </button>
            </div>
                            {
                    isMenuOpen && (
                        <div className='md:hidden flex flex-col gap-1 bg-white border-t border-gray-200 px-4 pb-1'>
                            {
                                navLinks.map((link,index)=>{
                                    return <a
                                    onClick={()=>{
                                    setActiveLink(link.href)
                                    setIsMenuOpen(false)
                                    }}
                                    key={index} 
                                    href={link.href}
                                    className={`text-sm font-medium py-2 ${activeLink === link.href ? "text-blue-600":"text-gray-600 hover:text-gray-900"}`}
                                    >
                                        {link.label}
                                    </a>
                                })
                            }
                        </div>
                    )
                }
        </header>
    )
}

export default Header
