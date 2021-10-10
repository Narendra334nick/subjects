import { createStore , combineReducers } from "redux";
import subjectReducer from './Subjects/subjectReducer';
import topicReducer from './Topics/topicReducer';
import notesReducer from './Notes/notesReducer';

const rootReducer = combineReducers({
    subject:subjectReducer,
    topic:topicReducer,
    notes:notesReducer
  })

const store = createStore(rootReducer);

export default store;