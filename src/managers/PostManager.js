export const getPosts = () => {
    return fetch("http://localhost:8000/posts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        }
    })
        .then(response => response.json())
}

export const getPost = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        }
    })
    .then(response => response.json())
}


export const createPost = (newPostObject) => {
    return fetch("http://localhost:8000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        },    
        body: JSON.stringify(newPostObject)
    })
    .then(response => response.json())
}


export const updatePost = (post) => {
    return fetch(`http://localhost:8000/posts/${post.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        },    
        body: JSON.stringify(post)
    })
}

export const deletePost = (post) => {
    return fetch(`http://localhost:8000/posts/${post.id}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("totuser")}`
    },
    })
}