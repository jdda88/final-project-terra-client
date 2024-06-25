import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-feather";

function PlanCard({ title, _id}) {
  return (
    <div>
    
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="/images/blog/image-1.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>{title}</p> 
        </h5 >
        <Link
          to={`$/plan/${_id}`}
          className="font-normal text-gray-700 dark:text-gray-400"
        >
          <span className="text-black">leters here</span>
        </Link>
      </Card>
    </div>
  );
}

export default PlanCard;
