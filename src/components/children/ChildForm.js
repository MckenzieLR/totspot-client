import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllAllergies } from "../../managers/AllergyManager";
import { createChild } from "../../managers/ChildManager";

export const ChildForm = () => {
  const navigate = useNavigate();
  const [allergies, setAllergies] = useState([]);
  const [chosenAllergies, setChosen] = useState(new Set())

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [currentChild, setCurrentChild] = useState({
    first_name: "",
    last_name: "",
    medications: "",
    age: 0,
    allergies: 0,
    details: "",
  });

  useEffect(() => {
    getAllAllergies().then(setAllergies);
  }, []);

  const changeChildState = (domEvent) => {
    // TODO: Complete the onChange function
    const updatedChild = { ...currentChild };
    updatedChild[domEvent.target.id] = domEvent.target.value;
    setCurrentChild(updatedChild);
  };

  return (
    <form className="childForm">
      <h2 className="childForm__title">Create New Child</h2>

      <fieldset>
        <div className="form-group">
          <label htmlFor="first_name">First Name: </label>
          <input
            type="text"
            className="form-control-content"
            name="first_name"
            id="first_name"
            required
            autoFocus
            defaultValue={currentChild.first_name}
            onChange={changeChildState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="last_name">Last Name: </label>
          <input
            type="text"
            className="form-control-content"
            name="last_name"
            id="last_name"
            required
            autoFocus
            defaultValue={currentChild.last_name}
            onChange={changeChildState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="medications">Medications: </label>
          <textarea
            type="text"
            className="form-control-content"
            name="medications"
            id="medications"
            required
            autoFocus
            defaultValue={currentChild.medications}
            onChange={changeChildState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            className="form-control-content"
            name="age"
            id="age"
            required
            autoFocus
            defaultValue={currentChild.age}
            onChange={changeChildState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="allergies">Allergies: </label>
          {allergies.map(allergy => {
              return <div>
                <input
                  name="allergy"
                  className="eachAllergy"
                  onChange={
                    (evt) => {
                        const copy = new Set(chosenAllergies)
                        if (evt.target.checked) {
                            copy.add(allergy.id)
                        }
                        else {
                            copy.delete(allergy.id)
                        }
                        setChosen(copy)
                    }
                }
                  type="checkbox"
                /> 
                {allergy.type}
              </div>
          })}
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="details">Details: </label>
          <textarea
            type="text"
            className="form-control-content"
            name="details"
            id="details"
            required
            autoFocus
            defaultValue={currentChild.details}
            onChange={changeChildState}
          />
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          // Prevent form from being submitted
          evt.preventDefault();

          const child = {
            firstName: currentChild.first_name,
            lastName: currentChild.last_name,
            medications: currentChild.medications,
            age: parseInt(currentChild.age),
            allergies: Array.from(chosenAllergies),
            details: currentChild.details,
          };

          // Send POST request to your API
          createChild(child).then(() => navigate("/children"));
        }}
        className="btn btn-primary"
      >
        Create
      </button>
    </form>
  );
};
