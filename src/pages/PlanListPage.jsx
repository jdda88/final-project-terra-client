import { useContext } from "react";
import PlanCard from "../components/PlanCard";
import { PlanContext } from "../context/plan.context";

function PlanList() {
    const { plans } = useContext(PlanContext);

    return (
        <div className="center gap-4 m-6 flex-wrap">
            {plans ? (
                plans.map((plan) => <PlanCard {...plan} />)
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PlanList;