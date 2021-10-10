import { ADD_TOPIC, DELETE_TOPIC, UPDATE_TOPIC } from './topicType';

const initialState = {
  topic: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOPIC:
      return {
        ...state,
        topic: action.arr,
      };

    default:
      return state;
  }
};
export default reducer;