import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const NavBar = () => {
    return (
        <nav className="flex justify-between gap-5">
            <div className="flex justify-center items-center gap-3 flex-col">
                <HiHome size={24} />
                <Link className="text-black" to="/u/home">
                    Home
                </Link>
            </div>
            <div className="flex justify-center items-center gap-3 flex-col">
                <BsPeopleFill size={24} />
                <Link className="text-black" to="/u/people">
                    People
                </Link>
            </div>
            <div className="flex justify-center items-center gap-3 flex-col">
                <IoSearch size={24} />
                <Link className="text-black" to="/u/explore">
                    Explore
                </Link>
            </div>
            <div className="flex justify-center items-center gap-3 flex-col">
                <IoMdSettings size={24} />
                <Link className="text-black" to="/u/settings">
                    Settings
                </Link>
            </div>
            <div className="flex justify-center items-center gap-3 flex-col">
                <IoPersonCircleOutline size={24} />
                <Link className="text-black" to="/u/profile">
                    Profile
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
