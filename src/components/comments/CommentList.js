import { useEffect, useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { deleteComment, getComments } from "../../managers/CommentManager"


export const CommentList = () => {
    const [comments, setComments] = useState([])
    const navigate = useNavigate()

    const totSpotUser = localStorage.getItem("is_staff")
    const totUser = JSON.parse(totSpotUser)


    useEffect(() => {
        getComments().then(setComments)
    }, [])

    const updateCommentList = () => {
        getComments().then(setComments)
    }



    if(totUser) {
    return <div className = "comment_list"><table className="minimalistBlack">

        {
            comments?.map(comment =>
                
                <tbody key={comment.id} >
                    <tr>
                        <td>Comment {comment.id}</td>
                        <td>Provider: {comment?.user_name} </td>
                        <td>{comment.content}</td>
                        <td>Post: {comment.post}</td>
                        <td><center><button className = "edit_post" onClick= {() => {
                            navigate({pathname: `/comments/${comment.id}/edit`})
                        }}>Edit</button></center></td>

                        <td><center><button onClick ={evt => {
                            evt.preventDefault()
                            const commentDel = {
                                id: parseInt(comment.id)
                            }
                            deleteComment(commentDel)
                            .then(() => updateCommentList())
                        }}>Delete</button></center></td>
                    </tr>
                </tbody>
            )
        }
        
    </table>
    </div>
}

    else {
        return <div className = "comment_list"><table className="minimalistBlack">

        {
            comments?.map(comment =>
                
                <tbody key={comment.id} >
                    <tr>
                        <td>Comment {comment.id}</td>
                        <td>Provider: {comment?.user_name} </td>
                        <td>{comment.content}</td>
                        <td>Post: {comment.post}</td>
                        
                    </tr>
                </tbody>
            )
        }
        
    </table>
    </div>
    }
}