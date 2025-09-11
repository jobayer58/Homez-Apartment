import { useEffect, useState } from "react";
import logo from '../../assets/logo.png'
import { CgProfile } from "react-icons/cg";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
            className={`fixed top-0 left-0 w-full z-50 border-b-[1px] border-[#FFFFFF12] transition-all duration-300 ${isScrolled ? "bg-transparent backdrop-blur-[10px] shadow-md" : "bg-transparent "
                }`}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                {/* logo */}
                <div>
                   <Link to='/'> <img src={logo} className=" h-10 object-cover w-32 " alt="logo" /></Link>
                </div>
                {/* Nav link */}
                <div>
                    <ul className="flex gap-10 text-white text-[14px]">
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
                {/* signin /signup */}
                <div className="flex text-white gap-4  items-center">
                    <CgProfile className="text-2xl"></CgProfile>
                    <h2 className="text-[14px]">Login / Register</h2>
                    <button className="flex items-center gap-0.5 bg-white border border-white rounded-[12px] py-2 px-5 text-black cursor-pointer font-bold text-xs ">Add Property <GoArrowUpRight className="text-xl"></GoArrowUpRight></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
