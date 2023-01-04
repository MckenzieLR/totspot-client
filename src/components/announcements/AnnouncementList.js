import { useEffect, useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { deleteAnnouncement, getAllAnnouncements } from "../../managers/AnnouncementManager"


export const AnnouncementList = () => {
    const [announcements, setAnnouncements] = useState([])
    const navigate = useNavigate()

    const totSpotUser = localStorage.getItem("is_staff")
    const totUser = JSON.parse(totSpotUser)


    useEffect(() => {
        getAllAnnouncements().then(setAnnouncements)
    }, [])

    const updateAnnouncementList = () => {
        getAllAnnouncements().then(setAnnouncements)
    }



    if(totUser) {
    return <div className = "announcement_list"><table className="minimalistBlack">

        {
            announcements?.map(announcement =>
                
                <tbody key={announcement.id} >
                    <tr>
                        <td>Announcement {announcement.id}</td>
                        <td>Provider: {announcement?.provider?.full_name} </td>
                        <td>{announcement.content}</td>
                        <td>Date: {announcement.date}</td>
                        <td><center><button className = "edit_announcement" onClick= {() => {
                            navigate({pathname: `/announcements/${announcement.id}/edit`})
                        }}>Edit</button></center></td>

                        <td><center><button onClick ={evt => {
                            evt.preventDefault()
                            const announcementDel = {
                                id: parseInt(announcement.id)
                            }
                            deleteAnnouncement(announcementDel)
                            .then(() => updateAnnouncementList())
                        }}>Delete</button></center></td>
                    </tr>
                </tbody>
            )
        }
        
    </table>
    <button className = "create_announcement" onClick={() => {
    navigate({ pathname: "/announcements/new" })
}}> New Announcement</button>
    </div>
}

    else {
        return <div className = "announcement_list"><table className="minimalistBlack">

        {
            announcements?.map(announcement =>
                
                <tbody key={announcement.id} >
                    <tr>
                        <td>Announcement {announcement.id}</td>
                        <td>Provider: {announcement?.provider?.full_name} </td>
                        <td>{announcement.content}</td>
                        <td>Date: {announcement.date}</td>
                        
                    </tr>
                </tbody>
            )
        }
        
    </table>
    </div>
    }
}