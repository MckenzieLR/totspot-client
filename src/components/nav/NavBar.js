import { Link, useNavigate } from "react-router-dom"
import ABCblocks from "../imgs/ABCblocks.jpg"
import borcelle from "../imgs/borcelle.png"
import "./Nav.css"


export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className="container blue circleBehind">
            {
                (localStorage.getItem("totuser") !== null) ?
                <>
                    <a className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                    </a>
                    <a className="nav-item">
                    <Link className="nav-link" to="/posts">Posts</Link>
                    </a>
                    <a className="nav-item">
                    <Link className="nav-link" to="/parents">Account</Link>
                    </a>
                    <a className="nav-item">
                    <button className="nav-link fakeLink button-17 logoutButton"
                        onClick={() => {
                            localStorage.removeItem("totuser")
                            localStorage.removeItem("is_staff")
                            navigate('/login')
                        }}
                    >Logout</button></a> 
                </>
                :
                    <>
                        <a className="nav-item ">
                            <Link className="nav-link" to="/login">Login</Link>
                        </a>
                    </>
            }        </div>
    )
}