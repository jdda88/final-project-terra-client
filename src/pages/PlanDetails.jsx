import { useContext, useState, useEffect, useRef } from "react";
import { PlanContext } from "../context/plan.context";
import { AuthContext } from "../context/auth.context";
import { useParams } from "react-router-dom";
import PlanDetailsCard from "../components/PlanDetailsCard";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";
import EditPlanForm from "../components/EditPlanForm";

function PlanDetails() {
  const [selectedPlan, setPlans] = useState(null);
  const [toggleEdit, setToggleEdit] = useState(false);
  const { deletePlan } = useContext(PlanContext);
  const { plan, getAllPlans } = useContext(PlanContext);
  const { planId } = useParams();
  const { user } = useContext(AuthContext);
  const targetRef = useRef();
  const scrollToSection = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
      {!user ? (
        <p></p>
      ) : (
        <button
          className="bg-customGreen text-white rounded w-40 h-9 hover:bg-customGreenHover transition transform hover:scale-105 hover:shadow-xl"
          type="button"
          onClick={scrollToSection}
        >
          Leave a comment!
        </button>
      )}
      {selectedPlan && selectedPlan.reviews ? (
        selectedPlan.reviews.map((review) => (
          <ReviewCard key={review._id} review={review} user={user} />
        ))
      ) : (
        <p>No reviews yet</p>
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
              className="bg-customGreen text-white rounded w-24 h-9 hover:bg-customGreenHover transition transform hover:scale-105 hover:shadow-xl"
              onClick={() => setToggleEdit(!toggleEdit)}
            >
              {" "}
              Edit
            </button>
            {/* DELETE */}
            <button
              className="bg-customGreen text-white rounded w-24 h-9 hover:bg-customGreenHover transition transform hover:scale-105 hover:shadow-xl"
              onClick={() => deletePlan(selectedPlan._id)}
            >
              Delete
            </button>
          </div>
        </>
      )}

      {!user ? (
        <p></p>
      ) : (
        <div ref={targetRef}>
          {" "}
          <ReviewForm />{" "}
        </div>
      )}
    </div>
  );
}

export default PlanDetails;
