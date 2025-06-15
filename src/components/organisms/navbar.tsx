import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const NavBar = () => {
    return (
        <nav className="flex justify-between gap-5">
            <Link className="flex justify-center items-center gap-3 flex-col" to="/u/home">
                <HiHome size={24} />
                <span>Home</span>
            </Link>
            <Link className="flex justify-center items-center gap-3 flex-col" to="/u/people">
                <BsPeopleFill size={24} />
                <span>People</span>
            </Link>
            <Link className="flex justify-center items-center gap-3 flex-col" to="/u/explore">
                <IoSearch size={24} />
                <span>Explore</span>
            </Link>
            <Link className="flex justify-center items-center gap-3 flex-col" to="/u/settings">
                <IoMdSettings size={24} />
                <span>Settings</span>
            </Link>
            <Link className="flex justify-center items-center gap-3 flex-col" to="/u/profile">
                <IoPersonCircleOutline size={24} />
                <span>Profile</span>
            </Link>
        </nav>
    );
};

export default NavBar;
