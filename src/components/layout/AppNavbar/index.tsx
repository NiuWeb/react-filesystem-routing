import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import AppTabs from "./AppTabs";

// get the main pages
const AppNavbar: React.FC = () => {
    return <>
        <AppBar enableColorOnDark sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "primary.dark"
        }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box></Box>
                <Box>
                    <AppTabs />
                </Box>
                <Box></Box>
            </Box>
        </AppBar>
        <Tabs></Tabs>
    </>
}
export default AppNavbar;