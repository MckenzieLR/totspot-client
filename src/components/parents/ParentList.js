import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getAllParents } from "../../managers/ParentManager"
import { getAllChildren } from "../../managers/ChildManager"
import "./Parents.css"


export const ParentList = () => {
    const [parents, setParents] = useState([])

    const navigate = useNavigate()

    const totSpotUser = localStorage.getItem("is_staff")
    const totUser = JSON.parse(totSpotUser)

    
    
    const updateParentList = () => {
        getAllParents().then(setParents)
    }

  


    useEffect(() => {
        updateParentList()
    }, [])

    

    if(totUser) {
    return <>
        <h1 className="parentHeader">Parent List</h1>
        <section className="parents">
            {
                parents.map(parent => {
                    return <div className="parent">
                        <h3 className="parent_name"> Name:  <Link to={`/parents/${parent.id}`}>{parent.parent_name}</Link></h3>
                    </div>
                })
            }
        </section>
    </>
}

    else {
        return <>
        <h1 className="parentHeader">My Details</h1>
        <section className="parents">
            {
                parents.map(parent => {
                    return <div className="parent">
                        <h3 className="parent__name"> {parent.parent_name}</h3>
                <div className="parent_number">Phone Number: {parent.phone_number}</div>
                <button className = "create_child button-17" onClick={() => {
                 navigate({ pathname: "/children/new" })
                }}> Add a Child</button>
                    </div>
                })
            }
        </section>
    </>
    }
}

// const [children, setChildren] = useState([])


// const checkChildren = () => {
//     getAllChildren().then(setChildren)
// }

// useEffect(() => {
//     checkChildren()
// }, [])

// <h3 className="parent_children">My Child(ren)</h3>
//         <section className="children">
//             {
//                 parents.map(parent => {
//                     children.map(child => {
//                     if (child?.parent?.id == parent?.id)
//                     return <div className="child">
//                         <Link to={`/children/${child.id}`}>{child.first_name} {child.last_name}</Link>
//                     </div>
//                     })
//                 })
//             }
//         </section>