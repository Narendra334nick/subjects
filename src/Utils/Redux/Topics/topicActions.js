import { ADD_TOPIC, DELETE_TOPIC, UPDATE_TOPIC } from './topicType';

export const addTopic = (newArr) => {
  return {
    type: ADD_TOPIC,
		arr:newArr
  };
};