import { ADD_SUBJECT, DELETE_SUBJECT, UPDATE_SUBJECT } from './subjectType';

export const addSubject = (newArr) => {
  return {
    type: ADD_SUBJECT,
		arr:newArr
  };
};

export const deleteSubject = (newArr) => {
  return {
    type: DELETE_SUBJECT,
		arr:newArr
  };
};

export const updateSubject = (newArr) => {
  return {
    type: UPDATE_SUBJECT,
		arr:newArr
  };
};