import AppNavbar from "src/components/layout/AppNavbar"
import AppSidebar, { drawerWidth } from "src/components/layout/AppSidebar";
import Box from "@mui/material/Box"
import Container from "@mui/material/Container";
import { useLocation } from "react-router-dom";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const location = useLocation();

    const isMain = location.pathname === "/";

    return <>
        <AppNavbar />
        <Box display="flex">
            <Box sx={{
                width: isMain ? "100%": { lg: `calc(100% - ${drawerWidth}px)` },
            }}>
                <Container>
                    {children}
                </Container>
            </Box>
            {isMain ? null: <Box sx={{
                width: { lg: `${drawerWidth}px` },
            }}>
                <AppSidebar />
            </Box>}
        </Box>
    </>
}
export default Layout;