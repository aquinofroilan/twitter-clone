import { Link } from "react-router-dom";
import { Home, Users, Search, Settings, User } from "lucide-react";

const NavBar = () => {
    return (
        <nav className="flex justify-between gap-5">
            <Link className="flex justify-center items-center gap-3 flex-col" to="/u/home">
                <Home size={24} />
                <span>Home</span>
            </Link>
            <Link className="flex justify-center items-center gap-3 flex-col" to="/u/people">
                <Users size={24} />
                <span>People</span>
            </Link>
            <Link className="flex justify-center items-center gap-3 flex-col" to="/u/explore">
                <Search size={24} />
                <span>Explore</span>
            </Link>
            <Link className="flex justify-center items-center gap-3 flex-col" to="/u/settings">
                <Settings size={24} />
                <span>Settings</span>
            </Link>
            <Link className="flex justify-center items-center gap-3 flex-col" to="/u/profile">
                <User size={24} />
                <span>Profile</span>
            </Link>
        </nav>
    );
};

export default NavBar;
