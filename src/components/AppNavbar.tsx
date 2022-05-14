import AppBar from "@mui/material/AppBar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useLocation, useNavigate } from "react-router-dom";
import { getChildRoutes, isChildRoute } from "src/routing";

// get the main pages
const AppNavbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // get the main route of the current location
    const route = location.pathname.split("/")[1];

    // get only the main pages
    const pages = getChildRoutes("/");

    const pageIndex = Math.max(0, pages.findIndex(x => isChildRoute(route, x.route)));
    return <>
        <AppBar>
            <Tabs
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
        </AppBar>
        <Tabs></Tabs>
    </>
}
export default AppNavbar;