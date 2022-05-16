import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Box display="flex" flexDirection="column">
        <Button variant="contained">This is the layout for the page 1!!</Button>
        <Box border={1}>
            {children}
        </Box>
    </Box>
}
export default Layout;