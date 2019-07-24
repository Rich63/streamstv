// THIS IS SAMPLE CODE TO DEMO KEY_INTERPOLATION_SYNTAX

const EDIT_STREAM = null;

// Array-based approach
const streamReducerArrayBased = (state=[], action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return state.map(stream => {
        if (stream.id === action.payload.id) {
          return action.payload;
        } else {
          return stream;
        }
      });
    default:
      return state;
  }
};

// Object-based approach
const streamReducerObjectBased = (state={}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      // const newState = { ...state };
      // newState[action.payload.id] = action.payload;
      // return newState;
      // Below return is the same as above but es2015 syntax
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }  
};