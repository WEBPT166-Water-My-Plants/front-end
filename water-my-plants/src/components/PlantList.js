import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialPlant = {
  id: Date.now(),
  nickname: "",
  species: "",
  schedule: ""
};

const PlantList = ({ plants, updatePlants }) => {
  console.log(plants);
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
    </div>  
  );
};

export default PlantList;