import Box from "@mui/material/Box";
import { useParams } from "react-router-dom"

export const title = "View product";
const View: React.FC = () => {
    const { id } = useParams();

    return <Box>
        Viewing product {id}
    </Box>
}
export default View;