import {
  FETCH_BANKS_BEGIN,
  FETCH_BANKS_SUCCESS,
  FETCH_BANKS_FAILURE
} from './../actions/banks';

// reducer - this could be in another file.
const initialState = { banks: [], loading: false };

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BANKS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
      };

    case FETCH_BANKS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        banks: action.banks
      };

    case FETCH_BANKS_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
