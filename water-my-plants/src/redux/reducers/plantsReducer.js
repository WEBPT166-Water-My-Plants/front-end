import { PLANTS_FETCHING_SUCCESS, TOGGLE_MODAL } from '../actionTypes';

const initialState = {
  plantModalIsOpen: false,
  plantList: {},
  plantModalInfo: { plant_species: '' },
};

function plantReducer(state = initialState, action) {
  switch (action.type) {
    case PLANTS_FETCHING_SUCCESS:
      return { ...state, plantList: action.payload };
    case TOGGLE_MODAL:
      return { ...state, plantModalIsOpen: !state.plantModalIsOpen };
    case PLANT_FORM_INFO:
      return { ...state, plantModalInfo: action.payload, plantModalInfo: true };
    default:
      return state;
  }
}

export default plantReducer;
