import axios from 'axios';

const LOAD = 'GREETING/LOAD';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export const loadGreeting = (_) => (dispatch) => axios.get(`/api/v1/greetings`).then(
  (response) => {
    dispatch({ type: LOAD, payload: response.data });
  },
);