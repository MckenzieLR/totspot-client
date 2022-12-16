import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getAllAllergies } from "../../managers/AllergyManager"
import { getChildById } from "../../managers/ChildManager"


export const ChildDetails = () => {
    const [ child, setChild] = useState({})
    const [allergies, setAllergies] = useState([]);

    const { childId } = useParams()

    useEffect(
        () => {
            getChildById(childId)
                .then((data) => {
                    setChild(data)
                })
        },
        [childId]
    )

    useEffect(() => {
        getAllAllergies().then(setAllergies);
      }, []);

    return (
        <>
            <h1>Child Details</h1>
            <section className="child">
                <h3 className="childName">Full Name: {child.first_name} {child.last_name}</h3>
            {
                child?.allergies?.map(allergy => {
                    return <div className="childName"> Allergy: {allergy.type}</div>
                })
            }
                <div className="medications">Medications: {child.medications}</div>
                <div className="age">Age: {child.age}</div>
                <div className="details">Details: {child.details}</div>
                <div className="parent">Parent: <Link to={`/parents/${child?.parent?.id}`}>{child?.parent?.parent_name}</Link></div>
            </section>
        </>
    )
}
