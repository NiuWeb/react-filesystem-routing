import { Link, useParams } from "react-router-dom";

export default () => {
    const { id } = useParams();
    return <div>
        <h2>This is the product {id}</h2>
        <ul>
            <li><Link to="/">Index page</Link></li>
            <li><Link to="/product">Products page</Link></li>
            <li><Link to="./data">View data</Link></li>
        </ul>
    </div>
}