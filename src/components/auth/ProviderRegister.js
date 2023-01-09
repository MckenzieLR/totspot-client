import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"



export const ProviderRegister = () => {
    const firstName = useRef()
    const lastName = useRef()
    const phoneNumber = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const navigate = useNavigate()  

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "email": email.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "password": password.current.value,
                "is_staff": true,
                "phone_number": phoneNumber.current.value,
                "account_type": "provider"
            }

            registerUser(newUser)
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("totuser", res.token)
                        navigate("/login")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register a Provider</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputUsername">Email</label>
                    <input ref={email} type="text" name="email" className="form-control" placeholder="Email" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input ref={phoneNumber} type="text" name="phoneNumber" className="form-control" placeholder="Phone Number" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>

                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="btn btn-1 btn-sep icon-send button-17" type="submit">Register</button>
                </fieldset>
            </form>
            <section className="link--register">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>
    )
}
