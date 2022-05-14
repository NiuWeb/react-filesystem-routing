import Box from "@mui/material/Box"
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom";

export const title = "Products";
const Products: React.FC = () => {
    const navigate = useNavigate();
    return <Box>
        <Typography variant="h4" textAlign="center">
            {title}
        </Typography>
        <List>
            <ListItem>
                <Button variant="contained" onClick={() => navigate("./view/354")}>
                    View a product
                </Button>
            </ListItem>
        </List>
    </Box>
}
export default Products;