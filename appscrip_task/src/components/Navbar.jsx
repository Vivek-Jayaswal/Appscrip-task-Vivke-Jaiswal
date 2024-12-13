"use client"

import Image from "next/image";
import logo from "../../public/assets/logo.svg"
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import navbarStyle from "@/styles/navbar.module.css"
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const [input, setInput] = useState("");
    const [isMobile, setIsmobile] = useState(false)

    const handleSearchClick = () => {

    }

    const handleMobileView = () => {
        setIsmobile(!isMobile)
    }


    return (
        <div className={navbarStyle.parent}>
            <div className={navbarStyle.navbar_item_top}>
                <div className={navbarStyle.navbar_item_top_left}>
                    <div className={navbarStyle.navbar_item_top_ham_menu} onClick={handleMobileView}>
                        {
                           isMobile ? <IoClose/> : <GiHamburgerMenu />
                        }
                    </div>
                    <Image
                        src={logo}
                        width={40}
                        height={40}
                        alt="appscrip logo"
                    />
                </div>
                <div className={navbarStyle.navbar_item_top_middle}>Appscrip</div>
                <div className={navbarStyle.navbar_item_top_right}>
                    <div onClick={handleSearchClick}>
                        <FaSearch />
                    </div>
                    <FaRegHeart />
                    <FiShoppingCart />
                    <Link href={"/profile"}><CgProfile /></Link>
                </div>
            </div>
            <div className={navbarStyle.navbar_item_middle}>
                {/* Desktop view */}
                <div className={navbarStyle.navbar_navigation}>
                    <div><Link href={"/"}>HOME</Link></div>
                    <div><Link href={"/shop"}>SHOP</Link></div>
                    <div><Link href={"/skills"}>SKILLS</Link></div>
                    <div><Link href={"/stories"}>STORIES</Link></div>
                    <div><Link href={"/about"}>ABOUT</Link></div>
                    <div><Link href={"/contact-us"}>CONTACT US</Link></div>
                </div>

                {/* Mobile view */}

                {
                    isMobile && (
                        <div className={navbarStyle.navbar_navigation_mobile}>
                            
                            <div><Link href={"/"}>HOME</Link></div>
                            <div><Link href={"/shop"}>SHOP</Link></div>
                            <div><Link href={"/skills"}>SKILLS</Link></div>
                            <div><Link href={"/stories"}>STORIES</Link></div>
                            <div><Link href={"/about"}>ABOUT</Link></div>
                            <div><Link href={"/contact-us"}>CONTACT US</Link></div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Navbar;