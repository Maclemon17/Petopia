import { useState } from "react";
import { FaPaw } from "react-icons/fa"
import { FiHeart, FiMenu, FiSearch, FiShoppingBag, FiUser, FiX } from "react-icons/fi"
import { IoMdArrowDropdown } from "react-icons/io";


const Navbar = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [openNav, setOpenNav] = useState(false);


    const toggleNavbar = () => {
        setOpenNav(!openNav);
    }

    return (
        <header className="bg-white shadow-md px-6 py-4 lg:px-20">
            <div className="flex justify-between items-center">
                {/* LOGO */}
                <div className="flex items-center gap-2 text-2xl font-bold select-none cursor-pointer">
                    <span className="bg-petopia-light-brown p-2 rounded-full">
                        <FaPaw />
                    </span>
                    <span className="font-bold">Petopia</span>
                </div>

                {/* NAVIGATION */}
                <nav>
                    <ul className="hidden md:flex items-center gap-6 font-medium text-[2f1e0e] cursor-pointer">
                        <li className="hover:text-petopia-brown"><a href="/">Home</a></li>
                        <li className="relative group"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <span className="flex items-center gap-1 hover:text-petopia-brown">
                                Services
                                <IoMdArrowDropdown size={20} />
                            </span>

                            {showDropdown && (
                                <div className="absolute top-6 left-0 shadow bg-white p-2 rounded z-10 w-40">
                                    <a className="block py-1 px-2 hover:text-petopia-brown" href="/">Grooming</a>
                                    <a className="block py-1 px-2 hover:text-petopia-brown" href="/">Vaccination</a>
                                    <a className="block py-1 px-2 hover:text-petopia-brown" href="/">Training</a>
                                </div>
                            )}
                        </li>
                        <li className="hover:text-petopia-brown"><a href="/about">About</a></li>
                        <li className="hover:text-petopia-brown"><a href="/services">Shop</a></li>
                        <li className="hover:text-petopia-brown"><a href="/services">Blog</a></li>
                        <li className="hover:text-petopia-brown"><a href="/contact">Contact</a></li>
                    </ul>
                </nav>

                {/* USER ACTIONS */}
                <div className="hidden md:flex items-center gap-3 text-petopia-brown text-lg">
                    {
                        [FiSearch, FiHeart, FiShoppingBag, FiUser].map((Icon, id) => (
                            <span key={id}
                                className="p-2 rounded-full border border-petopia-brown hover:bg-petopia-brown hover:text-white transition">
                                <Icon />
                            </span>
                        ))
                    }
                </div>


                {/* MOBILE NAVIGATION */}
                <div className="md:hidden">
                    {
                        openNav ? (
                            <FiX size={25} onClick={toggleNavbar} />
                        ) : (
                            <FiMenu size={25} onClick={toggleNavbar} />
                        )
                    }
                </div>


            </div>

            <div className={`${openNav ? "translate-x-0" : "-translate-x-full hidden"} lg:hidden absolute flex flex-col left-0 top-16 bg-[#f5eee6] text-[#6b4226] font-semibold text-2xl pt-8 px-5 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                <ul className="cursor-pointer">
                    <li className="hover:text-petopia-brown"><a href="/">Home</a></li>
                    <details className="group">
                        <summary className=" hover:text-petopia-brown">Services</summary>

                        <div className="flex flex-col gap-2.5 pl-4 mt-1">
                            <a className="hover:text-petopia-brown" href="/">Grooming</a>
                            <a className="hover:text-petopia-brown" href="/">Vaccination</a>
                            <a className="hover:text-petopia-brown" href="/">Training</a>
                        </div>

                    </details>
                    <li className="hover:text-petopia-brown"><a href="/about">About</a></li>
                    <li className="hover:text-petopia-brown"><a href="/services">Shop</a></li>
                    <li className="hover:text-petopia-brown"><a href="/services">Blog</a></li>
                    <li className="hover:text-petopia-brown"><a href="/contact">Contact</a></li>
                </ul>

                <div className="flex items-center mt-3 gap-3 text-petopia-brown text-lg">
                    {
                        [FiSearch, FiHeart, FiShoppingBag, FiUser].map((Icon, id) => (
                            <span key={id}
                                className="p-2 rounded-full border border-petopia-brown hover:bg-petopia-brown hover:text-white transition">
                                <Icon />
                            </span>
                        ))
                    }
                </div>
            </div>
        </header>
    )
}

export default Navbar