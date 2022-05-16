import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { getChildRoutes, IRoute } from "src/routing";

const SidebarList: React.FC = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [pages, setPages] = useState<IRoute[]>([]);
    useEffect(() => {
        const base = location.pathname.split("/")[1];
        const basepath = "/" + base;
        const childs = getChildRoutes(basepath, 2);
        setPages(childs);
    }, [location]);

    /**
     * Check if pages are in the current path
     */
    const checkPages = () => {
        return pages.some(x => x.route.startsWith(location.pathname));
    }

    return !checkPages() ? null: <Tabs
        value={location.pathname}
        orientation="vertical"
        onChange={(_, v) => navigate(v)}
    >
        {pages.map(page => <Tab
            key={page.route}
            value={page.route}
            label={page.title}
        />)}
    </Tabs>
}
export default SidebarList;