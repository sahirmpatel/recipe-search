import React from "react";

const MainContent = ({
  loader,
  title,
  calories,
  image,
  ingredients,
  url,
  source,
}) => {
  console.log("th", ingredients);
  return (
    <>
      <div class="col-md-4 foodcard text-center d-flex">
        <div class="col justify-content-around px-0">
          <img class="img-fluid" src={image} alt="" />
          <div class="row stubborn justify-content-around pt-3">
            <p>
              <i class="fas fa-heartbeat"></i> {Math.round(calories)} Calories
            </p>
          </div>
          <h4>{title}</h4>

          <hr />
          <div className="limit">
            <ul>
              {ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
            </ul>
          </div>
          <a target="_blank" href={url}>
            <button class="my-3">View More</button>
          </a>
          <p id="by">by {source}</p>
        </div>
      </div>
    </>
  );
};

export default MainContent;
