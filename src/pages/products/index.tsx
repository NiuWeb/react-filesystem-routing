import Box from "@mui/material/Box"
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom";

export const title = "Products";
const Products: React.FC = () => {
    return <Box>
        <Typography variant="h4" textAlign="center">
            {title}
        </Typography>
        <List>
            <ListItem>
                <Link to="./view/345">View a product</Link>
            </ListItem>
        </List>
    </Box>
}
export default Products;