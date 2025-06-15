import NavBar from "@/components/organisms/navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <main>
            <section style={{ padding: "1rem" }}>
                <Outlet />
            </section>
            <NavBar />
        </main>
    );
};

export default DashboardLayout;
