import React, { useContext } from "react";
import { PlanContext } from "../context/plan.context";
import PlanCard from "../components/PlanCard";
import CreatePlanForm from "../components/CreatePlanForm";
import { Link } from "react-router-dom";

function PlanList() {
  const { plan } = useContext(PlanContext);

  return (
    <div className="flex flex-row flex-wrap center space-x-3.5 ">
      {plan ? (
        plan.map((plans) => (
          
          <div key={plans._id} className="font-light font-manrope">
            <PlanCard {...plans} />{" "}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PlanList;
