export const getAllChildren = () => {
    return fetch("http://localhost:8000/children", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("totuser")}`
        }
    })
    .then(response => response.json())
}

export const getChildById = (id) => {
    return fetch(`http://localhost:8000/children/${id}`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("totuser")}`
        }
    })
    .then(response => response.json())
}

export const editChild = (child) => {
    return fetch (`http://localhost:8000/parents/${child.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        },
        body: JSON.stringify(child)
    })
    .then(response => response.json())
}
export const createChild = (newChildObject) => {
    return fetch("http://localhost:8000/children", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        },    
        body: JSON.stringify(newChildObject)
    })
    .then(response => response.json())
}


export const updateChild = (child) => {
    return fetch(`http://localhost:8000/children/${child.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        },    
        body: JSON.stringify(child)
    })
}

export const deleteChild = (child) => {
    return fetch(`http://localhost:8000/children/${child.id}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("totuser")}`
    },
    })
}