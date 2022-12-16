import { Link, useNavigate } from "react-router-dom"

export const ProviderNavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
                    <li className="nav-item">
                    <Link className="nav-link" to="/posts">Posts</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/parents">Parents</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/providers">Providers</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/children">Children</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/allergies">Allergies</Link>
                    </li>
                    <li className="nav-item">
                    <button className="nav-link fakeLink"
                        onClick={() => {
                            localStorage.removeItem("totuser")
                            navigate('/login')
                        }}
                    >Logout</button></li> 
        </ul>
    )
}