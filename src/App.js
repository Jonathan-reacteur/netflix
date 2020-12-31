import "./Reset.css";
import "./variable.css";
import "./App.css";
import React from "react";
import Article from "./components/Article.js";
const json = require("./data/films.json");

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <header>NETFLIX</header>
          <section>
            {json.map((film) => {
              return (
                <>
                  <Article genre={film.category} image={film.images}></Article>
                </>
              );
            })}
          </section>
          <footer></footer>
        </div>
      </div>
    </>
  );
}

export default App;
