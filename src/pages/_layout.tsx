import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { useLocation } from "react-router-dom";
import AppNavbar from "src/components/AppNavbar";
import { getTitle } from "src/routing";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();
    const title = getTitle(location.pathname);
    document.title = title;
    return <>
        <CssBaseline />
        <AppNavbar />
        <Container>
            {children}
        </Container>
    </>
}
export default Layout;