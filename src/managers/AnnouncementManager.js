export const getAllAnnouncements = () => {
    return fetch("http://localhost:8000/announcements", {
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

export const getAnnouncementById = (id) => {
    return fetch(`http://localhost:8000/announcements/${id}`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("totuser")}`
        }
    })
    .then(response => response.json())
}

export const editAnnouncement = (announcement) => {
    return fetch (`http://localhost:8000/announcements/${announcement.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        },
        body: JSON.stringify(announcement)
    })
}

export const createAnnouncement = (newAnnouncementObject) => {
    return fetch("http://localhost:8000/announcements", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("totuser")}`
        },    
        body: JSON.stringify(newAnnouncementObject)
    })
    .then(response => response.json())
}

export const deleteAnnouncement = (announcement) => {
    return fetch(`http://localhost:8000/announcements/${announcement.id}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("totuser")}`
    },
    })
}