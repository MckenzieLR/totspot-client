import { useEffect, useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { deleteComment, getComments } from "../../managers/CommentManager"
import "./Comments.css"

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
                    <tr className="comment_body">
                        <td className="comment_section">Comment {comment.id}</td>
                        <td className="comment_section">{comment.content}</td>
                        <td className="comment_section">Post: {comment.post}</td>
                        <td className="comment_section">Provider: {comment?.user_name} </td>
                        <td><center><button className = "commentButton edit_post button-17" onClick= {() => {
                            navigate({pathname: `/comments/${comment.id}/edit`})
                        }}>Edit</button></center></td>

                        <td><center><button className="button-17 commentButton" onClick ={evt => {
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
                    <tr className="comment_body">
                        <td className="comment_section">Comment {comment.id}</td>
                        <td className="comment_section">{comment.content}</td>
                        <td className="comment_section">Post: {comment.post}</td>
                        <td className="comment_section">Provider: {comment?.user_name} </td>
                    </tr>
                </tbody>
            )
        }
        
    </table>
    </div>
    }
}