import React from "react";

const Vignettes = ({ src }) => {
  console.log(src.images);
  return (
    <div className="listeImage">
      {src.map((linkPicture) => {
        return (
          <>
            <img className="vignetteFilm" alt="null" src={linkPicture}></img>
          </>
        );
      })}
    </div>
  );
};

export default Vignettes;
