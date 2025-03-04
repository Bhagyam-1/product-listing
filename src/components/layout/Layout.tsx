import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ErrorBoundary from "./ErrorBoundary";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const commonClassNames = 'bg-gradient-to-b from-tertiary-background to-secondary-background shadow-lg rounded-md';

    return (
        <ErrorBoundary>
            <div className="w-screen h-screen p-2 flex flex-col gap-2 overflow-y-hidden">
                <Header />
                <div className="flex gap-2 flex-grow h-full py-2 overflow-y-hidden">
                    <aside className={`${commonClassNames} min-w-50 px-2 py-8`}><Sidebar /></aside>
                    <main className={`${commonClassNames} flex-grow h-full min-w-5xl py-8 px-2 overflow-auto`}>{children}</main>
                </div>
            </div>
        </ErrorBoundary>
    );
};

export default Layout;
