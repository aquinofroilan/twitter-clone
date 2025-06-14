import NavBar from "@/components/organisms/navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <>
            <NavBar />
            <main style={{ padding: "1rem" }}>
                <Outlet />
            </main>
        </>
    );
};

export default DashboardLayout;
