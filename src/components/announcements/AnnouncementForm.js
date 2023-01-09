import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createAnnouncement, getAllAnnouncements } from "../../managers/AnnouncementManager";

export const AnnouncementForm = () => {
  const navigate = useNavigate();
  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [currentAnnouncement, setCurrentAnnouncement] = useState({
    content: "",
    date: "",
  });


  const changeAnnouncementState = (domEvent) => {
    // TODO: Complete the onChange function
    const updatedAnnouncement = { ...currentAnnouncement };
    updatedAnnouncement[domEvent.target.id] = domEvent.target.value;
    setCurrentAnnouncement(updatedAnnouncement);
  };

  return (
    <form className="announcementForm">
        <h2 className="postForm__title">Create New Announcement</h2>
        
        <fieldset>
            <div className="form-group">
                <label className="form-section" htmlFor="content">Announcement Content: </label>
                <textarea type="text" className="form-control-content" name="content" id="content" required autoFocus defaultValue={currentAnnouncement.content}
                    onChange={changeAnnouncementState} />
            </div>
        </fieldset>
        

        <button type="submit"
            onClick={evt => {
                // Prevent form from being submitted
                evt.preventDefault()

                const announcement = {
                    content: currentAnnouncement.content,
                    date: Date.now(),
                }

                // Send POST request to your API
                createAnnouncement(announcement)
                    .then(() => navigate("/home"))
            }}
            className="btn btn-primary button-17">Create Announcement</button>
    </form>
)
}