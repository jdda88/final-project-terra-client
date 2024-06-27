import { useContext, useEffect, useState } from "react";
import { PlanContext } from "../context/plan.context";
import { AuthContext } from "../context/auth.context";

function PlanDetailsCard({ plan }) {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div className="max-w-3xl rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full object-cover"
        src="https://res.cloudinary.com/dprkq4xne/image/upload/v1719426230/final-project-ironhack/landscape_joebf9.jpg"
        alt="Image"
      />

      {/* Plan Details */}
      <div className="px-6 py-4">
        {/* Country */}
        <div className=" text-xl mb-2">Country: {plan.country}</div>

        {/* Cities */}
        <p className="text-gray-700 text-base mb-2">Cities: {plan.cities}</p>

      

        <div className="mb-2">
          <details>
            <summary>Additional Info:</summary>
            <ul>
              <li>Official Language: {plan.stats.officialLanguage}</li>
              <li>Population: {plan.stats.population}</li>
              <li>Capital: {plan.stats.capitalCity}</li>
              <li>Currency: {plan.stats.currency}</li>
              <li>Power outlet: {plan.stats.powerOutlet}</li>
            </ul>
          </details>
        </div>

        {/* Content */}
        <p className="text-gray-700 text-base mb-2">Content: {plan.content}</p>
      </div>
    </div>
  );
}

export default PlanDetailsCard;
