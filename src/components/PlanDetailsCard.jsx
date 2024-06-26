import { useContext, useEffect, useState } from "react";
import { PlanContext } from "../context/plan.context";
import { AuthContext } from "../context/auth.context";
import ReviewForm from "./ReviewForm";
import { EditPlanForm} from "./EditPlanForm";


function PlanDetailsCard({ plan }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const {deletePlan} = useContext(PlanContext);
  const {user} = useContext(AuthContext);
  useEffect(()=>{
    console.log(user)
  }, [user])
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  
        <div className="flex flex-col p-4 leading-normal">
          <p className="mb-3 font-normal text-black">
            country: {plan.country} <br />
            cities: {plan.cities} <br />
            stats: <br />
            {/* official language: {plan.stats.officialLanguage}<br/> */}
            
            <br />
            images: {plan.images} <br />
            content: {plan.content} <br />
          </p>
          {user && user.isAdmin && (
            <>
            {" "}

            {/* UPDATE */}
            <button
            className="bg-customGreen text-white rounded w-24 h-9"
            onClick={() => setToggleEdit(!toggleEdit)}
            > edit 
            </button>

            {/* DELETE */}
            <button
            className="bg-customGreen text-white rounded w-24 h-9"
            onClick={() => deletePlan(plan._id)}
            >
              Delete
              </button>
              </>

          )}
      </div>
    {toggleEdit && (
    <EditPlanForm toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} />
    )} 
    </div>
  );
}

export default PlanDetailsCard;