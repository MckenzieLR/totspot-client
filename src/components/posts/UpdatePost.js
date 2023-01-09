import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { updatePost, getPost } from '../../managers/PostManager.js'
import { useParams } from "react-router-dom"


export const PostEdit = () => {
    const navigate = useNavigate()
    const {postId} = useParams()
     /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentPost, setCurrentPost] = useState({
        id:0,
        content: "",
    })

    useEffect(() => {
        getPost(postId)
        .then(setCurrentPost)
    }, [])


    const changePostState = (domEvent) => {
        // TODO: Complete the onChange function
        const copy = {...currentPost}
        const modify = domEvent.target.id
        copy[modify] = domEvent.target.value    
        setCurrentPost(copy)
    }

    return (
        <form className="postForm">
            <h2 className="postForm__title">Edit Post</h2>

            {/* TODO: create the rest of the input fields */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Post Content: </label>
                    <textarea type="text" className="form-control-content" id="content" required autoFocus defaultValue={currentPost.content}
                        onChange={changePostState} />
                </div>
            </fieldset>

            <button type="update"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const post = {
                        id: currentPost.id,
                        content: currentPost.content,
                        parent: currentPost.parent
                    }

                    // Send POST request to your API
                    updatePost(post)
                        .then(() => navigate("/posts"))
                }}
                className="btn btn-primary button-17">Update Post</button>
        </form>
    )
}

