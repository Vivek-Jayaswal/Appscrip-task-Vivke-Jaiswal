"use client"

import { useState } from "react"
import "../styles/contact.css"
import { toast } from "react-toastify"

const ContactUs = () => {
    const [formData,setFormData] = useState({
        name : "",
        email : "",
        phone : ""
    })

    const handleOnChange = (e) => {
        const {value,name} = e.target;

        setFormData({
            ...formData,
            [name] : value
        })
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (formData.name && formData.email && formData.phone) {
            toast.success("thanks for connecting us")
            
            setFormData({
                name : "",
                email : "",
                phone : ""
            })
        }else{
            toast.warning("data missing");
        }
    }

    return (
        <div className={""}>
            <h1 className={"contact_h1"}>Contact US</h1>

            <div className={"contact_div"}>
                <form action="#" onSubmit={handleOnSubmit}>
                    <label htmlFor="">Name:</label><br/>
                    <input type="text" onChange={handleOnChange} value={formData.name} name="name" placeholder="Name"/><br/><br/>
                    <label htmlFor="">Email:</label><br/>
                    <input type="email" onChange={handleOnChange} value={formData.email} name="email" placeholder="Enter your email" required/><br/><br/>
                    <label htmlFor="">Mobile No:</label><br/>
                    <input type="tel" onChange={handleOnChange} value={formData.phone} id="phone" name="phone" placeholder="123-45-678" required/><br/><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;