import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";

const Home = ({ jsonData, getAllData }) => {
  console.log(jsonData);
  useEffect(() => {
    getAllData();
  }, [getAllData]);
  return <div>hallo</div>;
};

const stateReducer = (state) => {
  return {
    jsonData: state.jsonData,
  };
};

const dispatchReducer = (dispatch) => ({
  getAllData: () =>
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) =>
      dispatch({
        type: "JSON",
        value: response.data,
      })
    ),
});

export default connect(stateReducer, dispatchReducer)(Home);
