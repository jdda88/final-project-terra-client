import React, { useContext } from 'react';
import { PlanContext } from "../context/plan.context";
import PlanCard from '../components/PlanCard';


function PlanList() {
  const { plans } = useContext(PlanContext);
  
  return (
    <div>
      {plans ? (
        plans.map((plan) => <PlanCard {...plan} />)
      ) : (
      <p>Loading...</p>
    )}
    </div>
  );
}

export default PlanList;