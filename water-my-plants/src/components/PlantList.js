import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import "./PlantList.css";

const initialPlant = {
  nickame: 'Pink Pampas Grass',
  species: 'Cortaderia selloana',
  h2oFrequency: 'Daily'
};

const PlantList = ({ plants, updatePlants }) => {
  const [plant, setPlant] = useState(initialPlant);
  const history = useHistory();
  console.log("This is plants", plant);

  const editPlant = plant => {
    setPlant(plant);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/users/0/plants`, plant)
      .then(res => {
        console.log("This is saveEdit", res.data)
        updatePlants([...plants, res.data]);
        history.push("/plants/reload")
      })
      .catch(err => console.log(err.response))
  };

  const deletePlant = plant => {
    axiosWithAuth()
      .delete(`/api/users/0/plants, ${plant.id}`)
      .then(res => {
          console.log("This is delete plant", res.data)
          history.push("/plants/reload");
      })
      .catch(err => console.log(err.response))
  };

  return (
      <div className='plantContainer'>
        <div className='plantCard'>
          <p>{plant.nickame}</p>
          <p>{plant.species}</p>
          <p>{plant.h2oFrequency}</p>
          <button>Add</button>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </div>
      );
};

export default PlantList;