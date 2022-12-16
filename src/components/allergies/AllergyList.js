import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllAllergies } from "../../managers/AllergyManager";

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
      <h1>Allergy List</h1>
      <section className="allergies">
        {
            allergies.map(allergy => {
          return (
            <div className="allergy">
              <h3 className="allergy_type">Type: {allergy.type}</h3>
            </div>
          );
        })}
        <button
          className="create_allergy"
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
