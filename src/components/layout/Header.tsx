import { TiSortAlphabeticallyOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="px-6 py-3 flex items-center gap-3 bg-gradient-to-r from-tertiary-background to-secondary-background shadow-lg rounded-md">
            <Link to="/">
                <TiSortAlphabeticallyOutline className="text-4xl hover:scale-110 transition-transform duration-200" />
            </Link>
            <h1 className="text-xl font-bold tracking-wide">Item Insights</h1>
        </header>
    );
};

export default Header;
