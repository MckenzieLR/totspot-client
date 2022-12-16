import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { createAllergy } from "../../managers/AllergyManager"



export const AllergyForm = () => {
    const navigate = useNavigate()


    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentAllergy, setCurrentAllergy] = useState({
        type: ""

    })



    const changeAllergyState = (domEvent) => {
        // TODO: Complete the onChange function
        const updatedAllergy = {...currentAllergy }
        updatedAllergy[domEvent.target.id] = domEvent.target.value
        setCurrentAllergy(updatedAllergy)
    }

    return (
        <form className="allergyForm">
            <h2 className="allergyForm__title">Create New Allergy</h2>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="type">Type: </label>
                    <input type="text" className="form-control-content" name="type" id="type" required autoFocus defaultValue={currentAllergy.type}
                        onChange={changeAllergyState}/>
                </div>
            </fieldset>
            

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const allergy = {
                        type: currentAllergy.type

                    }

                    // Send POST request to your API
                    createAllergy(allergy)
                        .then(() => navigate("/allergies"))
                }}
                className="btn btn-primary">Create Allergy</button>
        </form>
    )
}
