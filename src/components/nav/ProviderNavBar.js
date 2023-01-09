import { Link, useNavigate } from "react-router-dom"
import ABCblocks from "../imgs/ABCblocks.jpg"
import borcelle from "../imgs/borcelle.png"
import "./Nav.css"

export const ProviderNavBar = () => {
    const navigate = useNavigate()
    return (
        <div className="container blue circleBehind">
                    <a className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                    </a>
                    <a className="nav-item">
                    <Link className="nav-link" to="/posts">Posts</Link>
                    </a>
                    <a className="nav-item">
                    <Link className="nav-link" to="/parents">Parents</Link>
                    </a>
                    <a className="nav-item">
                    <Link className="nav-link" to="/providers">Providers</Link>
                    </a>
                    <a className="nav-item">
                    <Link className="nav-link" to="/children">Children</Link>
                    </a>
                    <a className="nav-item">
                    <Link className="nav-link" to="/allergies">Allergies</Link>
                    </a>
                        <a className="nav-item">
                        <button className=" button-17"
                            onClick={() => {
                                localStorage.removeItem("totuser")
                                navigate('/login')
                            }}
                        >Logout</button></a>
        </div>
    )
}