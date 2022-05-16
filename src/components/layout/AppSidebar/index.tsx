import Drawer from "@mui/material/Drawer"
import Tabs from "@mui/material/Tabs"
import SidebarList from "./SidebarList";

export const drawerWidth = 240;
const AppSidebar: React.FC = () => {
    return <>
        <Drawer
            variant="permanent"
            anchor="right"
            sx={{
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}>
            <Tabs />
            <SidebarList />
        </Drawer>
    </>
}
export default AppSidebar;