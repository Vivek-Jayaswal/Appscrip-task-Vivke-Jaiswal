import Link from "next/link";

const Stories = () => {
    return (
        <div className="about">
            <h1>Stories</h1>
            <div>
                <p>Stories Upcoming Soon</p>
                <Link href={"/"}>GO BACK TO HOME</Link>
            </div>
        </div>
    )
}

export default Stories;