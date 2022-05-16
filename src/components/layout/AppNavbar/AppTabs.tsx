import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getChildRoutes, IRoute, isChildRoute } from "src/routing";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

export const AppTabs: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // get the main route of the current location
    const route = location.pathname.split("/")[1];

    const [pages, setPages] = useState<IRoute[]>([]);
    useEffect(() => {
        setPages(getChildRoutes("/"));
    }, []);

    const pageIndex = Math.max(0, pages.findIndex(x => isChildRoute(route, x.route)));
    return <Tabs
        value={pageIndex}
        indicatorColor="secondary"
        textColor="inherit"
    >
        {pages.map((x, i) => <Tab
            key={i}
            label={x.title}
            value={i}
            component="a"
            onClick={() => navigate(x.route)}
        />)}
    </Tabs>
}
export default AppTabs;