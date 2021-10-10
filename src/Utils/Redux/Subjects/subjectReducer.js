import { ADD_SUBJECT, DELETE_SUBJECT, UPDATE_SUBJECT } from './subjectType';

const initialState = {
  subject: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBJECT:
      return {
        ...state,
        subject: action.arr,
      };

    default:
      return state;
  }
};
export default reducer;
