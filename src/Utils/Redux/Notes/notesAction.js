import { ADD_NOTES, DELETE_NOTES, UPDATE_NOTES } from './notesType';

export const addNote = (newArr) => {
  return {
    type: ADD_NOTES,
    arr: newArr,
  };
};
