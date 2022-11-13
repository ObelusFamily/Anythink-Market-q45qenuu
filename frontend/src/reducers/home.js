import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  HOME_PAGE_SEARCH,
} from "../constants/actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        tags: action.payload[0].tags,
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case HOME_PAGE_SEARCH:
      return {
        ...state,
        searchQuery: action.searchQuery,
      };
    default:
      return state;
  }
};

export default reducer;
