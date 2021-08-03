const initialstate = {
  jsonData: [],
};

const Reducer = (state = initialstate, action) => {
  if (action.type === "JSON") {
    return {
      ...state,
      jsonData: action.value,
    };
  }
  return state;
};

export default Reducer;
