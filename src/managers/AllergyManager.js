export const getAllAllergies = () => {
    return fetch("http://localhost:8000/allergies", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("totuser")}`
        },
        body: JSON.stringify()
    })
    .then(response => response.json())
}

export const getAllergyById = (id) => {
    return fetch(`http://localhost:8000/allergies/${id}`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("totuser")}`
        }
    })
    .then(response => response.json())
}

export const editAllergy = (allergy) => {
    return fetch (`http://localhost:8000/allergies/${allergy.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        },
        body: JSON.stringify(allergy)
    })
    .then(response => response.json())
}

export const createAllergy = (newAllergyObject) => {
    return fetch("http://localhost:8000/allergies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        },    
        body: JSON.stringify(newAllergyObject)
    })
    .then(response => response.json())
}
