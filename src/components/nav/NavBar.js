import { Link, useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            {
                (localStorage.getItem("totuser") !== null) ?
                <>
                    <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/posts">Posts</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/parents">Parents</Link>
                    </li>
                    <li className="nav-item">
                    <button className="nav-link fakeLink"
                        onClick={() => {
                            localStorage.removeItem("totuser")
                            localStorage.removeItem("is_staff")
                            navigate('/login')
                        }}
                    >Logout</button></li> 
                </>
                :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </>
            }        </ul>
    )
}