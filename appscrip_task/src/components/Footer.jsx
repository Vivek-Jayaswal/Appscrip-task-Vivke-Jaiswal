"use client";

import { footerNavigation, quickLinks } from "@/content/data";
import Image from "next/image";
import footerStyle from "../styles/footer.module.css"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const Footer = () => {
    const [gmail, setGmail] = useState("");
    const router = useRouter();
    const [isQuickLinks, setQuickLinks] = useState(false)
    const [mettaMouse, setMetaMouse] = useState(false)
    const [socialMedia, setSocialMedia] = useState(false)

    const handleOnChange = (e) => {
        setGmail(e.target.value)
    }

    const handleSubscribe = () => {
        if (gmail && gmail.includes("@")) {
            toast.success("Thanks for subscribing us");
            // API CALL
            setGmail("");
        } else {
            toast.error("email missing")
        }
    }

    const handleOnClick = (data) => {
        router.push(`/${data.links}`)
    }

    const handleClickSocialMedia = () => {
        setSocialMedia(!socialMedia)
    }

    const handleClickQuickLink = () => {
        setQuickLinks(!isQuickLinks)
    }

    const handleClickMettaMouse = () => {
        setMetaMouse(!mettaMouse)
    }

    return (
        <div className={footerStyle.footer}>

            <div className={footerStyle.footer_top}>
                <div className={footerStyle.footer_top_left}>
                    <h2>Be the first to know</h2>
                    <p>Sign up for updates from mettā muse.</p>
                    <div>
                        <input type="text" value={gmail} onChange={handleOnChange} placeholder="Enter your gmail" />
                        <button onClick={handleSubscribe}>SUBSCRIBE</button>
                    </div>
                </div>
                <div className={footerStyle.footer_top_right}>
                    <h2>CONTACT US</h2>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                    <h3>Currency</h3>
                    <div>
                        {/* <Image/> */}
                        <p>USD</p>
                    </div>
                    <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>
            </div>

            <div className={footerStyle.footer_bottom}> 
                {/* desktop view */}
                <div className={footerStyle.footer_bottom_left}>
                    <h2>mettā muse</h2>
                    <ul>
                        {
                            footerNavigation && (footerNavigation.map((data) => {
                                return (
                                    <li onClick={() => handleOnClick(data)} key={data.id}>{data.title}</li>
                                )
                            }))
                        }
                    </ul>
                </div>

                {/* mobile view */}
                <div className={footerStyle.footer_bottom_left_mobile}>
                    <div>
                        <h2>mettā muse</h2>
                        <div onClick={handleClickMettaMouse}>
                            <FaAngleDown />
                        </div>
                    </div>
                    <ul>
                        {
                            (mettaMouse && footerNavigation) && (footerNavigation.map((data) => {
                                return (
                                    <li onClick={() => handleOnClick(data)} key={data.id}>{data.title}</li>
                                )
                            }))
                        }
                    </ul>
                </div>


                {/* desktop view */}

                <div className={footerStyle.footer_bottom_middle}>
                    <h2>Quick Links</h2>
                    <ul>
                        {
                            quickLinks && (quickLinks.map((data) => {
                                return (
                                    <li key={data.id}>{data.title}</li>
                                )
                            }))
                        }
                    </ul>
                </div>

                {/* mobile view */}
                <div className={footerStyle.footer_bottom_middle_mobile}>
                    <div>
                        <h2>Quick Links</h2>
                        <div onClick={handleClickQuickLink}>
                            <FaAngleDown />
                        </div>
                    </div>
                    <ul>
                        {
                            (isQuickLinks && quickLinks) && (quickLinks.map((data) => {
                                return (
                                    <li key={data.id}>{data.title}</li>
                                )
                            }))
                        }
                    </ul>
                </div>

                {/* desktop view */}
                <div className={footerStyle.footer_bottom_right}>
                    <h2>Follow Us</h2>
                    <div>
                        <Link href={"https://www.linkedin.com/"} target="_blank"><FaLinkedin /></Link>
                        <Link href={"https://www.instagram.com/"} target="blank"><FaInstagram /></Link>
                    </div>
                </div>

                {/* mobile view */}

                <div className={footerStyle.footer_bottom_right_mobile}>
                    <div className={footerStyle.footer_bottom_right_mobile_top}>
                        <h2>FOLLOW US</h2>
                        <div onClick={handleClickSocialMedia}>
                            <FaAngleDown />
                        </div>
                    </div>

                    <>
                        {
                            socialMedia && (<div>
                                <Link href={"https://www.linkedin.com/"} target="_blank"><FaLinkedin /></Link>
                                <Link href={"https://www.instagram.com/"} target="blank"><FaInstagram /></Link>
                            </div>)
                        }
                    </>
                </div>
            </div>
            
            <div style={{textAlign:"center",width:"90%",margin:"auto"}}>
                <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer;