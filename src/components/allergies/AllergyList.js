import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllAllergies } from "../../managers/AllergyManager";
import "./Allergies.css"

export const AllergyList = () => {
  const [allergies, setAllergies] = useState([]);
  const navigate = useNavigate()

  const updateAllergyList = () => {
    getAllAllergies().then(setAllergies);
  };

  useEffect(() => {
    updateAllergyList();
  }, []);

  return (
    <>
      <h1 className="allergyHeader">Allergy List</h1>
      <section>
        <div className="allergies">
        {
            allergies.map(allergy => {
          return (
            <div className="allergy">
              <h3 className="allergy_type">Type: {allergy.type}</h3>
            </div>
          );
        })}
        </div>
        <button
          className="create_allergy button-51"
          onClick={() => {
            navigate({ pathname: "/allergies/new" });
          }}
        >
          {" "}
          Create an Allergy 
        </button>
      </section>
    </>
  );
};
