import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialPlant = {
  name: "test",
  species: "test",
  schedule: "test"
};

const PlantList = ({ plants, updatePlants }) => {
  console.log("This is plants", plants);
  const [editing, setEditing] = useState(false);
  const [plantToEdit, setPlantToEdit] = useState(initialPlant);
  const history = useHistory();

  const editPlant = plant => {
    setEditing(true);
    setPlantToEdit(plant);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`API`, plantToEdit)
      .then(res => {
        console.log("This is saveEdit", res.data)
        setEditing(false);
        updatePlants([...plants, res.data]);
        history.push("/plants/reload")
      })
      .catch(err => console.log(err.response))
  };

  const deletePlant = plant => {
    axiosWithAuth()
      .delete(`API`)
      .then(res => {
          console.log("This is delete plant", res.data)
          history.push("/plants/reload");
      })
      .catch(err => console.log(err.response))
  };

  return (
    <div className="plants-wrap">
      <p>These are the Plants</p>
      <ul>
          {plants.map(plant => (
              <li key={plant.name} onClick={() => editPlant(plant)}>
                  <span>
                      <span className="delete" onClick={e => {
                          e.stopPropagation();
                          deletePlant(plant)
                      }}>
                    </span>
                  </span>
              </li>
          ))}
      </ul>
      {editing && (
          <form onSubmit={saveEdit}>
              <legend>edit plant</legend>
              <label>
                  plant name:
                  <input
                    onChange={e =>
                        setPlantToEdit({...plantToEdit, name: e.target.value})
                    }
                    value={plantToEdit.name}
                    />
              </label>
              <label>
                    species:
                    <input
                    onChange={e =>
                        setPlantToEdit({...plantToEdit, species: e.target.value})
                    }
                    value={plantToEdit.species}
                    />
              </label>
              <label>
                    schedule:
                    <input
                    onChange={e =>
                        setPlantToEdit({...plantToEdit, schedule: e.target.value})
                    }
                    value={plantToEdit.schedule}
                    />
              </label>
          </form>
      )}
    </div>  
  );
};

export default PlantList;