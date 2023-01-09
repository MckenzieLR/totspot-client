import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { createComment } from "../../managers/CommentManager"



export const CommentForm = () => {
    const navigate = useNavigate()
    const [user, setPost] = useState([])

    const {postId} = useParams()
    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentComment, setCurrentComment] = useState({
        content: "",
        date: "",
        post: 0,

    })



    const changeCommentState = (domEvent) => {
        // TODO: Complete the onChange function
        const updatedComment = {...currentComment }
        updatedComment[domEvent.target.id] = domEvent.target.value
        setCurrentComment(updatedComment)
    }

    return (
        <form className="commentForm">
            <h2 className="commentForm__title">Create New Comment</h2>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Comment: </label>
                    <textarea type="text" className="form-control-content" name="content" id="content" required autoFocus defaultValue={currentComment.content}
                        onChange={changeCommentState} />
                </div>
            </fieldset>
            

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const comment = {
                        content: currentComment.content,
                        post: parseInt(postId),

                    }

                    // Send POST request to your API
                    createComment(comment)
                        .then(() => navigate("/comments"))
                }}
                className="btn btn-primary button-17">Post Comment</button>
        </form>
    )
}
