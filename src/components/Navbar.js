import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import logo from "../assets/images/transBackground.svg";

const Navbar = () => {
    const [active, setActive] = useState("");

    const navLinks = [
        {
            id: "about",
            title: "About",
        },
        {
            id: "projects",
            title: "Projects",
        },
        {
            id: "contact",
            title: "Contact",
        },
    ];

    const handleNavLinkClick = (navId) => {
        setActive(navId);
        scroller.scrollTo(navId, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <nav className={`w-full flex items-center pt-1.5 fixed top-0 z-20 ${
                scrolled ? "bg-[#4B6858]" : "bg-transparent"
            }`}>
                <div className="w-full flex mx-auto pl-5 py-2.5">
                    <Link
                        to="/"
                        className="flex items-center gap-2"
                        onClick={() => {
                            setActive("");
                            scroll.scrollToTop({
                                duration: 800,
                                delay: 0,
                                smooth: "easeInOutQuart",
                            });
                        }}
                    >
                        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                        <p className="text-white text-[18px] font-bold cursor-pointer flex">
                            António Ventura
                        </p>
                    </Link>
                    <div className="ml-auto hidden sm:flex items-center gap-5 pr-3.5">
                        {navLinks.map((nav) => (
                            <Link
                                key={nav.id}
                                to={nav.to}
                                className={`${
                                    active === nav.id
                                        ? "text-white font-extrabold bg-black px-6 py-1 rounded-2xl border-white"
                                        : "text-white bg-transparent px-6 py-1 rounded-2xl"
                                } text-[18px] cursor-pointer box-border border-b-2 border-transparent hover:border-white transition duration-300 ease-in-out`}
                                onClick={() => {
                                    setActive(nav.id)
                                    handleNavLinkClick(nav.id);
                                }}
                            >
                                {nav.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export { Navbar };
