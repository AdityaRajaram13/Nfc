const initialState = {
  profileData: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE_SUCCESS':
      return {
        ...state,
        profileData: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;