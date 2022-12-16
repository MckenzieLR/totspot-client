import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getAllParents } from "../../managers/ParentManager"


export const ParentList = () => {
    const [parents, setParents] = useState([])

    
    
    const updateParentList = () => {
        getAllParents().then(setParents)
    }

    useEffect(() => {
        updateParentList()
    }, [])


    return <>
        <h1>Parent List</h1>
        <section className="parents">
            {
                parents.map(parent => {
                    return <div className="parent">
                        <h3 className="parent__name">Name: <Link to={`/parents/${parent.id}`}>{parent.parent_name}</Link></h3>
                    </div>
                })
            }
        </section>
    </>
}