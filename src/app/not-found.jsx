import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <h2>Not found</h2>
            <p>Sorry,the page yor are looking for dose not exist</p>
            <Link href={"/"}>Return to Home</Link>
        </div>
    );
};

export default NotFound;
