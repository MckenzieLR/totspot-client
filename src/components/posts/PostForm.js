import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getParentById } from "../../managers/ParentManager.js"
import { createPost } from '../../managers/PostManager.js'


export const PostForm = () => {
    const navigate = useNavigate()


    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentPost, setCurrentPost] = useState({
        content: "",
        date: "",

    })



    const changePostState = (domEvent) => {
        // TODO: Complete the onChange function
        const updatedPost = {...currentPost }
        updatedPost[domEvent.target.id] = domEvent.target.value
        setCurrentPost(updatedPost)
    }

    return (
        <form className="postForm">
            <h2 className="postForm__title">Create New Post</h2>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Post Content: </label>
                    <textarea type="text" className="form-control-content" name="content" id="content" required autoFocus defaultValue={currentPost.content}
                        onChange={changePostState} />
                </div>
            </fieldset>
            

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const post = {
                        content: currentPost.content,
                        date: Date.now(),
                    }

                    // Send POST request to your API
                    createPost(post)
                        .then(() => navigate("/posts"))
                }}
                className="btn btn-primary button-17">Create Post</button>
        </form>
    )
}
