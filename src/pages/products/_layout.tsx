import Box from "@mui/material/Box";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return <>
        <Box sx={{backgroundColor: "#AAA"}}>
            {children}
        </Box>
    </>
}
export default Layout;