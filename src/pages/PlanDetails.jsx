import { useContext, useState, useEffect } from "react";
import { PlanContext } from "../context/plan.context";
import { AuthContext } from "../context/auth.context";
import { useParams } from "react-router-dom";
import { Link } from "react-feather";
import PlanDetailsCard from "../components/PlanDetailsCard";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";
import { Navbar } from "flowbite-react";
import EditPlanForm from "../components/EditPlanForm";

function PlanDetails() {
  const [selectedPlan, setPlans] = useState(null);
  const [toggleEdit, setToggleEdit] = useState(false);
  const { deletePlan } = useContext(PlanContext);
  const { plan, getAllPlans } = useContext(PlanContext);
  const { planId } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    plan && setPlans(plan.find((curr) => curr._id === planId));
  }, [plan]);

  useEffect(() => {
    console.log("this the user ===>", user);
  }, []);

  return (
    <div className="center flex-col gap-6 mb-8">
      {selectedPlan ? (
        <PlanDetailsCard plan={selectedPlan} />
      ) : (
        <p>"Loading"</p>
      )}
      {toggleEdit && (
        <EditPlanForm toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} />
      )}
      {user && user.isAdmin && (
        <>
          {" "}
          {/* UPDATE */}
          <div className="flex flex-row space-x-4">
          <button
            className="bg-customGreen text-white rounded w-24 h-9"
            onClick={() => setToggleEdit(!toggleEdit)}
          >
            {" "}
            Edit
          </button>
          {/* DELETE */}
          <button
            className="bg-customGreen text-white rounded w-24 h-9"
            onClick={() => deletePlan(selectedPlan._id)}
          >
            Delete
          </button></div>
        </>
      )}
      {!user ? <p></p> : <ReviewForm />}

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
