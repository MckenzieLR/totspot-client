export const getAllProviders = () => {
    return fetch("http://localhost:8000/providers", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("totuser")}`
        }
    })
    .then(response => response.json())
}

export const getProviderById = (id) => {
    return fetch(`http://localhost:8000/providers/${id}`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("totuser")}`
        }
    })
    .then(response => response.json())
}

export const editProvider = (provider) => {
    return fetch (`http://localhost:8000/parents/${provider.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        },
        body: JSON.stringify(provider)
    })
    .then(response => response.json())
}
