import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsersPlants } from '../redux/actions';
import PlantList from './PlantList';

const PlantPage = () => {
  const [plantList, setPlantList] = useState([]);
  const userId = useSelector((state) => state.user.userData?.id);
  const plants = useSelector((state) => state.plants.plantList);
  const plantsLoading = useSelector((state) => state.plants.isLoading);
  const dispatch = useDispatch();

  const reloadPlants = () => {
    if (userId) updateUsersPlants(dispatch, userId);
    setPlantList(plants);
  };

  return (
    <>
      <PlantList plants={plantList} updatePlants={() => reloadPlants()} />
    </>
  );
};

export default PlantPage;
