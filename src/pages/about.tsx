import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import lorem from "src/util/lorem";

export const title = "About";
const About: React.FC = () => {
    // array of 12 generated paragraphs
    const paragraphs = Array.from({ length: 12 }, () => lorem.generateParagraphs(1));
    return <Box>
        <Typography variant="h4" textAlign="center">
            {title}
        </Typography>
        <Grid container spacing={1}>
            {paragraphs.map((p, i) => <Grid item key={i} xs={12} sm={6} md={4}>
                <Typography variant="body1">
                    {p}
                </Typography>
            </Grid>)}
        </Grid>
    </Box>
}
export default About;