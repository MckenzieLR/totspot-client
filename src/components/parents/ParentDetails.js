import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getParentById } from "../../managers/ParentManager"

export const ParentDetails = () => {
    const [parent, setParent] = useState({})

    const { parentId } = useParams()
    const navigate = useNavigate()

    const totSpotUser = localStorage.getItem("is_staff")
    const totUser = JSON.parse(totSpotUser)

    useEffect(
        () => {
            getParentById(parentId)
                .then((data) => {
                    setParent(data)
                })
        },
        [parentId]
    )

    if (totUser) {
    return (
        <>
            <h1>Parent Details</h1>
            <section className="parent">
                <h3 className="parent__name">Full Name: {parent.parent_name}</h3>
                <div className="parent_number">Phone Number: {parent.phone_number}</div>
            

            </section>
        </>
    )
}
else {
    return (
        <>
            <h1>Parent Details</h1>
            <section className="parent">
                <h3 className="parent__name">Full Name: {parent.parent_name}</h3>
                <div className="parent_number">Phone Number: {parent.phone_number}</div>
                <button className = "create_child" onClick={() => {
                 navigate({ pathname: "/children/new" })
                }}> Add a Child</button>

            </section>
        </>
    )
}

}