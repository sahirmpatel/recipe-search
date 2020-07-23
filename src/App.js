import React, { useState, useEffect } from "react";
import axios from "axios";
import MainContent from "./MainContent";
import "./App.css";
import { Form, Button } from "react-bootstrap";

const App = () => {
  const REACT_APP_API_KEY = "9b7aaa12383baaa6233a79cfce41529b";
  const REACT_APP_API_ID = "98c8f2c3";
  const [query, setQuery] = useState("Cookies");
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchingRecipes = () => {
      axios
        .get(
          `https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_API_ID}&app_key=${REACT_APP_API_KEY}`
        )
        .then((response) => {
          setRecipes(response.data.hits);
        });
      setLoader(true);
    };
    fetchingRecipes();
    console.log("the data recieved", recipes);
  }, [query]);
  console.log("entire data", recipes);
  const changeField = (e) => {
    setSearch(e.target.value);
  };

  const goSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <div className="header text-center mb-md-5">
        <div className="shade">
          <h1 className="py-5 ">Recipe Search</h1>
          <form onSubmit={goSearch}>
            <div className="row pb-5 justify-content-center ">
              <div className="col-6">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Search for dishes.."
                  value={search}
                  onChange={changeField}
                />
              </div>
              <div className="col-2">
                <Button
                  style={{
                    backgroundColor: "#ff8ba7",
                    border: "0px solid black",
                    color: "black",
                  }}
                  size="lg"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mx-md-4 justify-content-around">
          {recipes.map((recipe) => (
            <MainContent
              loader={loader}
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              ingredients={recipe.recipe.ingredients}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              url={recipe.recipe.url}
              source={recipe.recipe.source}
              time={recipe.recipe.totalTime}
            />
          ))}
        </div>
      </div>
      <footer>
        <center>
          <small>
            by <a href="https://sahirmpatel.me"> Sahir</a>
          </small>
        </center>
      </footer>
    </div>
  );
};
export default App;
