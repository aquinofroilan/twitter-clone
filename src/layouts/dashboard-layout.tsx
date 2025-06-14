import NavBar from "@/components/organisms/navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <>
            <main style={{ padding: "1rem" }}>
                <Outlet />
            </main>
            <NavBar />
        </>
    );
};

export default DashboardLayout;
