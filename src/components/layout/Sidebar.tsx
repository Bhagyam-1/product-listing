import { NavLink } from "react-router-dom";
import { sidebarItems } from "../../utility/constants";

const Sidebar = () => {
    return (
        <nav>
            <ul className="space-y-3">
                {
                    sidebarItems.map((item) =>
                        <li className="py-2" key={item.name}>
                            <NavLink to={item.link} className={({ isActive }) => `inline-flex w-full hover:text-secondary-background px-4 py-3 w-full rounded-md ${isActive ? "bg-gray-300 text-background" : ""}`}>{item.name}</NavLink>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Sidebar;