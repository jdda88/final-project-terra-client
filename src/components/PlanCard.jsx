import React from "react";
import { Link } from "react-router-dom";

function PlanCard({ title, _id, images }) {
  return (
    <div className="flex flex-col">
      <Link to={`/plan/${_id}`}>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg h-80 transition transform hover:scale-105 hover:shadow-xl">
          <img
            className="h-56 w-full object-cover"
            src={images[0] || "https://res.cloudinary.com/dprkq4xne/image/upload/v1719426230/final-project-ironhack/landscape_joebf9.jpg"}
            alt={title}
          />
          <div className="p-4">
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PlanCard;
