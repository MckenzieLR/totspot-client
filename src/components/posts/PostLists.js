import { useEffect, useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { getPosts, deletePost} from "../../managers/PostManager"
import "./Posts.css"

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
                    <div className="post_section post_number">Post {post.id}</div>
                    <tr  className="post_body">
                    <div className="partial_post">
                        <td className="post_section">{post.content}</td>
                        <td className="post_section"><div className="announcement_date">Date: </div>{post.date}</td>
                        <td className="post_section"><div className="announcement_provider"> By:</div>{post?.parent?.parent_name} </td>
                        <td><center><button className = "new_comment button-17" onClick= {() => {
                            navigate({pathname: `/comments/${post.id}/new`})
                        }}>Add a comment</button></center></td>
                        </div>
                    </tr>
                </tbody>
            )
        }
        
    </table>
    <button className = "post_comments button-51" onClick= {() => {
        navigate({pathname: `/comments`})
    }}>View Comments</button>
    </div>
    }
    else {
    return <div className = "post_list"><table className="minimalistBlack">

    {
        posts?.map(post =>
            
            <tbody key={post.id} >
                    <div className="post_section post_number">Post {post.id}</div>
                    <tr  className="post_body">
                    <div className="partial_post">
                        <td className="post_section">{post.content}</td>
                        <td className="post_section"><div className="announcement_date">Date: </div>{post.date}</td>
                        <td className="post_section"><div className="announcement_provider"> By:</div>{post?.parent?.parent_name} </td>
                    <td><center><button className = "edit_post button-17" onClick= {() => {
                        navigate({pathname: `/posts/${post.id}/edit`})
                    }}>Edit</button></center></td>

                    <td><center><button className = "delete_post button-17" onClick ={evt => {
                        evt.preventDefault()
                        const postDel = {
                            id: parseInt(post.id)
                        }
                        deletePost(postDel)
                        .then(() => updatePostList())
                    }}>Delete</button></center></td>
                    </div>
                </tr>
            </tbody>
        )
    }
    
</table>
<button className = "create_post button-51" onClick={() => {
    navigate({ pathname: "/posts/new" })
}}> Create a Post</button>
<button className = "post_comments button-51" onClick= {() => {
    navigate({pathname: `/comments`})
}}>View Comments</button>
</div>
    }
}
