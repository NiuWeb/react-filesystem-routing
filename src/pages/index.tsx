import { Link } from "react-router-dom"

export default () => {
    return <div>
        <h2>This is the index page</h2>
        <ul>
            <li><Link to="/home">Home page</Link></li>
            <li><Link to="/product">Product page</Link></li>
        </ul>
    </div>
}