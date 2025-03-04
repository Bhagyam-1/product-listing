import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const commonClassNames = 'bg-gradient-to-b from-tertiary-background to-secondary-background shadow-lg rounded-md';

    return (
        <div className="w-screen h-screen p-2 flex flex-col gap-2 overflow-hidden">
            <Navbar />
            <div className="flex gap-2 flex-grow h-full py-4 overflow-hidden">
                <nav className={`${commonClassNames} min-w-50 px-2 py-8`}><Sidebar /></nav>
                <main className={`${commonClassNames} flex-grow h-full p-8 overflow-auto`}>{children}</main>
            </div>
        </div>
    );
};

export default Layout;
