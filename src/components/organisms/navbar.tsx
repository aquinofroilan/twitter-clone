import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav style={{ background: "#111", padding: "1rem", color: "#fff" }}>
            <Link to="/home">Feed</Link> |<Link to="/settings">Settings</Link> |<Link to="/profile">Profile</Link>
        </nav>
    );
};

export default NavBar;
