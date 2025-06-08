import {
  CHANGE_SEARCHFIELD,
  SEARCH_PRODUCTS,
  TOGGLE_VISIBILITY,
  SET_SEARCHING_STATUS,
} from "../constants/actions";

const initialState = {
  invisibleSearchField: true,
  searchField: "",
  status: "idle",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return {
        ...state,
        searchField: action.text,
      };

    case SET_SEARCHING_STATUS:
      return {
        ...state,
        status: action.text,
      };
    // case SEARCH_PRODUCTS:
    //   if (state.searchField && state.invisibleSearchField == false) {
    //     console.log("redirect");

    //   }
    //   return {
    //     ...state,
    //     invisibleSearchField: !state.invisibleSearchField,
    //   };

    case TOGGLE_VISIBILITY:
      return {
        ...state,
        invisibleSearchField: !state.invisibleSearchField,
      };

    default:
      return state;
  }
};
