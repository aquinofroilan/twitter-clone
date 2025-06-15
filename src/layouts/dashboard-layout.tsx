import NavBar from "@/components/organisms/navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <main className="h-screen w-full relative">
            <section>
                <Outlet />
            </section>
            <NavBar />
        </main>
    );
};

export default DashboardLayout;
