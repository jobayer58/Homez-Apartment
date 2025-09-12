import { useEffect, useState } from "react";
import logo from '../../assets/logoNavbar.png'
import { CgProfile } from "react-icons/cg";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 border-b-[1px] border-[#FFFFFF12] transition-all duration-300 ${isScrolled ? "shadow-md bg-transparent backdrop-blur-[10px]" : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 lg:px-0 py-4">
                {/* logo */}
                <div className="flex gap-3 items-center justify-center">
                    <div className="w-[44px] h-[44px] rounded-full bg-[#EB6753] flex justify-center items-center">
                        <img src={logo} alt="" />
                    </div>
                    <h1 className={`text-xl font-bold ${isScrolled ? "text-black" : "text-white"}`}>Homez</h1>
                </div>

                {/* Desktop & Tablet Nav link */}
                <div className="hidden lg:block">
                    <ul className={`flex gap-18 text-[14px] ${isScrolled ? "text-black" : "text-white"}`}>
                        {["Home", "Listings", "Members", "Blog", "Pages"].map((item, i) => (
                            <li
                                key={i}
                                className="relative cursor-pointer flex items-center gap-1 
                                after:content-[''] after:w-2 after:h-0.5 after:bg-white"
                            >
                                <span
                                    className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] 
                                    after:bg-white after:left-0 after:-bottom-1 
                                    after:transition-all after:duration-300 
                                    hover:after:w-full"
                                >
                                    {item}
                                </span>
                            </li>
                        ))}

                    </ul>
                </div>

                {/* signin /signup (desktop + tablet) */}
                <div className={`hidden lg:flex gap-4 items-center ${isScrolled ? "text-black" : "text-white"}`}>
                    <CgProfile className="text-2xl" />
                    <h2 className="text-[14px]">Login / Register</h2>
                    <button className="flex items-center gap-0.5 bg-white border border-white rounded-[12px] py-2 px-5 text-black cursor-pointer font-bold text-xs">
                        Add Property <GoArrowUpRight className="text-xl" />
                    </button>
                </div>

                {/* Mobile & Tablet Menu Icon */}
                <div className={`lg:hidden text-2xl cursor-pointer ${isScrolled ? "text-black" : "text-white"}`} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </div>
            </div>

            {/* Mobile & Tablet Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-black bg-opacity-95 text-white px-6 py-4 space-y-4">
                    <ul className="flex flex-col gap-4 text-[14px]">
                        {["Home", "Listings", "Members", "Blog", "Pages"].map((item, i) => (
                            <li key={i} className="cursor-pointer">{item}</li>
                        ))}
                    </ul>

                    <div className="flex flex-col gap-4 pt-4">
                        <div className="flex items-center gap-2">
                            <CgProfile className="text-2xl" />
                            <h2 className="text-[14px]">Login / Register</h2>
                        </div>
                        <button className="flex items-center justify-center gap-2 bg-white border border-white rounded-[12px]  py-2 px-5 text-black cursor-pointer font-bold text-xs">
                            Add Property <GoArrowUpRight className="text-xl" />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
