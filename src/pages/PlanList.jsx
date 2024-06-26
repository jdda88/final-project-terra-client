import React, { useContext } from 'react';
import { PlanContext } from "../context/plan.context";
import PlanCard from '../components/PlanCard';
import CreatePlanForm from '../components/CreatePlanForm';
import { Link } from 'react-router-dom';


function PlanList() {
  const { plan } = useContext(PlanContext);
  
  return (

    <div >
      
      {plan ? (
        plan.map((plans) =>
        <div key={plans._id}><PlanCard {...plans} /> </div>)
      ) : (
      <p >Loading...</p>
    )}
    </div>
  );
}

export default PlanList;