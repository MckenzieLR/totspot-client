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
                    <div className="announcement_section announcement_number">Announcement #{announcement.id}</div>
                    <tr className="announcement_body">
                    <div className="partial_announcement"><div className="announcement_section">{announcement.content}</div></div>
                        <td className="announcement_section"> <div className="announcement_date">Date: </div>{announcement.date}</td>
                        <td className="announcement_section"> <div className="announcement_provider"> Provider: </div>{announcement?.provider?.full_name} </td>
                        <td><center><button className = "edit_announcement button-17" onClick= {() => {
                            navigate({pathname: `/announcements/${announcement.id}/edit`})
                        }}>Edit</button></center></td>

                        <td><center><button className="button-17 delete_announcement" onClick ={evt => {
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
                    <div className="announcement_section announcement_number">Announcement #{announcement.id}</div>
                    <tr className="announcement_body">
                        <div className="partial_announcement">
                        <div className="announcement_section">{announcement.content}</div>
                        </div>
                        <td className="announcement_section"><div className="announcement_date">Date: </div>{announcement.date}</td>
                        <td className="announcement_section"> <div className="announcement_provider"> Provider: </div>{announcement?.provider?.full_name} </td>
                    </tr>
                </tbody>
            )
        }
        
    </table>
    </div>
    </>
    }
}