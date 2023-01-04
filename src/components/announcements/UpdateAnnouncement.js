import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom"
import { editAnnouncement, getAnnouncementById } from "../../managers/AnnouncementManager"


export const AnnouncementEdit = () => {
    const navigate = useNavigate()
    const {announcementId} = useParams()
     /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentAnnouncement, setCurrentAnnouncement] = useState({
        id:0,
        content: "",
    })

    useEffect(() => {
        getAnnouncementById(announcementId)
        .then(setCurrentAnnouncement)
    }, [])


    const changeAnnouncementState = (domEvent) => {
        // TODO: Complete the onChange function
        const copy = {...currentAnnouncement}
        const modify = domEvent.target.id
        copy[modify] = domEvent.target.value    
        setCurrentAnnouncement(copy)
    }

    return (
        <form className="announcementForm">
            <h2 className="postForm__title">Edit Announcement</h2>

            {/* TODO: create the rest of the input fields */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content"> Content: </label>
                    <textarea type="text" className="form-control-content" id="content" required autoFocus defaultValue={currentAnnouncement.content}
                        onChange={changeAnnouncementState} />
                </div>
            </fieldset>

            <button type="update"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const announcement = {
                        id: currentAnnouncement.id,
                        content: currentAnnouncement.content,
                        provider: currentAnnouncement.provider
                    }

                    // Send POST request to your API
                    editAnnouncement(announcement)
                        .then(() => navigate("/home"))
                }}
                className="btn btn-primary">Update Announcement</button>
        </form>
    )
}

