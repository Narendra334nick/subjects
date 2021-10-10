import { ADD_NOTES, DELETE_NOTES, UPDATE_NOTES } from './notesType';

const initialState = {
  notes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTES:
      return {
        ...state,
        notes: action.arr,
      };

    default:
      return state;
  }
};
export default reducer;