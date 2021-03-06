import {
  PLANTS_FETCHING,
  PLANTS_FETCHING_SUCCESS,
  PLANT_FORM_INFO,
  TOGGLE_MODAL,
} from '../actionTypes';

const initialState = {
  isLoading: false,
  plantModalIsOpen: false,
  plantList: {},
  plantModalInfo: {
    species: '',
  },
};

function plantReducer(state = initialState, action) {
  switch (action.type) {
    case PLANTS_FETCHING:
      return { ...state, isLoading: true };
    case PLANTS_FETCHING_SUCCESS:
      return { ...state, plantList: action.payload, isLoading: false };
    case TOGGLE_MODAL:
      return { ...state, plantModalIsOpen: !state.plantModalIsOpen };
    case PLANT_FORM_INFO:
      return { ...state, plantModalInfo: { species: action.payload } };
    default:
      return state;
  }
}

export default plantReducer;
