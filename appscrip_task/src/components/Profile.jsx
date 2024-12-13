import { CgProfile } from "react-icons/cg";
import profileStyle from "../styles/profile.module.css"


const Profile = () => {
    return (
        <div className={profileStyle.profile}>
            <div className={profileStyle.profile_heading}>
                <h1>Profile</h1>
            </div>
            <div className={profileStyle.profile_card}>
                <div className={profileStyle.profile_img}>
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