import { CgProfile } from "react-icons/cg";
import "../styles/profile.css"


const Profile = () => {
    return (
        <div className={"profile"}>
            <div className={"profile_heading"}>
                <h1>Profile</h1>
            </div>
            <div className={"profile_card"}>
                <div className={"profile_img"}>
                    <CgProfile />
                </div>
                <ul>
                    <li>Name : Jhon Doe</li>
                    <li>Email : jhondoe@gmail.com</li>
                    <li>Phone No. : 7894532565</li>
                </ul>
                <button>Logout</button>
            </div>
        </div>
    )
}
export default Profile;