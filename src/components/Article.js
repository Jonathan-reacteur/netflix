import React from "react";
import Vignettes from "./Vignettes.js";

const Article = ({ genre, image }) => {
  //   let listImage = {};
  //   json.forEach((element) => {
  //     if (element.category === genre) {
  //       listImage = element;
  //     }
  //   });

  ///////////
  ///////////
  ///////////

  return (
    <div className="groupeGenre">
      <div className="titre">{genre}</div>
      <>
        <Vignettes src={image}></Vignettes>
      </>
    </div>
  );
};

export default Article;
