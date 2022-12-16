export const getAllParents = () => {
    return fetch("http://localhost:8000/parents", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("totuser")}`
        }
    })
    .then(response => response.json())
}

export const getParentById = (id) => {
    return fetch(`http://localhost:8000/parents/${id}`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("totuser")}`
        }
    })
    .then(response => response.json())
}

export const editParent = (parent) => {
    return fetch (`http://localhost:8000/parents/${parent.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        },
        body: JSON.stringify(parent)
    })
    .then(response => response.json())
}
