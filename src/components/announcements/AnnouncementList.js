import { useEffect, useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { deleteAnnouncement, getAllAnnouncements } from "../../managers/AnnouncementManager"
import "./Announcements.css"
import borcelle from "../imgs/borcelle.png"

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
    return <>
        <h1 className="announcementHeader"><div className="nav-image">
                    <img className="nav_image" src={borcelle} alt="ABC Blocks image "/>
                    </div> Welcome to Tot Spot</h1>
                    <h2 className="announcementSub">Weekly Announcements </h2>
        <div className = "announcement_list"><table className="minimalistBlack">

        {
            announcements?.map(announcement =>
                
                <tbody key={announcement.id} >
                    <tr className="announcement_body">
                        <td className="announcement_section">Announcement #{announcement.id}</td>
                        <td className="announcement_section">{announcement.content}</td>
                        <td className="announcement_section">Date: {announcement.date}</td>
                        <td className="announcement_section">Provider: {announcement?.provider?.full_name} </td>
                        <td><center><button className = "edit_announcement button-17" onClick= {() => {
                            navigate({pathname: `/announcements/${announcement.id}/edit`})
                        }}>Edit</button></center></td>

                        <td><center><button className="button-17" onClick ={evt => {
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
    <button className = "create_announcement button-51" onClick={() => {
    navigate({ pathname: "/announcements/new" })
}}> New Announcement</button>
    </div>
    </>
}

    else {
        return <>
        <h1 className="announcementHeader"><div className="nav-image">
                    <img className="nav_image" src={borcelle} alt="ABC Blocks image "/>
                    </div> Welcome to Tot Spot</h1>
                    <h2 className="announcementSub">Weekly Announcements </h2>
        <div className = "announcement_list"><table className="minimalistBlack">

        {
            announcements?.map(announcement =>
                
                <tbody key={announcement.id} >
                    <tr className="announcement_body">
                        <td className="announcement_section">Announcement {announcement.id}</td>
                        <td className="announcement_section">{announcement.content}</td>
                        <td className="announcement_section">Date: {announcement.date}</td>
                        <td className="announcement_section">Provider: {announcement?.provider?.full_name} </td>
                    </tr>
                </tbody>
            )
        }
        
    </table>
    </div>
    </>
    }
}