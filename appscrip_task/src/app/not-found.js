const { default: Link } = require("next/link")

const page = () => {
    return (
        <div className="page_not_found">
            <div>
                <p>Page Not Found</p>
                <Link href={"/"}>Go Back </Link>
            </div>
        </div>
    )
}

export default page;