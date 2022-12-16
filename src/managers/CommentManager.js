export const getComments = () => {
    return fetch("http://localhost:8000/comments", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        }
    })
        .then(response => response.json())
}

export const getComment = (id) => {
    return fetch(`http://localhost:8000/comments/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        }
    })
    .then(response => response.json())
}


export const createComment = (newCommentObject) => {
    return fetch("http://localhost:8000/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        },    
        body: JSON.stringify(newCommentObject)
    })
    .then(response => response.json())
}


export const updateComment = (comment) => {
    return fetch(`http://localhost:8000/comments/${comment.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        },    
        body: JSON.stringify(comment)
    })
}

export const deleteComment = (comment) => {
    return fetch(`http://localhost:8000/comments/${comment.id}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("totuser")}`
    },
    })
}