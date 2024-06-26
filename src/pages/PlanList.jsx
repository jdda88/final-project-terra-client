import React, { useContext } from 'react';
import { PlanContext } from "../context/plan.context";
import PlanCard from '../components/PlanCard';


function PlanList() {
  const { plan } = useContext(PlanContext);
  
  return (
    <div>
      {plan ? (
        plan.map((plan) => <PlanCard {...plan} />)
      ) : (
      <p>Loading...</p>
    )}
    </div>
  );
}

export default PlanList;