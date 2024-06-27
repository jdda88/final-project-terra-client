import React, { useContext } from "react";
import { PlanContext } from "../context/plan.context";
import PlanCard from "../components/PlanCard";
import Masonry from "react-masonry-css";

function PlanList() {
  const { plan } = useContext(PlanContext);

  const breakpointColumnsObj = {
    default: 4,
    1100: 2,
    700: 1,
  };

  return (
    <div>
      <div className="p-8 ">
        {plan ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-full justify-center"
            columnClassName="my-5 pl-4"
          >
            {plan.map((plans) => (
              <div key={plans._id} className="mb-4">
                <PlanCard {...plans} />
              </div>
            ))}
          </Masonry>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default PlanList;
