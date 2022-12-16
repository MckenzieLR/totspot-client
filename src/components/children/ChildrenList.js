import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { deleteChild, getAllChildren } from "../../managers/ChildManager"



export const ChildList = () => {
    const [children, setChildren] = useState([])

    
    
    const updateChildList = () => {
        getAllChildren().then(setChildren)
    }

    useEffect(() => {
        updateChildList()
    }, [])



return <div className = "child_list"><table className="minimalistBlack">

{
    children?.map(child =>
        
        <tbody key={child.id} >
            <tr>
                <td>Name: <Link to={`/children/${child.id}`}>{child.first_name} {child.last_name}</Link></td>
                <td><center><button onClick ={evt => {
                    evt.preventDefault()
                    const childDel = {
                        id: parseInt(child.id)
                    }
                    deleteChild(childDel)
                    .then(() => updateChildList())
                }}>Delete</button></center></td>
            </tr>
        </tbody>
    )
}

</table>
</div>
}