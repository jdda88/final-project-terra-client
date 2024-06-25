import { useContext, useState, useEffect } from "react";
import { PlanContext } from "../context/plan.context";
import { AuthContext } from "../context/auth.context";
import { useParams } from "react-router-dom";
import { Link } from "react-feather";
import PlanDetailsCard from "../components/PlanDetailsCard";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";
import { Navbar } from "flowbite-react";


function PlanDetails() {
  const [selectedPlan, setPlans] = useState(null);
  const { plan, getAllPlans } = useContext(PlanContext);
  const { planId } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    plan && setPlans(plan.find((curr) => curr._id === planId));
   }, [plan]);

  return (
    <div className="center flex-col gap-6 mb-8">
      <h2 className="text-3xl font-semibold m-6">{}</h2>
      {selectedPlan ? <PlanDetailsCard plan={selectedPlan} /> : <p>"Loading"</p>}
      {!user ? (
        <p>
        Log in to read
        </p>
      ) : (
        <ReviewForm />
      )}

      {selectedPlan && selectedPlan.reviews ? (
        selectedPlan.reviews.map((review) => (
          <ReviewCard key={review._id} review={review} user={user} />
        ))
      ) : (
        <p>No reviews yet</p>
      )}

    </div>
  );
}

export default PlanDetails;