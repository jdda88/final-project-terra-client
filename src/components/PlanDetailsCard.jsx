import { useContext, useEffect, useState } from "react";
import { PlanContext } from "../context/plan.context";
import { AuthContext } from "../context/auth.context";

function PlanDetailsCard({ plan }) {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
   <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
 
  <img
    className="w-full h-96 object-cover"
    src="https://res.cloudinary.com/dprkq4xne/image/upload/v1719426230/final-project-ironhack/landscape_joebf9.jpg"
    alt="Image"
  />

  {/* Plan Details */}
  <div className="px-6 py-4">
    {/* Country */}
    <div className="font-bold text-xl mb-2">Country: {plan.country}</div>

    {/* Cities */}
    <p className="text-gray-700 text-base mb-2">Cities: {plan.cities}</p>

    {/* Stats - Assuming stats is an object or array */}
    <div className="mb-2">
      <span className="font-bold">Stats:</span>{" "}
      {/* Display stats here based on your data structure */}
    </div>

    {/* Content */}
    <p className="text-gray-700 text-base mb-2">Content: {plan.content}</p>
  </div>
</div>
  );
}

export default PlanDetailsCard;
