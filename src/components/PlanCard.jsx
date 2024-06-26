import React from "react";
import { Link } from "react-router-dom"; 

function PlanCard({ title, _id, image }) {
  return (
    <div className="flex flex-row flex-wrap">
      <div className="flex flex-col m-5 p-5 w-[20vw]">
        <Link to={`/plan/${_id}`}>
          <div className="flex flex-col ">
            <img
              className="h-[25vh] w-[20vw] bg-white"
              // border-stone-300 border-x-4 border-y-4
              src="https://res.cloudinary.com/dprkq4xne/image/upload/v1719238596/final-project-ironhack/terra-travel-solid-black_rxxhy8.png"
              alt={title}
            />
            <h4 className="m-3 text-center">{title}</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PlanCard;


{
  /* <div
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="/images/blog/image-1.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>{title}</p> 
        </h5 >
        <Link
          to={`$/plan/${_id}`}
          className="font-normal text-gray-700 dark:text-gray-400"
        >
          <span className="text-black">leters here</span>
        </Link>
      </div> */
}
