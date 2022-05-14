import { Link, useParams } from "react-router-dom";

export default () => {
    const { id } = useParams();
    return <div>
        <h2>The data for product {id}</h2>
        <Link to={`/product/${id}`}>Go to product</Link>
    </div>
}