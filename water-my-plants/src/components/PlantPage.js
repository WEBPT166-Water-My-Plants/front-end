import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import PlantList from "./PlantList";

const PlantPage = () => {
    const [plantList, setPlantList] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('./api/plants')
        .then(res => {
            console.log("This is the initial plant list from API", res.data)
            setPlantList(res.data)
        })
        .catch(err => console.log(err.response));
    }, []);

    return (
        <>
         <PlantList plants={plantList} updatePlants={setPlantList} />
        </>
    )
}

export default PlantPage;