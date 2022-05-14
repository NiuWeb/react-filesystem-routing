import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import lorem from "src/util/lorem";

export const title = "Home";
const Home: React.FC = () => {
    return <Box>
        <Typography variant="h4" textAlign="center">
            {title}
        </Typography>
        <Typography variant="body1">
            {lorem.generateParagraphs(16)}
        </Typography>
    </Box>
}
export default Home;