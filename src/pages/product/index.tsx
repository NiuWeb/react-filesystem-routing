import { Link } from "react-router-dom"

export default () => {
    return <div>
        <h2>This is the product page</h2>
        <ul>
            <li><Link to="/">Index page</Link></li>
            <li><Link to="./432">View product 432</Link></li>
        </ul>
    </div>
}