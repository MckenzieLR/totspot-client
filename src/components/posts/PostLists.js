import { useEffect, useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { getPosts, deletePost} from "../../managers/PostManager"

export const PostList = () => {

    const totSpotUser = localStorage.getItem("is_staff")
    const totUser = JSON.parse(totSpotUser)


    const [posts, setPosts] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        getPosts().then(setPosts)
    }, [])

    const updatePostList = () => {
        getPosts().then(setPosts)
    }



    if (totUser) {
    return <div className = "post_list"><table className="minimalistBlack">

        {
            posts?.map(post =>
                
                <tbody key={post.id} >
                    <tr>
                        <td>Post {post.id}</td>
                        <td> {post?.parent?.parent_name} </td>
                        <td>{post.content}</td>
                        <td>{post.date}</td>
                        <td><center><button className = "new_comment" onClick= {() => {
                            navigate({pathname: `/comments/${post.id}/new`})
                        }}>Add a comment</button></center></td>
                    </tr>
                </tbody>
            )
        }
        
    </table>
    <button className = "post_comments" onClick= {() => {
        navigate({pathname: `/comments`})
    }}>View Comments</button>
    </div>
    }
    else {
    return <div className = "post_list"><table className="minimalistBlack">

    {
        posts?.map(post =>
            
            <tbody key={post.id} >
                <tr>
                    <td>Post {post.id}</td>
                    <td> {post?.parent?.parent_name} </td>
                    <td>{post.content}</td>
                    <td>{post.date}</td>
                    <td><center><button className = "edit_post" onClick= {() => {
                        navigate({pathname: `/posts/${post.id}/edit`})
                    }}>Edit</button></center></td>

                    <td><center><button onClick ={evt => {
                        evt.preventDefault()
                        const postDel = {
                            id: parseInt(post.id)
                        }
                        deletePost(postDel)
                        .then(() => updatePostList())
                    }}>Delete</button></center></td>
                </tr>
            </tbody>
        )
    }
    
</table>
<button className = "create_post" onClick={() => {
    navigate({ pathname: "/posts/new" })
}}> Create a Post</button>
<button className = "post_comments" onClick= {() => {
    navigate({pathname: `/comments`})
}}>View Comments</button>
</div>
    }
}
