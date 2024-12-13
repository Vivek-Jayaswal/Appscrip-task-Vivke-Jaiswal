"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"
import "../styles/homepage.css"
import { FaAngleDown, FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const HomePage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isShowRecommended, setShowRecommended] = useState(false);
    const [isShowFilter, setShowFilter] = useState(false);
    const [fabric, setFabric] = useState(false);
    const [idel, setIdeal] = useState(false);
    const [occasio, setOccasion] = useState(false);
    const [pattern, setPattern] = useState(false);
    const [raw, setRaw] = useState(false);
    const [suitable, setSutaible] = useState(false);
    const [segment, setSegment] = useState(false);
    const [work, setWork] = useState(false);

    const handleShowRecommended = () => {
        setShowRecommended(!isShowRecommended);
    }

    const handleShowFilter = () => {
        setShowFilter(!isShowFilter)
    }

    const handleFabricClick = () => {
        setFabric(!fabric)
    }
    const handleIdelClick = () => {
        setIdeal(!idel)
    }
    const handleOccasionClick = () => {
        setOccasion(!occasio)
    }
    const handlePatternClick = () => {
        setPattern(!pattern)
    }
    const handleRawClick = () => {
        setRaw(!raw)
    }
    const handleSuitableClick = () => {
        setSutaible(!suitable)
    }
    const handleSegmentClick = () => {
        setSegment(!segment)
    }
    const handleWorkClick = () => {
        setWork(!work)
    }


    useEffect(() => {

        const fetchData = async () => {
            setLoading(true)
            try {
                const result = await axios.get('https://fakestoreapi.com/products')
                // console.log(result);
                setData(result.data)
            } catch (error) {

            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <div className={"home_page_parent"}>
            <div className={"home_filter_recommended"}>
                <div onClick={handleShowFilter}>
                    <div className={"home_show_filter"}>
                        {
                            isShowFilter ? (
                                <>
                                    <FaChevronLeft />
                                    <button>HIDE FILTER</button>
                                </>
                            ) : (
                                <>
                                    <button>SHOW FILTER</button>
                                    <FaChevronRight />
                                </>
                            )
                        }
                    </div>

                </div>

                <div>
                    <div className={"home_recommended"}
                        onClick={handleShowRecommended}
                    >
                        <p>RECOMMENDED</p>
                        <FaAngleDown />
                    </div>

                    <div className={"home_recommended_list"}>
                        {
                            isShowRecommended && (
                                <ul>
                                    <li>Recommended</li>
                                    <li>Newest first</li>
                                    <li>Popular</li>
                                    <li>Price : high to low</li>
                                    <li>Price : low to high</li>
                                </ul>
                            )
                        }
                    </div>
                </div>

            </div>


            <div className={"home"}>
                {
                    isShowFilter && (
                        <div className={"home_left"}>
                            <div>
                                <div className={"home_left_cta"} onClick={handleIdelClick}>
                                    <h2>IDEAL FOR</h2>
                                    <FaAngleDown />
                                </div>
                                {
                                    idel ? (<div className="">
                                        <p style={{ paddingBottom: "10px" }}>All</p>
                                        <div>
                                            <input type="checkbox" id="men" />
                                            <label htmlFor="men">Men</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="women" />
                                            <label htmlFor="women">Women</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="kids" />
                                            <label htmlFor="kids">Kids & Baby</label>
                                        </div>
                                    </div>) : (<p>All</p>)
                                }

                            </div>
                            <div>
                                <div className={"home_left_cta"} onClick={handleOccasionClick}>
                                    <h2>OCCASION</h2>
                                    <FaAngleDown />
                                </div>
                                {
                                    occasio ? (
                                        <div>
                                            <p style={{ paddingBottom: "10px" }}>All</p>
                                            <div>
                                                <input type="checkbox" id="wedding" />
                                                <label htmlFor="wedding">Wedding</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="parties" />
                                                <label htmlFor="parties">Parties</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="anniversaries" />
                                                <label htmlFor="anniversaries">Anniversaries</label>
                                            </div>
                                        </div>) : (<p>All</p>)
                                }
                            </div>
                            <div>
                                <div className={"home_left_cta"} onClick={handleWorkClick}>
                                    <h2>WORK</h2>
                                    <FaAngleDown />
                                </div>
                                {
                                    work ? (<div>
                                        <p style={{ paddingBottom: "10px" }}>All</p>
                                        <div>
                                            <input type="checkbox" id="men" />
                                            <label htmlFor="men">Men</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="women" />
                                            <label htmlFor="women">Women</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="kids" />
                                            <label htmlFor="kids">Kids & Baby</label>
                                        </div>
                                    </div>) : (<p>All</p>)
                                }
                            </div>
                            <div>
                                <div className={"home_left_cta"} onClick={handleFabricClick}>
                                    <h2>FABRIC</h2>
                                    <FaAngleDown />
                                </div>
                                {
                                    fabric ? (
                                        <div>
                                            <p style={{ paddingBottom: "10px" }}>All</p>
                                            <div>
                                                <input type="checkbox" id="cotton" />
                                                <label htmlFor="cotton">Cotton</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="denim" />
                                                <label htmlFor="denim">Denim</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="silk" />
                                                <label htmlFor="silk">Silk</label>
                                            </div>
                                        </div>
                                    ) : (<p>All</p>)
                                }
                            </div>
                            <div>
                                <div className={"home_left_cta"} onClick={handleSegmentClick}>
                                    <h2>SEGMENT</h2>
                                    <FaAngleDown />
                                </div>
                                {
                                    segment ? (
                                        <div>
                                            <p style={{ paddingBottom: "10px" }}>All</p>
                                            <div>
                                                <input type="checkbox" id="men" />
                                                <label htmlFor="men">Men</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="women" />
                                                <label htmlFor="women">Women</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="kids" />
                                                <label htmlFor="kids">Kids & Baby</label>
                                            </div>
                                        </div>) : (<p>All</p>)
                                }
                            </div>
                            <div>
                                <div className={"home_left_cta"} onClick={handleSuitableClick}>
                                    <h2>SUITABLE FOR</h2>
                                    <FaAngleDown />
                                </div>
                                {
                                    suitable ? (<div>
                                        <p style={{ paddingBottom: "10px" }}>All</p>
                                        <div>
                                            <input type="checkbox" id="men" />
                                            <label htmlFor="men">Men</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="women" />
                                            <label htmlFor="women">Women</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="kids" />
                                            <label htmlFor="kids">Kids & Baby</label>
                                        </div>
                                    </div>) : (<p>All</p>)
                                }
                            </div>
                            <div>
                                <div className={"home_left_cta"} onClick={handlePatternClick}>
                                    <h2>PATTERN</h2>
                                    <FaAngleDown />
                                </div>

                                {
                                    pattern ? (<div>
                                        <p style={{ paddingBottom: "10px" }}>All</p>
                                        <div>
                                            <input type="checkbox" id="men" />
                                            <label htmlFor="men">Men</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="women" />
                                            <label htmlFor="women">Women</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="kids" />
                                            <label htmlFor="kids">Kids & Baby</label>
                                        </div>
                                    </div>) : (<p>All</p>)
                                }
                            </div>
                            <div>
                                <div className={"home_left_cta"} onClick={handleRawClick}>
                                    <h2>RAW MATERIALS</h2>
                                    <FaAngleDown />
                                </div>
                                {
                                    raw ? (<div>
                                        <p style={{ paddingBottom: "10px" }}>All</p>
                                        <div>
                                            <input type="checkbox" id="men" />
                                            <label htmlFor="men">Men</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="women" />
                                            <label htmlFor="women">Women</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="kids" />
                                            <label htmlFor="kids">Kids & Baby</label>
                                        </div>
                                    </div>) : (<p>All</p>)
                                }
                            </div>
                        </div>
                    )
                }

                <div className={"home_right"}>
                    {
                        loading ? (
                            <div style={{ width: "100%", textAlign: "center" }}>
                                <p>
                                    Loading....
                                </p>
                            </div>
                        ) : (
                            <div className={"homepage_card_container"}>
                                {
                                    data.length > 0 ? data.map((item, index) => {
                                        return (
                                            <div key={index} className={"homepage_card"}>
                                                <div style={{ textAlign: "center" }}>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        width={200}
                                                        height={200}
                                                    />
                                                </div>
                                                <div>
                                                    <p>{item.title}</p>
                                                </div>
                                            </div>
                                        )
                                    }) : (<div>Data Not Found</div>)
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>)
}
export default HomePage;
