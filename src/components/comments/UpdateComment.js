import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

import { useParams } from "react-router-dom"
import { getComment, updateComment } from "../../managers/CommentManager"


export const CommentEdit = () => {
    const navigate = useNavigate()
    const {commentId} = useParams()
     /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentComment, setCurrentComment] = useState({
        id:0,
        content: "",
    })

    useEffect(() => {
        getComment(commentId)
        .then(setCurrentComment)
    }, [])


    const changeCommentState = (domEvent) => {
        // TODO: Complete the onChange function
        const copy = {...currentComment}
        const modify = domEvent.target.id
        copy[modify] = domEvent.target.value    
        setCurrentComment(copy)
    }

    return (
        <form className="postForm">
            <h2 className="postForm__title">Edit Comment</h2>

            {/* TODO: create the rest of the input fields */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Comment: </label>
                    <textarea type="text" className="form-control-content" id="content" required autoFocus defaultValue={currentComment.content}
                        onChange={changeCommentState} />
                </div>
            </fieldset>

            <button type="update"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const comment = {
                        id: currentComment.id,
                        content: currentComment.content,
                        post: currentComment.post
                    }

                    // Send POST request to your API
                    updateComment(comment)
                        .then(() => navigate("/comments"))
                }}
                className="btn btn-primary">Update Comment</button>
        </form>
    )
}

