import { Link } from "react-router-dom"

export default () => {
    return <div>
        <h2>This is the about page</h2>
        <ul>
            <li><Link to="/">Index page</Link></li>
        </ul>
    </div>
}